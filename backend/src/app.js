const cors = require('cors')
const express = require('express')
const app = express()
app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(express.json())
app.use('/api/login', require('./../routes/users.routes'))
app.use('/api/solicitudes', require('./../routes/solicitudes.routes'))
app.use('/api/carreras', require('./../routes/carreras.routes'))
app.use('/api/corrales', require('./../routes/corrales.routes'))
app.use('/api/jinetes', require('./../routes/jinetes.routes'))
app.use('/api/caballos', require('./../routes/caballos.routes'))
module.exports = app