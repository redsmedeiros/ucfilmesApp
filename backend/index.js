//importações
const express = require('express')
const cors = require('cors')
const CameraRoutes = require('./routes/CameraRoutes')

const app = express()

//configurações
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.static('public'))

//rotas
app.use('/api/cameras', CameraRoutes)

//porta
const port = 5000
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))