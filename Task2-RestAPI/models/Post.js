const mongoose=require('mongoose');

const BlogPostSchema= mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    views:{
        type: Number,
        required: true,
        default: 0
    },

})

module.exports=mongoose.model('Posts',BlogPostSchema);