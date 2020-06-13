const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('detail', detailSchema)