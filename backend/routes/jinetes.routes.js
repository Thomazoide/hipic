const {Router} = require('express')
const {getJinetes} = require('./../controllers/jinetes.controlador')
const router = Router()
router.route('/')
    .get(getJinetes)
module.exports = router