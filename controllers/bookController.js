const Book = require("../models/Book");

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error("Error creating book:", error.message);
    res.status(201).json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res
        .status(404)
        .json({ message: "This is not the book you are looking for" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error getting book:", error.message);
    res.status(500).json({ error: "Could not retrieve book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: `Book updated: ${updatedBook.title}` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const removedBook = await Book.findByIdAndDelete(req.params.id);

    if (!removedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: `Removed book: ${removedBook.title}` });
  } catch (error) {
    res.status(500).json({ error: "Could not delete book" });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
