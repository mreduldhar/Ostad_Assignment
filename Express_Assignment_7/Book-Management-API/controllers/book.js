const Book = require('../model/book');


exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve books' });
    }
};


exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book Not Found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed To Retrieve Book' });
    }
};


exports.createBook = async (req, res) => {
    const { title, author, description, publishedYear } = req.body;
    try {
        const book = await Book.create({ title, author, description, publishedYear });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed To Create Book' });
    }
};


exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, description, publishedYear } = req.body;
    try {
      const book = await Book.findByIdAndUpdate(
        id,
        { title, author, description, publishedYear },
        { new: true }
      );
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book Not Found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed To Update Book' });
    }
  };


exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findByIdAndDelete(id);
      if (book) {
        res.json({ message: 'Book Deleted Successfully' });
      } else {
        res.status(404).json({ error: 'Book Not Found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed To Delete Book' });
    }
  };
