const mongoose = require('mongoose');

const mySchema = mongoose.Schema({
    name:String,
    email:String,
    home:String,
    image:String,
    password:String
})

module.exports=mongoose.model('myProject',mySchema)