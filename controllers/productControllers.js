const Product = require('../models/Product')
const User = require('../models/User')

const createProduct = async (req, res) => {
  try {
    // const user = await User.findById(req.auth.id)
    // if (!user.admin) {
    //   throw new Error('No estás autorizado')
    // }
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.json({
      success: true,
      message: 'Producto creado',
      productId: newProduct._id
    })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}

const getTenProducts = async (req, res) => {
  const qty = req.params.qty
  try {
    const products = await Product.find().limit(qty)
    res.json({ success: true, products })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}
// Esto no tiene endpoint asignado, pero así sería consultar los productos por marca
// const getProductsByBran = async (req, res) => {
//   try {
//     const products = await Product.find({ brand: req.params.brand })

//     res.json({ success: true })
//   } catch (error) {
//     res.json({ success: false, error: error.message })
//   }
// }

const reducirStock = async (req, res) => {
  const productos = req.body.cart
  try {
    productos.map(async (producto) => {
      await Product.findByIdAndUpdate(producto._id, { stock: producto.stock - producto.qty })
    })
    res.json({ success: true })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}

module.exports = { createProduct, getTenProducts, reducirStock }
