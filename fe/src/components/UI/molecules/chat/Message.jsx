import React from 'react';

import * as styles from './Message.style';

import MessageBox from '@atoms/chat/MessageBox';
import MessageSender from '@atoms/chat/MessageSender';

function Message({ message }) {
  return (
    <styles.Container>
      <MessageSender>{message.userName}</MessageSender>
      <MessageBox>{message.msg}</MessageBox>
    </styles.Container>
  );
}

export default Message;
