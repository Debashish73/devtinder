
const express = require('express');
const app=express();
const connectDB = require('./config/database');
const User=require('./models/user')



app.post("/signup",async(req,res)=>{
 const user=new User({
    firstName:"Anushka",
    lastName:"Sharma",
    emailId:"Anushka654@gmail.com",
    password:"Anushka.459",
 });
 await user.save();
 res.send("User added successfully");
})


connectDB()
.then(()=>{
  console.log("Database connected successfully");
  app.listen((4000), () => {
    console.log('App listening on port 4000!');
});
  
})
.catch((err)=>{
  console.log("Database can not be connected");
});


