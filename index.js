const express=require('express');
const app=express();
app.use('/user',
    (req,res,next)=>{
    
 
    next();
    res.send("heiloo");
   
   

    }
    ,
(req,res,next)=>{
     
    res.send("heiloo  2");
    next();
},
(req,res,next)=>{
    // res.send("heiloo  2");
    
     res.send("boys");
      next();

 }
    
)


app.listen('4000');
console.log("Run well");