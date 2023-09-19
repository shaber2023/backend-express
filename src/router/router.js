const express = require('express');
const { signUp, singIn } = require('../controller/auth');
const { getUser, postUser, patchUser,
         deleteUser, getOneUser } = require('../controller/userInfo');
const router = express.Router();


//auth data
router.post('/signIn',singIn)
router.post('/signUp',signUp);

//user data
router.get('/',getUser);
router.get('/:id',getOneUser);
router.post('/',postUser);
router.patch('/:id',patchUser);
router.delete('/:id',deleteUser)

module.exports=router;