import React from 'react';
import * as styles from './AttenderItem.style';

import UserName from '@atoms/chat/UserName';
import Profile from '@atoms/chat/Profile';

function AttenderItem({ attender }) {
  return (
    <styles.Container>
      <Profile />
      <UserName>{attender}</UserName>
    </styles.Container>
  );
}

export default AttenderItem;
