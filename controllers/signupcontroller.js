const CryptoJS = require('crypto-js');
const userModel = require("../model/user.model");

const signupHandler = async (req,res) =>{
    try{
        const userObject = {
            // username:req.username,
            // number: req.number,
            // email: req.email,
            // password: req.password
            username:req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
        }
        const newUser = new userModel(userObject);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); 
    }
    catch(err){
      //  console.log(err);
      res.status(500).json({message:"Error message"})
    }
}
module.exports = signupHandler