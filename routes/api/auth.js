const express = require('express');
const router = express.Router();
//Get api/user
router.get('/',(req,res,next)=>{
res.send('auth route');
}
);
module.exports = router;