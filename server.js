const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
//connect db
connectDB();
//init middleware

app.use(express.json({extended:false}));

app.get('/',(req,res,next)=>
{
    res.send("api starts");
    
}
);

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/post',require('./routes/api/post'));
app.use('/api/profile',require('./routes/api/profile'));











app.listen(PORT,()=>{
    console.log(`server conncected on ${PORT}`);
});