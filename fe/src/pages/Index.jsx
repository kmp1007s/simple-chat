import React from 'react';

import DevideLeftAndRight from '@templates/DevideLeftAndRight';
import DevideTopAndBottom from '@templates/DevideTopAndBottom';

import TitleAndSummary from '@molecules/index/TitleAndSummary';

import EmphasisText from '@atoms/Index/EmphasisText';
import WhiteBox from '@atoms/Index/WhiteBox';

import RoomContainerDoPerform from '@components/state/room/RoomContainerDoPerform';
import WhiteBgButtonDoPerform from '@components/state/index/WhiteBgButtonDoPerform';
import SearchGroupDoPerform from '@components/state/index/SearchGroupDoPerform';

function Index({ socket, openRooms, searchedRooms, setSearchedRooms }) {
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
          <WhiteBgButtonDoPerform socket={socket}>
            방 만들기
          </WhiteBgButtonDoPerform>
        </>
      }
      rightComponent={
        <WhiteBox>
          <DevideTopAndBottom
            topRatio={93}
            bottomRatio={7}
            topComponent={
              <RoomContainerDoPerform
                socket={socket}
                openRooms={openRooms}
                searchedRooms={searchedRooms}
              />
            }
            bottomComponent={
              <SearchGroupDoPerform
                openRooms={openRooms}
                setSearchedRooms={setSearchedRooms}
              />
            }
          ></DevideTopAndBottom>
        </WhiteBox>
      }
    />
  );
}

export default Index;
