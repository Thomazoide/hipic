const {Router} = require('express')
const {getCaballos} = require('./../controllers/caballos.controlador')
const router = Router()
router.route('/')
    .get(getCaballos)
module.exports = router