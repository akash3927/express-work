const express = require("express");
// const { Mongoose } = require("mongoose");
const env = require('dotenv')
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./src/routers/user");
const adminRoutes = require("./src/routers/admin/user");
const categoryRoutes = require("./src/routers/category");
const productRoutes = require("./src/routers/product");
const cartRoutes = require("./src/routers/cart");

// const bodyParser = require('body-parser')
const port = process.env.PORT || 8000;



env.config();


//mongodb+srv://sky:<password>@cluster0.mjoeq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// app.use(express.json());

//mongodb connection
mongoose.connect(
    `mongodb+srv://sky:${process.env.MONGO_DB_PASSWORD}@cluster0.mjoeq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
     {
        useCreateIndex: true,
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    ).then(()=>{
        console.log('database connected');
    })


app.use(express.json());
app.use("/user",userRoutes);
app.use("/user",adminRoutes);
app.use("/user",categoryRoutes);
app.use("/user",productRoutes);
app.use("/user",cartRoutes);










app.listen(port, (req,res)=>{
    console.log(`app is running on ${port}`)
})
