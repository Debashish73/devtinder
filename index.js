const express=require('express');
const app=express();
app.get('/user',(req,res)=>{
    res.send({Firstname:"Debashish",Lastname:"Jena"})
})

app.post('/user',(eq,res)=>{
    res.send("Data Saved Successfully ")
})

app.delete('/user',(req,res)=>{
    res.send("Delete Done")
})

app.listen('3000');
console.log("Run well");