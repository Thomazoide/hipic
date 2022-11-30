const Caballos = require('./../models/caballos')
const caballosCtrl = {}
caballosCtrl.getCaballos = async (req, res) => {
    const caballos = await Caballos.find()
    res.json(caballos)
}
module.exports = caballosCtrl