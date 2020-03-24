const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator')
const gravatar = require('gravatar');
const User = require('../../models/User')
const bcryptjs = require('bcryptjs')
//Get api/user
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password').isLength({ min: 5 }),
    check('email', 'please enter a valid emial').isEmail()
],
    async (req, res, next) => {

        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;
        try {
  
            //see if user exists
            let user = await User.findOne({ email });
            if (user) {
                res.status(400).json({ errors: [{ msg: "user already exist" }] });
            }
            //get user gravatar 
            const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
            user = new User({ name, email, avatar, password });
            //encrypt password
            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(password, salt);
            await user.save();
          
            const payload = {
                user: {
                    id:user.id
                }
            }
            jwt.sign(payload,config.get('jwtSecret'),{expiresIn:36000000},(err,token)=>{
                if(err) throw err;
                res.json({token});
            });



        } catch (err) {
            console.error(err.message);
            res.status(500).send();

        }








    }
);
module.exports = router;