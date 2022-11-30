const Jinetes = require('./../models/jinetes')
const jinetesCtrl = {}
jinetesCtrl.getJinetes = async (req, res) => {
    const jinetes = await Jinetes.find()
    res.json(jinetes)
}
module.exports = jinetesCtrl