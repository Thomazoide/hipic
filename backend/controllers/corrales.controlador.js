const Corrales = require('./../models/corrales')
const corralCtrl = {}
corralCtrl.getCorrales = async (req, res) => {
    const corrales = await Corrales.find()
    res.json(corrales)
}

module.exports = corralCtrl