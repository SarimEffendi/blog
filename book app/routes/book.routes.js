const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize(['author']), bookController.createBook);
router.get('/', authenticate, bookController.getAllBooks);
router.get('/:id', authenticate, bookController.getBookById);
router.put('/:id', authenticate, authorize(['author', 'admin']), bookController.updateBook);
router.delete('/:id', authenticate, authorize(['author', 'admin']), bookController.deleteBook);

module.exports = router;
