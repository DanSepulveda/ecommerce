const User = require('../models/User')

const crearUsuario = async (req, res) => {
  try {
    //guardar la info en BD
    const newUser = new User(req.body)
    await newUser.save()
    res.json({ success: true, message: 'User created', id: newUser._id })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const obtenerUsuarios = async (req, res) => {
  try {
    const users = await User.find().populate('favProducts')

    res.json({ success: true, users })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params
    //
    //
    const resultado = await User.findByIdAndDelete(id)
    if (!resultado) {
      throw new Error('El elemento que intentas borrar, no existe')
    }

    res.json({ success: true, response: 'Elemento borrado' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const editarUsuario = async (req, res) => {
  try {
    const { id } = req.params
    const resultado = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (!resultado) {
      throw new Error('El elemento que intentas editar no existe')
    }
    res.json({ success: true })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

module.exports = { crearUsuario, obtenerUsuarios, eliminarUsuario, editarUsuario }
