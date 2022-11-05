const express = require('express')
const {
  crearUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  editarUsuario,
  login
} = require('../controllers/userControllers')
const auth = require('../middlewares/auth')

const { createProduct } = require('../controllers/productControllers')
const router = express.Router()

router.route('/usuario').post(crearUsuario).get(obtenerUsuarios)
// router.route('/usuario/admin').post(auth, createUser)
router.route('/usuario/:id').delete(eliminarUsuario).put(editarUsuario)
router.route('/usuario/login').post(login)

router.route('/productos').post(auth, createProduct)
module.exports = router
