const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User')
//Get api/auth
router.get('/',auth,async (req,res,next)=>{
try {
   const user = await User.findById(req.user.id).select('-password');
   res.json(user);
} catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
    
}
}
);
module.exports = router;