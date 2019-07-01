const express = require('express');
const app =  express();
app.use((request,response,next) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.json({"message":"yah its worked"});
});
module.exports = app;