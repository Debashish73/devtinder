const express=require('express');
const app=express();
app.get('/user/:userid/:name/:password',(req,res)=>{
    console.log(req.params);

    res.send({Firstname:"Debashish",Lastname:"Jena"})
})


app.listen('3000');
console.log("Run well");