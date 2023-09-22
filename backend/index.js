const express=require("express")

const mongoose=require("mongoose")

const cors=require("cors")
const EmployeeModel=require("./model/Employee")
const app=express()
app.use(express.json())

app.use(cors())
mongoose.connect("mongodb+srv://sunil95:register@regitserc.dq41gky.mongodb.net/")
.then(()=>{console.log("database conncted")})
.catch((err)=>{console.log(err)})

app.post("/register", (req,res)=>{
EmployeeModel.create(req.body)
.then(employees=>res.json(employees))
.catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
     .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success");
            }else{
                res.json("password incorrect");
            }
            
        }else{
            res.json("no user exists");
        }
     })
})

app.listen(3001,()=>{
    console.log("server started")
})