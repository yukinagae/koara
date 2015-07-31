'use strict';

var koa = require('koa');
var routes = require('./routes');
var serve = require('koa-static');
var app = koa();

routes(app);

// TODO this setting should be config.js
app.use(serve(__dirname + '/public'));
var port = 3000;

app.listen(port);
console.log('Listening server on port ' + port);
