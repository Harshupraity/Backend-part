
const userModel = require("../model/user.model")
const CryptoJS = require('crypto-js');
const jwt =require('jsonwebtoken')
const loginHandler = async (req,res) =>{
    try{
       const user = await userModel.findOne({number:req.body.number});
       !user && res.status(401).json({message:"Invalid mobile number"});

       const decodedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
       
       decodedPassword !== req.body.password &&  res.status(401).json({message:"Incorrect Password"});
       
       const {password,...rest} = user._doc
       // res.json(user);
       const accessToken=jwt.sign({username:user.username},process.env.ACCESS_TOKEN)
       res.json({...rest,accessToken});


    }catch(err){
       // res.status(500).json({message:"Error creating a user"}); 
       console.log(err);
    }
}
module.exports = loginHandler