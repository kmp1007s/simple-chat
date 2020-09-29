import React from 'react';
import * as styles from './RoomName.style';

function RoomName({ roomName }) {
  return (
    <styles.Container>
      <styles.RoomNameText>{roomName}</styles.RoomNameText>
    </styles.Container>
  );
}

export default RoomName;
