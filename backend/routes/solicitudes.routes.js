const {Router} = require('express')
const {getSolicitudes, crearSolicitud} = require('./../controllers/solicitudes.controlador')
const router = Router()
router.route('/')
    .get(getSolicitudes)
router.route('/crear-solicitud')
    .post(crearSolicitud)
module.exports = router