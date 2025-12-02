const Book = require("../models/Book");

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book)
      return res
        .status(404)
        .json({ message: "This is not the book you are looking for" });
    res.json(book);
  } catch (error) {
    console.error(error);
  }
};
module.exports = { createBook, getBooks, getBook };
