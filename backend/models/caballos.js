const {Schema, model} = require('mongoose')
const Caballos = new Schema({
    nombre: String,
    peso: String,
    estado: Boolean,
    ult_vacuna: String,
    cant_victorias: String,
    carreras_corridas: String,
    ratio_victorias: String,
    cod_corral: String,
})
module.exports = model('caballos', Caballos)