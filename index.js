const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/router/router')
    require('dotenv').config();
    require('./src/database/db');
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(router)

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
    next();
});


app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging purposes
    const statusCode = 500; // Internal Server Error
    res.status(statusCode).json({ error: 'Internal Server Error' });
  });

app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})