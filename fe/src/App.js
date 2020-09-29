import React, { useState, useEffect, useCallback } from 'react';

import io from 'socket.io-client';
import Routes from './routes';

import { useHistory } from 'react-router-dom';

const socket = io('http://localhost:8080');

function App() {
  const [currentRoom, setCurrentRoom] = useState(undefined);
  const [attenders, setAttenders] = useState(['김두식']);
  const [openRooms, setOpenRooms] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [messages, setMessages] = useState([
    { msg: 'dummy msg', userName: '김두식' },
    { msg: 'syste msg' },
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
      console.log(attenders);
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
    socket.on('leave-room', (result) => {
      if (result) {
        alert('방에서 나왔습니다');
      } else {
        alert('방에서 나오지 못했습니다');
      }
    });

    // 채팅방의 메시지를 받음
    socket.on('msg', (message) => {
      setMessages((messages) => messages.concat(message));

      if (message.msg) {
        if (message.userName) {
          console.log(`${message.userName}: ${message.msg}`);
        } else {
          console.log(message.msg);
        }
      }
    });
  }, []);

  const initialEmit = useCallback(() => {
    socket.emit('fetch-rooms');
  }, []);

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
        rooms={openRooms}
        attenders={attenders}
        currentUserName={currentUserName}
        messages={messages}
      />
      <div>
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    socket.emit('msg', {*/}
        {/*      roomName: currentRoom,*/}
        {/*      msg: 'msg test',*/}
        {/*      userName: 'userName2',*/}
        {/*    });*/}
        {/*  }}*/}
        {/*>*/}
        {/*  전송*/}
        {/*</button>*/}
      </div>
    </>
  );
}

export default App;
