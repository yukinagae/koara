'use strict';

var render = require('../config/render');

var book = require('../model/book');

module.exports = {

  // actions
  list: function* () {
    var books = book.all();
    this.body = yield render('book/books.html', { books: books });
  },
  show: function* (id) {
    var book = book.find(id);
    this.body = book;
  },
  create: function* () {
    var b = yield parse(this);
    book.insert(b.title, b.author);
    this.list();
  },
  edit: function* (id) {
    var b = yield parse(this);
    book.update(id, b.title, b.author);
    this.list();
  },
  remove: function* (id) {
    book.delete(id);
    this.list();
  }

};
