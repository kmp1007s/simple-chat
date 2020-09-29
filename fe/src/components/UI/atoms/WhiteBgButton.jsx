import React from 'react';
import * as styles from './WhiteBgButton.style';

function WhiteBgButton(props) {
  return <styles.Button {...props}>{props.children}</styles.Button>;
}

export default WhiteBgButton;
