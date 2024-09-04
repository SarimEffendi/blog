
const authRoutes = require('../routes/auth.routes');
const userRoutes = require('../routes/user.routes');
const bookRoutes = require('../routes/book.routes');
const commentRoutes = require('../routes/comment.routes');



// Routes
module.exports = function (app) {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/books', bookRoutes);
    app.use('/api/comments', commentRoutes);
}

