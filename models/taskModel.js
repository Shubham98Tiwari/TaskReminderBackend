const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    _id: {
        type:String
    },
    key: {
        type:String
    },
    userId:{
        type: String
    },
    date:{
        type: Date
    },
    isDaily:{
        type: Boolean,
    },
    title:{
        type: String,
    },
    taskContent:{
        type: String,
    }
}, {timestamps:true} )
module.exports = mongoose.model('taskmodels', taskSchema)