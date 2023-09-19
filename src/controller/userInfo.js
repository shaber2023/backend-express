const User = require('../model/userInfo');

const getUser = async(req,res,next)=>{
    try {
        const fullData = await User.find({});
        res.status(200).json({message:'this is your full data',fullData})
    } catch (error) {
        next(error)
    }
}

const getOneUser = async(req,res,next)=>{
    try {
        const data = await User.findById(req.params.id,req.body)
        res.status(200).json({message:'this is your singal data',data})
    } catch (error) {
        next(error)
    }
}


const postUser = async(req,res,next)=>{
    try {
        const{name,jamat,home,father}=req.body;
        const fulldata = new User ({name,jamat,home,father});
        const info = await fulldata.save();
        res.status(201).json({message:'your info successful added',info})
    } catch (error) {
        next(error)
    }
}


const patchUser = async(req,res,next)=>{
    try {
        const updateData =await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({message:'your info successful updated',updateData})
    } catch (error) {
        next(error)
    }
}


const deleteUser = async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id,req.body);
        res.status(200).json({message:'your info successful deleted'})
    } catch (error) {
        next(error)
    }
}

module.exports={getUser,postUser,patchUser,deleteUser,getOneUser}