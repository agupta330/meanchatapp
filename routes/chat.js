var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
var Q = require('q');
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
var Chat = require('../models/Chat.js');
var moment = require('moment');
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

  // console.log(dt + '-' + month + '-' + year);
  var datereturn = dt + '-' + month + '-' + year
  return datereturn;
}


function getdaysArray() {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
}

router.get('/:room', function (req, res, next) {
  Chat.find({ room: req.params.room })
  .sort({updated_at:1})
  .exec(function (err, chats) {
    if (err) return next(err);
    var chats = chats;
    var chatArray = [];
    var otherArray = [];

    for (var i = 0; i < chats.length; i++) {

      if (i != chats.length - 1) {
        chats[i].messagesArray = [];
        chats[i].date = ISOToDateFn(chats[i].updated_at);
        chats[i + 1].date = ISOToDateFn(chats[i + 1].updated_at);
        var firstDate = chats[i].date;
        var secondDate = chats[i + 1].date;
        console.log(firstDate)
        console.log(secondDate);
        if (firstDate == secondDate) {
          console.log("same chat continuing in same day check for nickname same and time five minute");
          console.log(new Date(chats[i + 1].updated_at));
          console.log(new Date(chats[i].updated_at));
          console.log("minus time", new Date(chats[i + 1].updated_at).getMinutes() - new Date(chats[i].updated_at).getMinutes());
          if ((chats[i].nickname == chats[i + 1].nickname) && (new Date(chats[i + 1].updated_at).getMinutes() - new Date(chats[i].updated_at).getMinutes() <= 5)) {
            console.log("Iam in same cont")
            chats[i].messagesArray.push({ "message": chats[i].message, "timestamp": chats[i].updated_at, "nickname": chats[i].nickname });
            chats[i].messagesArray.push({ "message": chats[i + 1].message, "timestamp": chats[i + 1].updated_at, "nickname": chats[i + 1].nickname });
            // delete chats[i+1];
            // delete chats[i+1];
            chats.splice(i + 1, 1)
            // var chats = chats;
          }
          else {
            chats[i].messagesArray.push({ "message": chats[i].message, "timestamp": chats[i].updated_at, "nickname": chats[i].nickname });
          }
        }
        if (firstDate != secondDate) {
          console.log("same chat not continuing different day");
          chats[i].messagesArray.push({ "message": chats[i].message, "timestamp": chats[i].updated_at, "nickname": chats[i].nickname });
        }
      }


      if (i == chats.length - 1) {
        chats[i].messagesArray = [];
        chats[i].date = ISOToDateFn(chats[i].updated_at);
        chats[i].messagesArray.push({ "message": chats[i].message, "timestamp": chats[i].updated_at, "nickname": chats[i].nickname });
        var array = chats;
        var result = [];
        result = array.reduce(function (r, a) {
          var date = new Date(a.updated_at);
          var today = new Date();
          var yesterday = new Date();
          var days = getdaysArray();
          yesterday.setDate(today.getDate() - 1);
          if (date.toDateString() === today.toDateString()) {
            var label = 'Today';
          }
          else if (date.toDateString() === yesterday.toDateString()) {
            var label = 'Yesterday';
          }
          else if (today.getTime() - date.getTime() < 6 * 24 * 60 * 60 * 1000) {
            var label = days[date.getDay()];
          }
          else if (today.getFullYear() - date.getFullYear() >= 1) {
            var label = moment(new Date(a.updated_at)).format('dddd, MMMM Do YYYY');
          }
          else {
            var label = moment(new Date(a.updated_at)).format('dddd, MMMM Do');
          }
          r[label] = r[label] || [];
          r[label].push(
            {
              name: label,
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg",
              messages: a,
              messagesArray: a.messagesArray
            });
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
