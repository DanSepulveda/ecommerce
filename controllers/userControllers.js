const User = require('../models/User')
const crypto = require('crypto')

const crearUsuario = async (req, res) => {
  try {
    //guardar la info en BD
    const user = await User.findOne({ correo: req.body.correo })
    if (user) {
      throw new Error('Email en uso')
    }
    // const salt = crypto.randomBytes(16).toString('hex')
    // const hash = crypto.pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512').toString('hex')
    // const newUser = new User({ ...req.body, password: hash, salt })

    const newUser = new User(req.body)
    newUser.hashPassword(req.body.password)

    await newUser.save()
    res.json({
      success: true,
      message: 'User created',
      id: newUser._id,
      token: newUser.generateToken()
    })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const obtenerUsuarios = async (req, res) => {
  try {
    const users = await User.find()
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

const login = async (req, res) => {
  try {
    const { correo, password } = req.body

    const user = await User.findOne({ correo })
    if (!user) {
      throw new Error('Usuario y/o clave incorrecta')
    }

    const validate = user.validatePassword(password, user.salt, user.password)
    if (!validate) {
      throw new Error('Usuario y/o clave incorrecta')
    }

    res.json({ success: true, mensaje: 'usuario logueado', token: user.generateToken() })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}

module.exports = { crearUsuario, obtenerUsuarios, eliminarUsuario, editarUsuario, login }
