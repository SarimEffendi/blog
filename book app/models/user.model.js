const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['admin', 'author', 'reader'], required: true },
    bio: { type: String },  // Optional, for authors
    adminCode: { type: String },  // Optional, for admins
    preferences: { type: Object },  // Optional, for readers
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
