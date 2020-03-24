const express = require('express');
const router = express.Router();
//Get api/user
router.get('/',(req,res,next)=>{
res.send('post route');
}
);
module.exports = router;