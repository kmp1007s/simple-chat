import React from 'react';
import * as styles from './Title.style';

function Title(props) {
  return <styles.Title {...props}>{props.children}</styles.Title>;
}

export default Title;
