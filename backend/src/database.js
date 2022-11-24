const {connect} = require('mongoose')

async function conectarBD(){
    try {
        await connect("mongodb+srv://Thomazoide:Thom1232!@mastercluster.hasjpif.mongodb.net/Club_hipico", {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('conectado')
    }catch(error){
        console.log(error)
    }
};
module.exports = {conectarBD}