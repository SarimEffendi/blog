const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: { type: String, enum: ['admin', 'author', 'reader'], unique: true, required: true },
    permissions: [{ type: String }]  // Optional if you want to define permissions explicitly
});

module.exports = mongoose.model('Role', RoleSchema);
