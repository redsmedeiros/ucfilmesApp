const mongoose = require('mongoose')

const { Schema } = mongoose

const Lente = mongoose.model('Lentes',
new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
}))

module.exports = Lente