const Carrera = require('./../models/carreras')
const carreraCtrl = {}
carreraCtrl.crearCarrera = async (req, res) => {
    const {nombre, fecha, hora} = req.body
    const nuevaCarrera = new Carrera({nombre, fecha, hora})
    await nuevaCarrera.save()
    res.json(nuevaCarrera)
}
module.exports = carreraCtrl