const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
=======
  image: {
    type: String
  },
>>>>>>> Alex-BrowsingAndSorting
  author: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
=======
  publisher: {
    type: String
  },
  date: {
    type: Date,
  },
  description: {
    type: String
  },
  genre: {
    type: String,
  },
>>>>>>> Alex-BrowsingAndSorting
  price: {
    type: Number, //will definetly be a type of Money, a data structure we will define later.
    required: true,
  },
  rating: {
    type: Number, //rate out of 5 stars
    required: true,
  },
<<<<<<< HEAD
  image: {
    type: String,
  },
  publisher: {
    type: String,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
=======
  topseller: {
    type: Boolean
  }

});

module.exports = Books = mongoose.model("Books", BookSchema);
>>>>>>> Alex-BrowsingAndSorting
