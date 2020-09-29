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
  }, [socket, roomName, currentUserName, inputValue]);

  return (
    <MessageInput
      type="text"
      placeholder="메시지를 입력해보세요!"
      onChange={onChange}
      value={inputValue}
      onMessage={onMessage}
    />
  );
}

export default MessageInputDoPerform;
