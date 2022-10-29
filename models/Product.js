const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  inStock: Boolean,
  propiedades: [
    {
      nombreDeLaPropiedad: String,
      valorDeLaPropiedad: String || Number
    }
  ]
})

const Product = mongoose.model('product', productSchema)

module.exports = Product
