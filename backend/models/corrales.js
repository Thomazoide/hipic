const {Schema, model} = require('mongoose')

const Corrales = new Schema({
    cod_corral: {
        type: String,
        required: true,
        unique: true,
    } ,
    numero_corral: {
        type: Number,
        required: true
    }
})
module.exports = model('corrales', Corrales)