import React from 'react';

import DevideLeftAndRight from '@templates/DevideLeftAndRight';
import DevideTopAndBottom from '@templates/DevideTopAndBottom';

import TitleAndSummary from '@molecules/index/TitleAndSummary';

import EmphasisText from '@atoms/Index/EmphasisText';
import WhiteBox from '@atoms/Index/WhiteBox';

import RoomContainerDoPerform from '@components/state/room/RoomContainerDoPerform';
import WhiteBgButtonContainerDoPerform from '@components/state/index/WhiteBgButtonContainerDoPerform';

function Index({ socket, rooms }) {
  return (
    <DevideLeftAndRight
      leftCenter
      leftPadding="3rem 3rem"
      leftComponent={
        <>
          <TitleAndSummary
            title="Simple Chat"
            summary={
              <span>
                <EmphasisText>심플챗</EmphasisText>은 간단한 인터페이스를
                바탕으로 한 크로스 플랫폼 채팅입니다
              </span>
            }
          ></TitleAndSummary>
          <WhiteBgButtonContainerDoPerform socket={socket}>
            방 만들기
          </WhiteBgButtonContainerDoPerform>
        </>
      }
      rightComponent={
        <WhiteBox>
          <DevideTopAndBottom
            topComponent={
              <RoomContainerDoPerform socket={socket} rooms={rooms} />
            }
            bottomComponent={<div>bottomComponent</div>}
          ></DevideTopAndBottom>
        </WhiteBox>
      }
    />
  );
}

export default Index;
