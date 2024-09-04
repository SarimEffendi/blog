const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String },
  publishedDate: { type: Date, default: Date.now },
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
