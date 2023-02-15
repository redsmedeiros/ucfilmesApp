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

    static async show(req, res){

        const { id } = req.params

       try{

        const camera = await Camera.findById(id)

        res.status(200).json({camera})

       }catch(error){

        res.send(error)

       }

    }

    static async update(req, res){

        const { id } = req.params

        const { name, description, price, brand, available } = req.body

        let camera = {}

        if(!camera){
            res.status(404).json({message: 'Camera não encontrada'})
            return;
        }
        
        //validações
        if(name){
            camera.name = name
        }

        if(description){
            camera.description = description
        }

        if(price){
            camera.price = price
        }

        if(brand){
            camera.brand = brand
        }

        if(available){
            camera.available = available
        }

        //salvar e atualizar
        try{

            const cameraUpdated = await Camera.findByIdAndUpdate(id, camera)

            res.status(200).json({cameraUpdated})

         }catch(error){

            res.send(error)

        }


    }

    static async delete(req, res){

        const { id } = req.params

        try{

            const cameraDeleted = await Camera.findByIdAndDelete(id)

            res.status(200).json({message: 'Camera deletada com sucesso'})

        }catch(error){

            res.send(error)
        }

    }
}