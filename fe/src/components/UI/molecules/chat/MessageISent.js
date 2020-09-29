import React from 'react';

import * as styles from './MessageISent.style';
import MessageSender from '@atoms/chat/MessageSender';
import MessageBox from '@atoms/chat/MessageBox';

const MessageISent = function ({ message }) {
  return (
    <styles.Container>
      <MessageSender>{message.userName}</MessageSender>
      <MessageBox>{message.msg}</MessageBox>
    </styles.Container>
  );
};

export default MessageISent;
