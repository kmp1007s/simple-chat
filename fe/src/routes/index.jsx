import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '@pages/Index';
import Chat from '@pages/Chat';

function Routes({
  socket,
  rooms,
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
        render={() => <Index socket={socket} rooms={rooms} />}
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
