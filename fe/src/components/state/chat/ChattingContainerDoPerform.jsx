import React from 'react';
import shortid from 'shortid';

import ChattingContainer from '@organisms/chat/ChattingContainer';
import Message from '@molecules/chat/Message';
import SystemMesage from '@atoms/chat/SystemMessage';
import MessageISent from '@molecules/chat/MessageISent';

function ChattingContainerDoPerform(props) {
  return (
    <ChattingContainer>
      {props.messages &&
        props.messages.map((message) => {
          if (message.userName) {
            if (message.userName === props.currentUserName) {
              console.log('내가 보낸 메시지');
              return (
                <MessageISent key={shortid.generate()} message={message} />
              );
            } else
              return <Message key={shortid.generate()} message={message} />;
          } else
            return <SystemMesage key={shortid.generate()} msg={message.msg} />;
        })}
    </ChattingContainer>
  );
}

export default ChattingContainerDoPerform;
