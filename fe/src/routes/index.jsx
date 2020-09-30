import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '@pages/Index';
import Chat from '@pages/Chat';

function Routes({
  socket,
  openRooms,
  searchedRooms,
  setSearchedRooms,
  attenders,
  currentUserName,
  messages,
  onLeave,
}) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Index
            socket={socket}
            openRooms={openRooms}
            searchedRooms={searchedRooms}
            setSearchedRooms={setSearchedRooms}
          />
        )}
      />
      <Route
        exact
        path="/chat/:name"
        render={() => (
          <Chat
            socket={socket}
            attenders={attenders}
            currentUserName={currentUserName}
            messages={messages}
            onLeave={onLeave}
          />
        )}
      />
    </Switch>
  );
}

export default Routes;
