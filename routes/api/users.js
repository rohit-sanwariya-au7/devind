const express = require('express');
const router = express.Router();
const {check,validationResult}=require('express-validator')
//Get api/user
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('password').isLength({ min: 5 }),
    check('email','please enter a valid emial').isEmail()
],(req,res,next)=>{
res.send('User route');
console.log(req .body);
const errors = validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()}); 
}

}
);
module.exports = router;