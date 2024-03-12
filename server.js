const express = require("express");
const mongoose = require("mongoose");
const hotelRouter= require("./routes/hotel.routes");//isko import kark app.use.
const singlehotelRouter = require("./routes/singlehotel.router")
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router")
const connectDB = require("./config/dbconfig")
const  categoryRouter= require("./routes/category.routes");
// const authRouter = require("./routes/auth.router")
const wishlistRouter = require("./routes/wishlist.router")
const app = express();


app.use(express.json());
connectDB();
const PORT= 3000;
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use("/api/singlehotel",singlehotelRouter)
app.use("/api/hoteldata",hotelDataAddedToDBRouter)
app.use("/api/categories",categoryDataAddedToDBRouter)
app.use("/api/hotels",hotelRouter);
app.use("/api/category",categoryRouter);
app.use("/api/hotels",singlehotelRouter)
// app.use("/api/auth",authRouter)
app.use("/api/wishlist",wishlistRouter);

mongoose.connection.on("open",()=>{
    console.log("connected to Db");
    app.listen(process.env.PORT || PORT , ()=>{
        console.log("server is Up and running");
    });
})
