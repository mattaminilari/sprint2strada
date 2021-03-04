const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stradaSchema = new Schema({
  title: { type: String, required: true },
  bio: { type: String, required: true },
  art: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Strada = mongoose.model("Book", stradaSchema);

module.exports = Book;