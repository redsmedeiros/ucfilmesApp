//importações
const router = require('express').Router()
const CameraController = require('../controller/CameraController')

//rotas
router.post('/register', CameraController.store)
router.get('/get-cameras', CameraController.index)

module.exports = router