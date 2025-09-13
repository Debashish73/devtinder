const mongoose = require('mongoose');



const connectDB = async function main() {
  await mongoose.connect("mongodb+srv://Debashish:Deba7328@myproject.lf05wak.mongodb.net/devTinder?retryWrites=true&w=majority&appName=MyProject");
}
  
   module.exports=connectDB;