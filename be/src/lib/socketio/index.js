const room = require('./room');
const client = require('./client');
const socketio = require('socket.io');

module.exports = {
  listen: (server) => {
    const io = socketio.listen(server);
    return io;
  },
  room,
  client,
};
