var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now },
  date: String
});

module.exports = mongoose.model('Chat', ChatSchema);
