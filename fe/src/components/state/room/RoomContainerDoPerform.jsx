import React from 'react';
import shortid from 'shortid';

import Container from '@organisms/room/Container';
import RoomItem from '@molecules/room/RoomItem';

const enterRoom = (socket, room, userName) => {
  if (socket) {
    socket.emit('enter-room', room, userName);
  }
};

const leaveRoom = (socket, room) => {
  if (socket) socket.emit('leave-room', room);
};

function RoomContainerDoPerform({ socket, rooms }) {
  return (
    <Container>
      {rooms &&
        rooms.map((room) => (
          <RoomItem
            key={shortid.generate()}
            room={room}
            onEnter={() => {
              const userName = prompt('사용할 이름을 입력해주세요');
              enterRoom(socket, room, userName);
            }}
            onLeave={() => {
              leaveRoom(socket, room);
            }}
          />
        ))}
    </Container>
  );
}

export default RoomContainerDoPerform;
