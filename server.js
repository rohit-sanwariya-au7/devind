const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
//connect db
connectDB();
app.get('/',(req,res,next)=>
{
    res.send("api starts");
    
}
);

app.listen(PORT,()=>{
    console.log(`server conncected on ${PORT}`);
});