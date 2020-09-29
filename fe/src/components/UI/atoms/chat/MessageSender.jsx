import React from 'react';

import * as styles from './MessageSender.style';

function MessageSender({ children }) {
  return <styles.Container>{children}</styles.Container>;
}

export default MessageSender;
