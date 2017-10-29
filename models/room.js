var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  roomname: String,
  roomdesc: String  
});

module.exports = mongoose.model('Room', RoomSchema);
