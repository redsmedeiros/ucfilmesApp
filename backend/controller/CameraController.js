//importações
const Camera = require('../models/Camera')

module.exports = class CameraController{

    //criar camera
    static async store(req, res){
        
        const { name, description, price, brand } = req.body

        if(!name){
            res.status(422).json({message: 'O nome da câmera é obrigatório'})
            return;
        }

        if(!description){
            res.status(422).json({message: 'A descrição da câmera é obrigatória'})
            return;
        }

        if(!price){
            res.status(422).json({message: 'O preço da câmera é obrigatório'})
            return;
        }

        if(!brand){
            res.status(422).json({message: 'A marca da câmera é obrigatória'})
            return;
        }

        try{

            const createdCamera = await Camera.create(req.body)

            res.status(200).json(createdCamera)

        }catch(error){

            res.status(500).json(error)
        }
        
    }

    static async index(req, res){

        try{

            const cameras = await Camera.find()

            res.status(200).json({cameras})

        }catch(error){

            res.status(500).json(error)
        }

    }
}