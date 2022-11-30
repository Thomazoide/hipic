const {Router} = require('express')
const {getCorrales} = require('./../controllers/corrales.controlador')
const router = Router()
router.route('/')
    .get(getCorrales)
module.exports = router