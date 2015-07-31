'use strict';
var route = require('koa-route');

// controllers
var books = require('./controller/books');

module.exports = function routes(app) {

  // routes
  app.use(route.get('/', books.list));
  app.use(route.get('/book', books.list));
  app.use(route.get('/book/new', books.new));
  app.use(route.post('/book', books.create));
  app.use(route.get('/book/:id/edit', books.edit));
  app.use(route.post('/book/:id', books.modify));
  app.use(route.get('/book/:id/remove', books.remove));

};
