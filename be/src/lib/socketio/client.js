const Exception = require('../error/exception');
const Room = require('./room');

function getUserNamesFromSocketsInRoom(io, roomName) {
  if (io && roomName) {
    const socketIDsInRoom = getSocketIDsInRoom(io, roomName);
    return socketIDsInRoom.map((socketID) =>
      getUserNameBySocketID(io, socketID)
    );
  }
}

function getSocketIDsInRoom(io, roomName) {
  if (io && roomName) {
    const sockets = getSocketsInRoom(io, roomName);
    return getSocketIDs(sockets);
  }
}

function getSocketsInRoom(io, roomName) {
  if (io && roomName) {
    const room = Room.getRoomUserCreated(io, roomName);
    if (room) {
      return room.sockets;
    } else {
      throw new Exception.create('NO ROOM', "Can't find room");
    }
  }
}

function getUserNameBySocketID(io, socketID) {
  const socket = getSocketByID(io, socketID);
  return socket.userName;
}

function getSocketByID(io, socketID) {
  const connectedSockets = getConnectedSockets(io);
  const socket = connectedSockets[socketID];
  return socket;
}

function getConnectedSockets(io) {
  const sockets = io.sockets.connected;
  return sockets;
}

function getSocketIDs(sockets) {
  return Object.keys(sockets);
}

module.exports = {
  getUserNamesFromSocketsInRoom,
  getSocketIDsInRoom,
  getSocketsInRoom,
  getUserNameBySocketID,
  getSocketByID,
  getConnectedSockets,
  getSocketIDs,
};
