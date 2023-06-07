'use strict';

const express = require("express");
const app = express();
const logger= require('./midddleware/logger')
const validator= require('./midddleware/validator')
const errorHandler= require('./error-handlers/500')
const notFoundHandler =require('./error-handlers/404')


app.get('/',(req,res)=>{
    res.send(`welcome to home page`)
})
app.get('/person',validator() ,(req,res)=>{ 
    if(req.query.userName){
    res.send({
            name: req.query.userName
        })
    } else{
        res.status(500).send("empty")
    }   

})

app.get('/bad',(req,res)=>{
    let num=10
    num.push(2)
    res.send(num)
})


app.use(logger)
app.use('*',notFoundHandler)
app.use(errorHandler)

function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}