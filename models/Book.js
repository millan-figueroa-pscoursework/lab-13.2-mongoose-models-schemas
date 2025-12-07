const express = require("express");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  author: {
    type: String,
    required: true,
    trime: true,
  },

  isbn: {
    type: String,
    unique: true,
  },

  publishedDate: {
    type: Date,
  },

  inStock: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
