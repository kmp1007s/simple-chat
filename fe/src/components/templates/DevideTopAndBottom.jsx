import React from 'react';
import * as styles from './DevideTopAndBottom.style';

function DevideTopAndBottom(props) {
  return (
    <styles.Container>
      <styles.TopArea {...props}>{props.topComponent}</styles.TopArea>
      <styles.BottomArea {...props}>{props.bottomComponent}</styles.BottomArea>
    </styles.Container>
  );
}

export default DevideTopAndBottom;
