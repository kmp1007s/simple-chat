import React from 'react';

import * as styles from './DevideLeftAndRight.style';

function DevideLeftAndRight(props) {
  return (
    <styles.Container>
      <styles.LeftArea {...props}>{props.leftComponent}</styles.LeftArea>
      <styles.RightArea {...props}>{props.rightComponent}</styles.RightArea>
    </styles.Container>
  );
}

export default DevideLeftAndRight;
