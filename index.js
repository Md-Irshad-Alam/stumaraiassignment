const express =require('express')
const cors = require('cors');
const config =require('./Config/config')
const mongoose = require('mongoose');
const app = express();
const router  = require('./Router/Router');
app.use(express.json());
app.use(cors());
let port = process.env.PORT || 8085



app.get("/", (req,res)=>{
    res.send("server is working ")
})
app.use("/todo", router);



app.listen(port, async(req, res)=>{

   await mongoose.connect(config.Connect_db_URL)
   .then((responce)=>{
    console.log("server is connected with databse ")
   }).catch((error)=>{
    console.log(`server connection is faild  ${error}` )
   })
      
   
    
    console.log("server is live on the http://localhost:8080");
})



