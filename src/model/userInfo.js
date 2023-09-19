const mongoose = require('mongoose');

const mySchema = mongoose.Schema({
    name:String,
    jamat:String,
    home:String,
    father:String
})

module.exports=mongoose.model('userInfo',mySchema)