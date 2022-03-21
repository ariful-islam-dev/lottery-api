// const express = require('express')
// const app = express();

const app = require('./app/app')



app.listen('4000', ()=>{
    console.log('Your server is running on port 4000');
})