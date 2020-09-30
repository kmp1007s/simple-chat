import React from 'react';

import { useParams } from 'react-router-dom';

import DevideLeftAndRight from '@templates/DevideLeftAndRight';
import DevideTopAndBottom from '@templates/DevideTopAndBottom';

import RoomName from '@atoms/chat/RoomName';
import AttenderContainerDoPerform from '@components/state/chat/AttenderContainerDoPerform';
import MessageInputDoPerform from '@components/state/chat/MessageInputDoPerform';
import ChattingContainerDoPerform from '@components/state/chat/ChattingContainerDoPerform';

function Chat({ socket, attenders, currentUserName, messages, onLeave }) {
  const params = useParams();

  return (
    <>
      <DevideLeftAndRight
        leftRatio={21}
        rightRatio={79}
        leftComponent={
          <DevideTopAndBottom
            topRatio={9}
            bottomRatio={91}
            topComponent={<RoomName roomName={params.name} />}
            bottomComponent={
              <AttenderContainerDoPerform attenders={attenders} />
            }
          ></DevideTopAndBottom>
        }
        rightComponent={
          <DevideTopAndBottom
            topRatio={94}
            bottomRatio={6}
            topComponent={
              <ChattingContainerDoPerform
                messages={messages}
                currentUserName={currentUserName}
                onLeave={onLeave}
              />
            }
            bottomComponent={
              <MessageInputDoPerform
                socket={socket}
                roomName={params.name}
                currentUserName={currentUserName}
              />
            }
          ></DevideTopAndBottom>
        }
      ></DevideLeftAndRight>
    </>
  );
}

export default Chat;
