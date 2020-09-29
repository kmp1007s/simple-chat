import React from 'react';
import * as styles from './Summary.style';

function Summary(props) {
  return <styles.Summary {...props}>{props.children}</styles.Summary>;
}

export default Summary;
