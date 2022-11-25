const Usuarios = require('./../models/usuarios')
const usuariosCtrl = {}

usuariosCtrl.getUsuarios = async (req, res) => {
    const users = await Usuarios.find()
    res.json(users)
}
usuariosCtrl.getUsuario = async (req, res) => {
    const users = await Usuarios.find()
    let user = null
    const rut = req.params.rut
    for(let objeto of users){
        if(rut == objeto.rut){
            user = objeto
        }
    }
    res.json(users)
}

usuariosCtrl.crearUsuario = async (req, res) => {
    const {tipo, nombre, rut, email, cell, pass} = req.body
    const nUser = new Usuarios({
        tipo: tipo,
        nombre: nombre,
        rut: rut,
        email: email,
        cell: cell,
        pass: pass,
    })
    await nUser.save()
    res.json(nUser)
}

module.exports = usuariosCtrl