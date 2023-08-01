const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const event = new Schema({
  email: { type: String, required: true },
  typeofevent:{type : String,required:true},
  date:{type: Date ,required:true},
});

const  newEvent= mongoose.model('Event', event);


module.exports = newEvent;
