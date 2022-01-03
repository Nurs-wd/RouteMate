const mongoose = require('mongoose')
const PathSchema = new mongoose.Schema({
    user:{
        type:String,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },

    description: {
        type: String,
        trim: true,
        required: true,

    },

    contact: {
        type: String,
        required: true,
    },
    from:{
     type:Array
    },
    to:{
        type:Array
    }

})

const Path = mongoose.model('Path', PathSchema)
module.exports = Path