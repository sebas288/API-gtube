const mongoose = require('mongoose');
const { appConfig } = require('../config');
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
        type: String
    },
    videoURL:{
        type:String
    },
    createdAt:{
        type:Date, 
        default: () => Date.now() - 5*60*60*1000
    }
})

videosSchema.methods.setVideoURL = function setVideoURL (filename) {
    const {host, port} = appConfig
    this.videoURL = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Video', videosSchema)