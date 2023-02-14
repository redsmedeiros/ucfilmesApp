const mongoose = require('mongoose') 

async function main(){

    mongoose.set("strictQuery", true);
    await mongoose.connect('mongodb://127.0.0.1:27017/appUcFilmes')

    console.log('Conectado ao MONGO')

}

main().catch((err)=> console.log(err))

module.exports = mongoose;