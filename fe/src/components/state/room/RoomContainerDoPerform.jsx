import React from 'react';
import shortid from 'shortid';

import Container from '@organisms/room/Container';
import RoomItem from '@molecules/room/RoomItem';

import { isEmptyOrSpaces } from '@lib/builtin/string';

const enterRoom = (socket, room, userName) => {
  if (socket) {
    socket.emit('enter-room', room, userName);
  }
};

function RoomContainerDoPerform({ socket, openRooms, searchedRooms }) {
  let roomsToRender = searchedRooms || openRooms;

  return (
    <Container>
      {roomsToRender &&
        roomsToRender.map((room) => (
          <RoomItem
            key={shortid.generate()}
            room={room}
            onEnter={() => {
              const userName = prompt('사용할 이름을 입력해주세요');

              if (isEmptyOrSpaces(userName)) {
                alert('사용할 이름을 제대로 입력해주세요!');
                return;
              }

              enterRoom(socket, room, userName);
            }}
          />
        ))}
    </Container>
  );
}

export default RoomContainerDoPerform;
