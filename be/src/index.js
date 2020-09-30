require('dotenv').config();

const server = require('./server').run();

const IO = require('./lib/socketio');
const io = IO.listen(server);

io.on('connection', (socket) => {
  socket.on('fetch-rooms', () => {
    const roomNamesUserCreated = IO.room.getRoomNamesUserCreated(io);
    socket.emit('fetch-rooms', roomNamesUserCreated);
  });

  socket.on('enter-room', (roomName, userName) => {
    try {
      socket.userName = userName; // 사용자 이름 설정
      socket.join(roomName);
      socket.emit('enter-room-success', roomName, userName);

      io.to(roomName).emit('msg', {
        msg: `${userName}님이 입장했습니다.`,
      });

      const userNamesInRoom = IO.client.getUserNamesFromSocketsInRoom(
        io,
        roomName
      );
      io.to(roomName).emit('user-changed', userNamesInRoom);
    } catch (e) {
      console.error(e);
      socket.emit('enter-room-fail');
    }
  });

  socket.on('leave-room', (roomName) => {
    try {
      const { userName } = socket;
      socket.leave(roomName);
      socket.emit('leave-room-success');

      const roomIsAlive = IO.room.getRoomUserCreated(io, roomName);

      if (!roomIsAlive) {
        const roomNamesUserCreated = IO.room.getRoomNamesUserCreated(io); // 방 목록 갱신
        io.sockets.emit('fetch-rooms', roomNamesUserCreated); // 새로운 방 목록 broadcast

        return;
      }

      io.to(roomName).emit('msg', { msg: `${userName}님이 퇴장하셨습니다.` });

      const userNamesInRoom = IO.client.getUserNamesFromSocketsInRoom(
        io,
        roomName
      );
      io.to(roomName).emit('user-changed', userNamesInRoom);
    } catch (e) {
      console.error(e);
      socket.emit('leave-room-fail');
    }
  });

  socket.on('make-room', (roomName, userName) => {
    if (IO.room.getRoomUserCreated(io, roomName)) {
      socket.emit('make-room-fail', null);
    } else {
      socket.userName = userName;
      socket.join(roomName);

      const createdRoom = IO.room.getRoomUserCreated(io, roomName);
      createdRoom.creator = userName;

      socket.emit('make-room-success', roomName, userName);

      const userNamesInRoom = IO.client.getUserNamesFromSocketsInRoom(
        io,
        roomName
      );
      io.to(roomName).emit('user-changed', userNamesInRoom);

      io.to(roomName).emit('msg', {
        msg: '새로운 채팅방이 개설되었습니다!',
      });

      const roomNamesUserCreated = IO.room.getRoomNamesUserCreated(io); // 방 목록 갱신
      io.sockets.emit('fetch-rooms', roomNamesUserCreated); // 새로운 방 목록 broadcast
    }
  });

  socket.on('msg', ({ roomName, msg, userName }) => {
    io.to(roomName).emit('msg', { msg, userName });
  });

  socket.on('disconnect', () => {});
});
