const express = require("express");
const router = express.Router();

<<<<<<< HEAD
let Comment  = require("../../models/Comment");

router.post('/saveComment', (req, res) => {
=======
const { Comment } = require("../../models/Comment");

router.post("/saveComment", (req, res) => {
>>>>>>> Alex-BrowsingAndSorting
  const comment = new Comment(req.body);

  comment.save((err, comment) => {
    if (err) return res.json({ success: false, err });
    Comment.find({ _id: comment._id })
<<<<<<< HEAD
      .populate("author")
=======
      .populate("writer")
>>>>>>> Alex-BrowsingAndSorting
      .exec((err, result) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

<<<<<<< HEAD
router.post('/getComments', (req, res) => {
  Comment.find({ postId: req.body.bookId })
    .populate("author")
=======
router.post("/getComments", (req, res) => {
  Comment.find({ postId: req.body.bookId })
    .populate("writer")
>>>>>>> Alex-BrowsingAndSorting
    .exec((err, comments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, comments });
    });
});

module.exports = router;
