const express = require('express')
const {
  crearUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  editarUsuario
} = require('../controllers/userControllers')

const { createProduct } = require('../controllers/productControllers')
const router = express.Router()

router.route('/usuario').post(crearUsuario).get(obtenerUsuarios)
router.route('/usuario/:id').delete(eliminarUsuario).put(editarUsuario)

router.route('/productos').post(createProduct)
module.exports = router
