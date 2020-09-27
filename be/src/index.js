require('dotenv').config();

const server = require('./server').run();

const ioLib = require('./lib/socket');
const io = ioLib.listen(server);

io.on('connection', (socket) => {
  // 방 목록 가져오기 요청 응답
  socket.on('fetch-rooms', () => {
    const roomNames = ioLib.room.loadAllNamesUserCreated(io);
    socket.emit('fetch-rooms', roomNames);
  });

  // 방 입장 요청 응답
  socket.on('enter-room', (roomName, userName) => {
    try {
      socket.userName = userName; // 사용자 이름 설정
      socket.join(roomName);
      socket.emit('enter-room-success', roomName);

      io.to(roomName).emit('msg', {
        msg: `${userName}님이 입장했습니다.`,
      });

      const userNames = ioLib.room.getUserNamesInRoom(io, roomName);
      io.to(roomName).emit('user-changed', userNames);
      console.log(`${roomName} 인원 변동: ${userNames}`);
    } catch (e) {
      console.error(e);
      socket.emit('enter-room-fail');
    }
  });

  // 방 퇴장 요청 응답
  socket.on('leave-room', (roomName) => {
    try {
      const { userName } = socket;
      socket.leave(roomName);
      socket.emit('leave-room-success');

      io.to(roomName).emit('msg', { msg: `${userName}님이 퇴장하셨습니다.` });

      const userNames = ioLib.room.getUserNamesInRoom(io, roomName);
      io.to(roomName).emit('user-changed', userNames);
      console.log(`${roomName} 인원 변동: ${userNames}`);
    } catch (e) {
      console.error(e);
      socket.emit('leave-room-fail');
    }
  });

  // 방 생성 요청 응답
  socket.on('make-room', (roomName, userName) => {
    if (ioLib.room.loadUserCreated(io, roomName)) {
      // 방이 중복된다면
      socket.emit('make-room-fail', null);
    } else {
      // 방을 생성할 수 있다면
      socket.userName = userName;
      socket.join(roomName);

      socket.emit('make-room-success', roomName);

      io.to(roomName).emit('msg', {
        msg: '새로운 채팅방이 개설되었습니다!',
      });

      const roomNames = ioLib.room.loadAllNamesUserCreated(io); // 방 목록 갱신
      io.sockets.emit('fetch-rooms', roomNames); // 새로운 방 목록 broadcast
    }
  });

  socket.on('msg', ({ roomName, msg, userName }) => {
    io.to(roomName).emit('msg', { msg, userName });
  });

  socket.on('disconnect', () => {});
});
