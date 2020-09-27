const errorLib = require('../error');

// 룸 객체의 배열을 전달받아 룸 이름의 배열을 반환함
function getNames(rooms) {
  try {
    const names = Object.keys(rooms);
    return names;
  } catch (e) {
    const { exception } = errorLib;
    throw new exception.create('GET_NAMES_NO_ROOMS', "Didn't get rooms");
  }
}

// 룸 배열을 전달받아 유저가 만든 룸들만 있는 객체로 반환
function filterUserCreated(rooms) {
  const roomNames = getNames(rooms);
  const roomsByUser = roomNames.reduce((filtered, name) => {
    const room = rooms[name];
    // 기본 생성된 Room은 Room에 속한 클라이언트와 Room의 이름이 같음
    if (!room.sockets.hasOwnProperty(name)) filtered[name] = room;
    return filtered;
  }, {});
  return roomsByUser;
}

// 연결된 소켓을 모두 가져옴
function getConnectedSockets(io) {
  const sockets = io.sockets.connected;
  return sockets;
}

// ID로 소켓을 가져옴
function getSocketById(io, socketID) {
  const sockets = getConnectedSockets(io);
  const socket = sockets[socketID];
  return socket;
}

// 소켓의 userName을 가져옴
function getUserName(io, socketID) {
  const socket = getSocketById(io, socketID);
  return socket.userName;
}

// Default Room을 포함한 모든 룸 가져옴
function loadAll(io) {
  if (io) {
    const rooms = io.sockets.adapter.rooms;
    return rooms;
  }
}

// Default Room을 포함한 모든 룸의 이름을 가져옴
function loadAllNames(io) {
  if (io) {
    const rooms = loadAll(io);
    const names = getNames(rooms);
    return names;
  }
}

// 유저가 만든 룸들만 가져옴
function loadAllUserCreated(io) {
  if (io) {
    const rooms = loadAll(io);
    const roomsByUserObj = filterUserCreated(rooms);
    const roomsByUserArr = Object.keys(roomsByUserObj);
    return roomsByUserArr.length > 0 ? roomsByUserObj : null;
  }
}

// 유저가 만든 룸들의 이름을 가져옴
function loadAllNamesUserCreated(io) {
  if (io) {
    const rooms = loadAllUserCreated(io);
    const names = rooms ? getNames(rooms) : null;
    return names;
  }
}

// 유저가 만든 방만 가져옴
function loadUserCreated(io, roomName) {
  if (io && roomName) {
    const rooms = loadAllUserCreated(io);
    const room =
      rooms && rooms.hasOwnProperty(roomName) ? rooms[roomName] : null;
    return room;
  }
}

// 방에 속한 클라이언트 소켓들
function getSocketsInRoom(io, roomName) {
  if (io && roomName) {
    const room = loadUserCreated(io, roomName);
    if (room) {
      return room.sockets;
    } else {
      // 방이 없을 경우
      const { exception } = errorLib;
      throw new exception.create('NO ROOM', "Can't find room");
    }
  }
}

// 방에 속한 클라이언트 ID들
function getSocketIDsInRoom(io, roomName) {
  if (io && roomName) {
    const sockets = getSocketsInRoom(io, roomName);
    return Object.keys(sockets);
  }
}

// 클라이언트의 이름들
function getUserNamesInRoom(io, roomName) {
  if (io && roomName) {
    const socketIDs = getSocketIDsInRoom(io, roomName);
    return socketIDs.map((ID) => getUserName(io, ID));
  }
}

module.exports = {
  getNames,
  loadAll,
  loadAllNames,
  loadAllUserCreated,
  loadAllNamesUserCreated,
  loadUserCreated,
  getSocketsInRoom,
  getSocketIDsInRoom,
  getUserNamesInRoom,
};
