const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBook = new Book({
      title,
      description,
      author: req.user._id,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('author', 'username');
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author', 'username');
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.json({ message: 'Book deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};
