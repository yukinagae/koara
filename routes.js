'use strict';
var route = require('koa-route');

// controllers
var books = require('./controller/books');

module.exports = function routes(app) {

  // routes
  app.use(route.get('/', books.list));
  app.use(route.get('/book', books.list));
  app.use(route.get('/book/:id', books.show));
  app.use(route.post('/book', books.create));
  app.use(route.post('/book/:id/edit', books.edit));
  app.use(route.post('/book/:id/remove', books.remove));

};
