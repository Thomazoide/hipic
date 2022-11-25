const {Router} = require('express')
const {getUsuario, getUsuarios, crearUsuario} = require('./../controllers/usuarios.controlador')
const router = Router()
router.route('/')
    .get(getUsuarios)
    .post(crearUsuario)
router.route('/:rut')
    .get(getUsuario)
module.exports = router