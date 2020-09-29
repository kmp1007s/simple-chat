const Exception = require('../error/exception');
const _Object = require('../builtin/object');

function getRoomUserCreated(io, roomName) {
  if (io && roomName) {
    const roomsExcludeAutoCreated = getRoomsExcludeAutoCreated(io);

    let roomFound = null;
    if (roomsExcludeAutoCreated.hasOwnProperty(roomName))
      roomFound = roomsExcludeAutoCreated[roomName];

    return roomFound;
  }
}

function getRoomNamesUserCreated(io) {
  return getRoomNamesExcludeAutoCreated(io);
}

function getRoomNamesExcludeAutoCreated(io) {
  if (io) {
    const roomsExcludeAutoCreated = getRoomsExcludeAutoCreated(io);

    let roomNames = null;

    if (roomsExcludeAutoCreated)
      roomNames = getRoomNamesFromRoomsObj(roomsExcludeAutoCreated);

    return roomNames;
  }
}

function getRoomsUserCreated(io) {
  return getRoomsExcludeAutoCreated(io);
}

function getRoomsExcludeAutoCreated(io) {
  if (io) {
    const roomsIncludeAutoCreated = getRoomsIncludeAutoCreated(io);
    const roomsExcludeAutoCreatedObj = filterUserCreated(
      roomsIncludeAutoCreated
    );

    if (_Object.emptyObject(roomsExcludeAutoCreatedObj)) return null;
    else return roomsExcludeAutoCreatedObj;
  }
}

// 룸 배열을 전달받아 유저가 만든 룸들만 있는 객체로 반환
function filterUserCreated(roomsObj) {
  const roomNames = getRoomNamesFromRoomsObj(roomsObj);
  const roomsByUser = roomNames.reduce((filtered, name) => {
    const room = roomsObj[name];

    if (!autoCreatedRoom(room, name)) filtered[name] = room;

    return filtered;
  }, {});
  return roomsByUser;
}

function getRoomNamesIncludeAutoCreated(io) {
  if (io) {
    const roomsIncludeAutoCreated = getRoomsIncludeAutoCreated(io);
    const roomNamesIncludeAutoCreated = getRoomNamesFromRoomsObj(
      roomsIncludeAutoCreated
    );
    return roomNamesIncludeAutoCreated;
  }
}

function getRoomsIncludeAutoCreated(io) {
  if (io) {
    const roomsIncludeAutoCreated = io.sockets.adapter.rooms;
    return roomsIncludeAutoCreated;
  }
}

function getRoomNamesFromRoomsObj(roomsObj) {
  try {
    const roomNames = Object.keys(roomsObj);
    return roomNames;
  } catch (e) {
    throw new Exception.create('GET_ROOM_NAMES_NO_ROOMS', "Didn't get rooms");
  }
}

function autoCreatedRoom(room, roomName) {
  const roomNameEqualSocketID = room.sockets.hasOwnProperty(roomName);

  if (roomNameEqualSocketID) return true;
  else return false;
}

module.exports = {
  getRoomNamesIncludeAutoCreated,
  getRoomsIncludeAutoCreated,
  getRoomNamesFromRoomsObj,
  getRoomNamesUserCreated,
  getRoomNamesExcludeAutoCreated,
  getRoomsUserCreated,
  getRoomsExcludeAutoCreated,
  getRoomUserCreated,
  filterUserCreated,
};
