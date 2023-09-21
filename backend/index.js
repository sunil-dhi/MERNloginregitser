const express=require("express")

const mongoose=require("mongoose")

const cors=require("cors")

const app=express()
app.use(express.json())

app.use(cors)
mongoose.connect("mongodb+srv://sunil95:register@regitserc.dq41gky.mongodb.net/")
.then(()=>{console.log("database conncted")})
.catch((err)=>{console.log(err)})

app.listen(3001,()=>{
    console.log("server started")
})