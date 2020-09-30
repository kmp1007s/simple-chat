import React from 'react';
import * as styles from './RoomItem.style';

import GrayBorderButton from '@atoms/GrayBorderButton';
import Title from '@atoms/room/Title';

function RoomItem({ room, onEnter }) {
  return (
    <styles.Container onClick={onEnter}>
      <Title>{room}</Title>
      <GrayBorderButton>입장</GrayBorderButton>
    </styles.Container>
  );
}

export default RoomItem;
