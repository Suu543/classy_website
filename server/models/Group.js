const dotenv = require("dotenv");
const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 32,
    required: true,
  },

  teamname: {
    type: String,
    trim: true,
    maxlength: 32,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    maxlength: 32,
    required: true,
  },

  phone: {
    type: String,
    trim: true,
    unique: true,
    maxlength: 32,
    required: true,
  },

  base_resorts: {
    type: String,
    trim: true,
    required: true,
  },

  lesson_resorts: {
    type: String,
    trim: true,
    maxlength: 200,
    required: true,
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = { Group };
