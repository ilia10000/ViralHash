var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , Twit = require('twit')
  , io = require('socket.io').listen(server);

server.listen(8080);

app.use(express.static('public'));

require('./routes')(app, io);

var watchList = ['#trump', '#obama', '#bloomberg'];

var T = new Twit({
    consumer_key: 'azjoBeKn5omc0B49k6PcGC8aR',
    consumer_secret: 'TFOLKPCNlFc0WjAgGYsD1NXi2LryZ8QqVE2KE1ZLo0oUKfSwpX',
    access_token: '269052143-ouDZTZerNhvHT7mCao6YhnLlBO5VO4VlNnRHUDC1',
    access_token_secret: '1boH48ynA3FtyZ9KefthyHZFhuXLN3zQq6ufBtqFbCCRI'
});




io.sockets.on('connection', function (socket) {

var stream = T.stream('statuses/filter', { track: watchList });

stream.on('tweet', function (tweet) {

    io.sockets.emit('stream', tweet);


  }); 
});


