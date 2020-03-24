const express = require('express');
const router = express.Router();
//Get api/user
router.get('/',(req,res,next)=>{
res.send('profile route');
}
);
module.exports = router;