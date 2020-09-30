import React from 'react';

import * as styles from './SearchGroup.style';
import Input from '@atoms/Input';

function SearchGroup(props) {
  return (
    <styles.Container>
      <Input {...props} />
    </styles.Container>
  );
}

export default SearchGroup;
