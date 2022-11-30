const {Router} = require('express')
const {crearCarrera} = require('./../controllers/carreras.controlador')
const router = Router()
router.route('/')
    .post(crearCarrera)
module.exports = router