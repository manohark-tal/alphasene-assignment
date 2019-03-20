'use strict';
const messageController = require('./messageController');
module.exports = app => {
  app.io.on('connection', function(socket) {
    messageController(app, socket);
    socket.on('disconnect', function() {
      console.log('User Disconnected');
    });
  });
};
