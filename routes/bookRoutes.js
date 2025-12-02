const express = require("express");

const { createBook } = require("../controllers/bookController.js");

const router = express.Router();

router.post("/", createBook);

module.exports = router;
