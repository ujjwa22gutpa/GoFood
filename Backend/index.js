require("dotenv").config();
const cors = require("cors");
const express = require("express");



const app = express();
const PORT = process.env.PORT || 7000;

app.get("/",(req,res)=>{
    res.send("hello this is my server")
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on localhost:/ ${PORT}`)
})

