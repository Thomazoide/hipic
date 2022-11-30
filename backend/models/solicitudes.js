const {Schema, model} = require('mongoose')

const Solicitud = new Schema({
    nombre: String,
    rut:{
        type: String,
        required:true,
    },
    email: String,
    cell: String,
})
module.exports = model('solicitud_usuario', Solicitud) 