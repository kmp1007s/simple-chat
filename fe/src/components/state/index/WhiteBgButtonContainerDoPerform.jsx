import React from 'react';

import WhiteBgButton from '@atoms/WhiteBgButton';

const makeRoom = (socket, roomName, userName) => {
  if (socket) {
    socket.emit('make-room', roomName, userName);
  }
};

function WhiteBgButtonContainerDoPerform(props) {
  return (
    <WhiteBgButton
      onClick={() => {
        const roomName = prompt('방 이름을 입력해주세요!');
        const userName = prompt('사용할 이름을 입력해주세요!');
        makeRoom(props.socket, roomName, userName);
      }}
      {...props}
    >
      {props.children}
    </WhiteBgButton>
  );
}

export default WhiteBgButtonContainerDoPerform;
