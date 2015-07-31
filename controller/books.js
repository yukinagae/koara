'use strict';

var render = require('../config/render');
var parse = require('co-body');

var book = require('../model/book');

module.exports = {

  // actions
  list: function* () {
    var books = book.all();
    this.body = yield render('book/books.html', { books: books });
  },
  new: function* () {
    this.body = yield render('book/book-add.html');
  },
  create: function* () {
    var b = yield parse(this);
    book.insert(b.title, b.author);
    this.redirect('/');
  },
  edit: function* (id) {
    var b = book.find(id);
    this.body = yield render('book/book-edit.html', { book: b });
  },
  modify: function* (id) {
    var b = yield parse(this);
    book.update(id, b.title, b.author);
    this.redirect('/');
  },
  remove: function* (id) {
    book.delete(id);
    this.redirect('/');
  }

};
