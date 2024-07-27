// app.js

const express = require('express');
const mongoose = require('mongoose');


// Replace the following with your MongoDB connection string
const uri = "mongodb+srv://Dharshini:gma%2E5230161@cluster0.4c7msdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Connect to MongoDB

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
