import React from 'react';

import * as styles from './SystemMessage.style';

function SystemMesage({ msg }) {
  return (
    <styles.Container>
      <styles.Message>{msg}</styles.Message>
    </styles.Container>
  );
}

export default SystemMesage;
