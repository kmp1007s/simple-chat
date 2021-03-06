import React, { useState, useEffect, useCallback } from 'react';

import io from 'socket.io-client';
import Routes from './routes';

import { useHistory } from 'react-router-dom';
import { messageNotificationAudio } from '@constants/index';

const socket = io('http://localhost:8080');

function App() {
  const [currentRoom, setCurrentRoom] = useState(undefined);
  const [attenders, setAttenders] = useState(['김두식']);
  const [openRooms, setOpenRooms] = useState(null);
  const [searchedRooms, setSearchedRooms] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [messages, setMessages] = useState([
    { msg: '어서오세요!', userName: '환영합니다' },
    { msg: '이 메시지는 시스템 메시지입니다!' },
  ]);

  const history = useHistory();

  const listenEvent = useCallback(() => {
    // 방 목록 가져오기
    socket.on('fetch-rooms', (rooms) => {
      setOpenRooms(rooms); // props로 넘겨주는 함수가 아니기 때문에 함수형 업데이트를 사용하지 않아도 됨
    });

    // 방 만들기
    socket.on('make-room-success', (roomName, userName) => {
      setCurrentRoom(roomName);
      setCurrentUserName(userName);
    });

    socket.on('make-room-fail', () => {
      alert('이미 존재하는 방입니다');
    });

    // 방 참가자 변경
    socket.on('user-changed', (attenders) => {
      setAttenders(attenders);
    });

    // 방 입장 응답
    socket.on('enter-room-success', (roomName, userName) => {
      alert('방에 입장했습니다.');
      setCurrentRoom(roomName);
      setCurrentUserName(userName);
    });

    socket.on('enter-room-fail', () => {});

    // 방 퇴장 응답
    socket.on('leave-room-success', () => {
      alert('방에서 나왔습니다');

      setCurrentRoom(undefined);
      setAttenders([]);
      setCurrentUserName(undefined);
      setMessages([]);
    });

    // 채팅방의 메시지를 받음
    socket.on('msg', (message) => {
      setMessages((messages) => messages.concat(message));
      messageNotificationAudio.play();
    });
  }, []);

  const initialEmit = useCallback(() => {
    socket.emit('fetch-rooms');
  }, []);

  const onLeave = useCallback(() => {
    socket.emit('leave-room', currentRoom);
  }, [currentRoom]);

  // 초기 한번만 실행
  useEffect(() => {
    listenEvent();
    initialEmit();
  }, [listenEvent, initialEmit]);

  useEffect(() => {
    if (currentRoom) {
      history.push(`/chat/${currentRoom}`);
    }
  }, [history, currentRoom]);

  return (
    <>
      <Routes
        socket={socket}
        openRooms={openRooms}
        searchedRooms={searchedRooms}
        setSearchedRooms={setSearchedRooms}
        attenders={attenders}
        currentUserName={currentUserName}
        messages={messages}
        onLeave={onLeave}
      />
    </>
  );
}

export default App;
