const app = require("./app");
const mongoose = require("mongoose");
const port = 3000;
const urlMongoAtlas = "mongodb+srv://jasminMongodb:4s52sTqcShfStCf@cluster0.jn2weec.mongodb.net/jasminDb";


mongoose.connect(urlMongoAtlas,(err,res)=>{
  try{
    if(err){
      throw err;
    }else{
      console.log("La conexión a la BD es correcta");

      app.listen(port, ()=>{
        console.log("Servidor del API REST está funcionando en http://localhost:3000");
      })
      
    }
  }
  catch(error){
    console.error(error);
  }
})

