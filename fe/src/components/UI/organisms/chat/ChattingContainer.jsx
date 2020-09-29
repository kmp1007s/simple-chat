import React from 'react';

import * as styles from './ChattingContainer.style';

function ChattingContainer({ children }) {
  return <styles.Container>{children}</styles.Container>;
}

export default ChattingContainer;
