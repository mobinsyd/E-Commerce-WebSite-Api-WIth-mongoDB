const express = require("express");
const app =express();
const dotenv =require("dotenv");
const userRoute=require("./routes/user");
// const authRoute=require("./routes/auth");


dotenv.config();



// Connect With MongoDb Cloud and hide the USERname and Password in link by Using dotenv file
const mongoose=require("mongoose");
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection is Successfull"))
    .catch((err)=>{
      console.log("Error");
    });

app.use(express.json());
// app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);


app.listen(process.env.PORT ||5000,()=>{
    console.log("Backend Server is Running");
});