'use strict';

module.exports = function(Message) {
  Message.observe('before save', function(ctx, next) {
    if (ctx.isNewInstance) {
      Message.app.io.emit('message', ctx.instance);
    }
    next();
  });
};
