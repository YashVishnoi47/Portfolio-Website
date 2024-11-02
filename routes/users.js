var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/portfilio");


const userSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      // unique: true
  },
  password: {
      type: String,
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
}, {
  timestamps: true
});


userSchema.plugin(plm); 





module.exports = mongoose.model("user",userSchema);
