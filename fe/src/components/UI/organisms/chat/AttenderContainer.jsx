import React from 'react';
import * as styles from './AttenderContainer.style';

function AttenderContainer(props) {
  return <styles.Container>{props.children}</styles.Container>;
}

export default AttenderContainer;
