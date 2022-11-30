const {Schema, model} = require('mongoose')
const Jinetes = new Schema({
    nombre: String,
    rut: String,
    salario: String,
    estatura: String,
    cant_victorias: String,
    carreras_corridas: String,
    ratio_victorias: String,
    cod_corral: String,
})
module.exports = model('jinetes', Jinetes)