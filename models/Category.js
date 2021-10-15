const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
})


module.exports = mongoose.model('Category', CategorySchema)