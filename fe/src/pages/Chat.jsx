import React from 'react';

import { useParams } from 'react-router-dom';

import DevideLeftAndRight from '@templates/DevideLeftAndRight';
import DevideTopAndBottom from '@templates/DevideTopAndBottom';

import RoomName from '@atoms/chat/RoomName';
import AttenderContainerDoPerform from '@components/state/chat/AttenderContainerDoPerform';

function Chat({ socket, attenders }) {
  const params = useParams();

  return (
    <>
      <DevideLeftAndRight
        leftRatio={25}
        rightRatio={75}
        leftComponent={
          <DevideTopAndBottom
            topRatio={8}
            bottomRatio={92}
            topComponent={<RoomName roomName={params.name} />}
            bottomComponent={
              <AttenderContainerDoPerform attenders={attenders} />
            }
          ></DevideTopAndBottom>
        }
        rightComponent={<h1>this is right</h1>}
      ></DevideLeftAndRight>
    </>
  );
}

export default Chat;
