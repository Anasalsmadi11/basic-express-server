'use strict'

function validator(){
    return (req,res,next)=>{
           if(isNaN(Number(req.query.userName))){
        // if(req.query.userName){
            console.log(req.query)
            next()
        }else{
        next(`please enter a string name parameter`)
    
}}
}

module.exports= validator;