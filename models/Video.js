const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videosSchema = Schema({
    title: {
        type: String,
        trim: true
    },
    author: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    tags:{
        type: String,
    }

})

module.exports = mongoose.model('Video', videosSchema)