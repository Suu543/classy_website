const dotenv = require("dotenv");
const mongoose = require("mongoose");

const personalSchema = new mongoose.Schema({
  name: {
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

  resorts: {
    type: String,
    trim: true,
    required: true,
  },

  licenses: {
    type: String,
    trim: true,
    maxlength: 200,
    required: true,
  },
});

const Personal = mongoose.model("Personal", personalSchema);

module.exports = { Personal };
