// app.js
{require("dotenv").config();}
const express = require('express');
const mongoose = require('mongoose');

const uri = process.env.MONGOAPI;

function dbjs() {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB Atlas');
  }).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
  });
}

module.exports=dbjs;
