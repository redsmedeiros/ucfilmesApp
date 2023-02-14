const mongoose = require('../db/conn')

const { Schema } = mongoose

const Camera = mongoose.model(
    'Camera',
    new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        available: {
            type: Boolean
        }
    }, {timestamps: true})
)

module.exports = Camera