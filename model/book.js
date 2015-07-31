'use strict';

var seq = 3;
var repo = [{ id: 1, title: 'foo', author: 'John' }, { id: 2, title: 'bar', author: 'Sam' }];

module.exports = {

  all: function() {
    return repo;
  },
  find: function(id) {
    for (var b of repo) {
      if (b.id == id) {
        return b;
      }
    }
  },
  insert: function(title, author) {
    var b = { id: seq, title: title, author: author };
    repo.push(b);
    seq = seq + 1; // increment sequence id
    return b;
  },
  update: function(id, title, author) {
    for (var b of repo) {
      if (b.id == id) {
        // TODO
      }
    }
  },
  delete: function(id) {
    for (var b of repo) {
      if (b.id == id) {
        // TODO
        return true;
      }
    }
    return false;
  }

};
