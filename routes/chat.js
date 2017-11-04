var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
var Q = require('q');
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
var Chat = require('../models/Chat.js');

// server.listen(3001);

// // socket io
// io.on('connection', function (socket) {
//   console.log('User connected');
//   socket.on('disconnect', function() {
//     console.log('User disconnected');
//   });
//   socket.on('save-message', function (data) {
//     console.log(data);
//     io.emit('new-message', { message: data });
//   });
// });

/* GET ALL CHATS */

function ISOToDateFn(date) {//takes date in dd-mm-yyyy format
  date = new Date(date);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  console.log(dt + '-' + month + '-' + year);
  var datereturn = dt + '-' + month + '-' + year
  return datereturn;
}
router.get('/:room', function (req, res, next) {
  Chat.find({ room: req.params.room }, function (err, chats) {
    if (err) return next(err);
    var chats = chats;
    var chatArray = [];
    var otherArray = [];
    for (var i = 0; i < chats.length; i++) {
      console.log(chats[i].updated_at);
      chats[i].date = ISOToDateFn(chats[i].updated_at);
      if (i == chats.length - 1) {
        var array = chats;
        var result = [];
          result = array.reduce(function (r, a) {
            r[a.date] = r[a.date] || [];
            r[a.date].push({name:a.date,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg",messages:a});
            return r;
          }, Object.create(null));

        // console.log(result);
        res.json(result);
      }
    }

  });
});

function items(chats, date) {
  var deffered = Q.defer();

}
/* GET SINGLE CHAT BY ID */
router.get('/:id', function (req, res, next) {
  Chat.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CHAT */
router.post('/', function (req, res, next) {
  Chat.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CHAT */
router.put('/:id', function (req, res, next) {
  Chat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CHAT */
router.delete('/:id', function (req, res, next) {
  Chat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
