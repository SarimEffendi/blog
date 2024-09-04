const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { content } = req.body;
    const newComment = new Comment({
      content,
      user: req.user._id,
      book: req.params.bookId,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.getCommentsByBookId = async (req, res) => {
  try {
    const comments = await Comment.find({ book: req.params.bookId }).populate('user', 'username');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found.' });
    }
    res.json({ message: 'Comment deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};
