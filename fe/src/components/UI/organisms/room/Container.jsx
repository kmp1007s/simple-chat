import React from 'react';
import * as styles from './Container.style';

function Container({ children }) {
  return <styles.Container>{children}</styles.Container>;
}

export default Container;
