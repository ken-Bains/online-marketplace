const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  quantity: Number,
  description: String,
  shortDescription: String,
  image: String,
  salePrice: Number,
  totalPrice: Number,
  post_date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
