const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    publishedYear: {
        type: Number,
        required: false,
    },
},{ timestamps: true, versionKey:false });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
