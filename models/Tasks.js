const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be provided'],
        trim : true,
        maxlength: [20,'max characters in name can be 20'],
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Tasks',TaskSchema)