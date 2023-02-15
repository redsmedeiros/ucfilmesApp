//importações
const router = require('express').Router()
const CameraController = require('../controller/CameraController')

//rotas
router.post('/register', CameraController.store)
router.get('/get-cameras', CameraController.index)
router.get('/:id', CameraController.show)
router.patch('/:id', CameraController.update)
router.delete('/:id', CameraController.delete)



module.exports = router