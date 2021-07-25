const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 10
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.export = mongoose.model('User', userSchema)