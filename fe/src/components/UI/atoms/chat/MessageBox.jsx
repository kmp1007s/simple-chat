import React from 'react';

import * as styles from './MessageBox.style';

function MessageBox({ children }) {
  return <styles.Container>{children}</styles.Container>;
}

export default MessageBox;
