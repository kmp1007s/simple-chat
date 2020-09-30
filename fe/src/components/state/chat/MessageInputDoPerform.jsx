import React, { useState, useCallback } from 'react';

import MessageInput from '@molecules/chat/MessageInput';

function MessageInputDoPerform({ socket, roomName, currentUserName }) {
  const [inputValue, setInputValue] = useState('');

  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const onMessage = useCallback(() => {
    console.log(currentUserName);

    socket.emit('msg', {
      roomName: roomName,
      msg: inputValue,
      userName: currentUserName,
    });

    setInputValue('');
  }, [socket, roomName, currentUserName, inputValue]);

  const onKeyUp = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        console.log('enter');
        onMessage();
      }
    },
    [onMessage]
  );

  return (
    <MessageInput
      type="text"
      placeholder="메시지를 입력해보세요!"
      onChange={onChange}
      value={inputValue}
      onMessage={onMessage}
      onKeyUp={onKeyUp}
    />
  );
}

export default MessageInputDoPerform;
