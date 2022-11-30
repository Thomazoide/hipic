const {Schema, model} = require('mongoose')
const Carrera = new Schema({
    nombre: String,
    fecha: String,
    hora: String,
})
module.exports = model('carreras', Carrera)