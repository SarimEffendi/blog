const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const authenticate = require('../middlewares/authenticate');

router.post('/:bookId', authenticate, commentController.createComment);
router.get('/:bookId', authenticate, commentController.getCommentsByBookId);
router.delete('/:commentId', authenticate, commentController.deleteComment);

module.exports = router;
