const room = require('./room');
const socketio = require('socket.io');

module.exports = {
  listen: (server) => {
    const io = socketio.listen(server);
    return io;
  },
  room,
};
