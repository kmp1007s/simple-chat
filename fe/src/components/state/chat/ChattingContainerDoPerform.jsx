import React, { useEffect, useRef, useCallback } from 'react';
import shortid from 'shortid';

import { useHistory } from 'react-router-dom';

import ChattingContainer from '@organisms/chat/ChattingContainer';
import Message from '@molecules/chat/Message';
import SystemMesage from '@atoms/chat/SystemMessage';
import MessageISent from '@molecules/chat/MessageISent';

function ChattingContainerDoPerform(props) {
  const { messages } = props;
  const history = useHistory();
  const { onLeave, currentUserName } = props;
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (!currentUserName) {
      alert('존재하지 않는 방입니다');
      history.push('/');
    }

    const unblock = history.block('방에서 나가시겠습니까?');
    return () => {
      if (currentUserName && onLeave) {
        onLeave();
      }
      unblock();
    };
  }, [history, currentUserName, onLeave]);

  return (
    <ChattingContainer>
      {messages &&
        messages.map((message) => {
          if (message.userName) {
            let MessageComponentToRender = Message;

            if (message.userName === currentUserName)
              MessageComponentToRender = MessageISent;

            return (
              <MessageComponentToRender
                key={shortid.generate()}
                message={message}
              />
            );
          } else
            return <SystemMesage key={shortid.generate()} msg={message.msg} />;
        })}
      <div ref={messagesEndRef}></div>
    </ChattingContainer>
  );
}

export default ChattingContainerDoPerform;
