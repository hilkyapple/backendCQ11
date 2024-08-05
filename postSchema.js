const mongoose = require('mongoose')
//SCHEMA-definition of the structure of data in which
//it is going to be stored and accessed
const postSchema = new mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },

    postNumber:{
        type:Number
    },

    postContent:{
        type:String,
        required:true
    }
}) 

module.exports = mongoose.model('Posts',postSchema);