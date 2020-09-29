import React from 'react';
import * as styles from './GrayBorderButton.style';

function GrayBorderButton(props) {
  return <styles.Button {...props}>{props.children}</styles.Button>;
}

export default GrayBorderButton;
