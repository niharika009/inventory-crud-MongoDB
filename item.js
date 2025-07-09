const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  }
});

const Item = mongoose.model('Item', itemSchema); // a table wuill be created by name Item

module.exports = Item;
