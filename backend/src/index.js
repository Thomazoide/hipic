require('dotenv').config()
const {conectarBD} = require('./database')
const app = require('./app')
const {Usuarios} = require('./../models/usuarios')
const {Corrales} = require('./../models/corrales')
const {ApolloServer} = require('apollo-server-express')


conectarBD()
async function main(){
    await app.listen(app.get('port'))
    console.log('servidor en puerto: ', app.get('port'))
}

main()