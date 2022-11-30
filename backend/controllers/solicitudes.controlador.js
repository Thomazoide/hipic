const Solicitud = require('./../models/solicitudes')
const soliCtrl = {}

soliCtrl.getSolicitudes = async (req, res) => {
    const solicitudes = await Solicitud.find()
    res.json(solicitudes)
}

soliCtrl.crearSolicitud = async (req, res) => {
    const {nombre, rut, email, cell} = req.body
    const nueva_solicitud = new Solicitud({nombre, rut, email, cell})
    await nueva_solicitud.save()
    res.json(nueva_solicitud)
}

module.exports = soliCtrl