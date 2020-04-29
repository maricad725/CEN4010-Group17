const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  writer: {
<<<<<<< HEAD
    type: String,
=======
    type: Schema.Types.ObjectId,
    ref: "User",
>>>>>>> Alex-BrowsingAndSorting
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Book",
  },
<<<<<<< HEAD
=======
  responseTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
>>>>>>> Alex-BrowsingAndSorting
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
