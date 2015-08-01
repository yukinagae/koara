'use strict';

var render = require('../config/render');
var parse = require('co-body');

var book = require('../model/book');

module.exports = {

  // actions
  list: function* () {
    var books = yield book.all();
    this.body = yield render('book/books.html', { books: books });
  },
  new: function* () {
    this.body = yield render('book/book-add.html');
  },
  create: function* () {
    var input = yield parse(this);
    var inserted = yield book.insert(input.title, input.author);
    if (!inserted) {
      this.throw(405, 'Unable to add new book.');
    }
    this.redirect('/');
  },
  edit: function* (id) {
    var existed = yield book.find(id);
    if (!existed) {
      this.throw(404, "Book doesn't exist.");
    }
    this.body = yield render('book/book-edit.html', { book: existed });
  },
  modify: function* (id) {
    var input = yield parse(this);
    var updated = yield book.update(id, input.title, input.author);
    if (!updated) {
      this.throw(405, "Unable to update book %s.", input.title);
    }
    this.redirect('/');
  },
  remove: function* (id) {
    var removed = yield book.delete(id);
    if(!removed) {
      this.throw(405, "Unable to delete book.");
    }
    this.redirect('/');
  }

};
