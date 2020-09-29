import React from 'react';

import * as styles from './MessageInput.style';

import Input from '@atoms/Input';

function MessageInput(props) {
  return (
    <styles.Container>
      <styles.InputContainer>
        <Input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </styles.InputContainer>
      <styles.ButtonContainer>
        <styles.StyledPaperPlane onClick={props.onMessage} />
      </styles.ButtonContainer>
    </styles.Container>
  );
}

export default MessageInput;
