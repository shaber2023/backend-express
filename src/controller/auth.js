const Auth = require('../model/authSchema')
const bcrypt = require('bcrypt');
const originalHash = '$2y$10$tOlFqtv8gUZqukwS9be/nOKzu3zm73oDz8kelCmuguZOgCXmMG5K2';
const jwt = require('jsonwebtoken');
const saltRounds = 10;


require('dotenv').config();

const signUp = async(req,res,next)=>{
    const {name,email,home,image,password}=req.body;
    try {
        const emailExist = await Auth.findOne({email})
        if(!emailExist){
            const hash = bcrypt.hashSync(password,saltRounds);
            const newUser = new Auth({name,email,home,image,password:hash});
            const fulldata = await newUser.save();
            res.status(201).json({message:'your signUp is successful',fulldata})
        }else{
            res.status(401).json({message:'your email alrady exist'})
        }
    } catch (error){
        next(error)
    }
}


const singIn =async(req,res,next)=>{
    try {
       const{email,password}=req.body;
       const emailExist = await Auth.findOne({email});
       if(emailExist){
        const isPasswordMatch = await bcrypt.compare(password,emailExist.password);
        if (!isPasswordMatch) {
            return res.status(401).send('Authentication failed');
          }else{
            const token = jwt.sign({id:emailExist._id,name:emailExist.name},originalHash);
            res.status(200).json({message:'Authentication successful',token});
        }      
       }else{
        res.status(401).json({message:'your email not exist'})
       }
    } catch (error) {
        next(error)
    }
}

module.exports={signUp,singIn}