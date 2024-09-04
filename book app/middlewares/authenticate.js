const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config/env');

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ error: 'User not found.' });
        }

        req.user = user; // Add user data to request object
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token.' });
    }
};

module.exports = authenticate;
