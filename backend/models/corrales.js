const {Schema, model} = require('mongoose')

const Corrales = new Schema({
    cod_corral: String,
    capacidad_caballos: String,
    balance_mensual: String,
    victorias: String,
    carreras_corridas: String,
    ratio_victorias: String,

})
module.exports = model('corrales', Corrales)