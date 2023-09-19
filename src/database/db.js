const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.DATABASE;

mongoose.connect(db)
.then(()=>{
    console.log('your conation is successful with mongodb')
}).catch((err)=>{
    console.log(`your are not connectied ${err}`)
})