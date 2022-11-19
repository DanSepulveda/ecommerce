const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  stock: Number,
  imageUrl: String,
  properties: [
    {
      item: String,
      value: String
    }
  ]
})

const Product = mongoose.model('product', productSchema)

module.exports = Product
