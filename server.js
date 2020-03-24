const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res,next)=>
{
    res.send("api starts");
    
}
);

app.listen(PORT,()=>{
    console.log(`server conncected on ${PORT}`);
});