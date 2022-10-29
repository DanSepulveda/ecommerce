const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    default: 'Usuario no asignado',
    trim: true,
    lowercase: true
    // enum: ['juanita', 'juanito']
  },
  apellido: { type: String, required: true, trim: true },
  correo: { type: String, required: true },
  edad: { type: Number, required: true, min: 18, max: 150 },
  newsletter: Boolean,
  favProducts: [{ type: mongoose.Types.ObjectId, ref: 'product' }],
  addresses: [
    {
      calle: String,
      numero: Number,
      Comuna: String
    }
  ]
  // password:  'kfjldsafa1ar7t821gsdfgfsd1f8dsfasd3'
})

const User = mongoose.model('user', userSchema)

module.exports = User
