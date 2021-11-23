const express = require("express")
const app = express()
const bodyparser=require("body-parser")
const mongoose = require("mongoose")
const dotEnv=require("dotenv")
const bodyParser = require("body-parser")
dotEnv.config()
app.listen(process.env.portnumber,()=>console.log("server is running....."))
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("connected")).catch((err)=>console.log(err))