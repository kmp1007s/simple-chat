import React from 'react';

import WhiteBgButton from '@atoms/WhiteBgButton';
import { isEmptyOrSpaces } from '@lib/builtin/string';

const makeRoom = (socket, roomName, userName) => {
  if (socket) {
    socket.emit('make-room', roomName, userName);
  }
};

function WhiteBgButtonDoPerform(props) {
  return (
    <WhiteBgButton
      onClick={() => {
        const roomName = prompt('방 이름을 입력해주세요!');

        if (isEmptyOrSpaces(roomName)) {
          alert('방 이름을 제대로 입력해주세요!');
          return;
        }

        const userName = prompt('사용할 이름을 입력해주세요!');

        if (isEmptyOrSpaces(userName)) {
          alert('사용할 이름을 제대로 입력해주세요!');
          return;
        }

        makeRoom(props.socket, roomName, userName);
      }}
      {...props}
    >
      {props.children}
    </WhiteBgButton>
  );
}

export default WhiteBgButtonDoPerform;
