const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image1: {
      type: String,
      required: true
    },
    image2: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    paid: { 
      type: Boolean,
      default: false
    },
    inter: {
      type: Boolean,
      default: false
    },
    proximity: {
      type: Number,
      default: 0,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model('event', EventSchema);