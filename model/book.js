'use strict';

var _ = require('underscore');

var seq = 3;
var repo = [{ id: 1, title: 'foo', author: 'John' }, { id: 2, title: 'bar', author: 'Sam' }];

// TODO use MongoDB
module.exports = {

  all: function* () {
    return yield repo;
  },
  find: function* (id) {
    return yield _.find(repo, function(b) {
      return b.id == id;
    });
  },
  insert: function* (title, author) {
    var b = { id: seq, title: title, author: author };
    repo.push(b);
    seq = seq + 1; // increment sequence id
    return yield b;
  },
  update: function* (id, title, author) {
    var existed = _.find(repo, function(b) {
      return b.id == id;
    });
    existed.title = title;
    existed.author = author;
    return yield existed;
  },
  delete: function* (id) {
    var removed = _.find(repo, function(b) {
      return b.id == id;
    });
    repo = _.filter(repo, function(b) {
      return b.id != id;
    });
    return yield removed;
  }

};
