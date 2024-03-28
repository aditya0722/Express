const path=require("path");
const express=require("express");
const staticPath=path.join(__dirname,"../public")

const app=express()
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.send("hello from the other sides");
})
app.get("/about",(req,res)=>{
    res.send("hello from about");
})
app.listen(3000,()=>{
    console.log("server is active at 3000");
})