const express= require('express');

const router= express.Router();

const userController= require('../controller/userController');

router.get('/profile', userController.profile);

router.get('/sign-in', userController.sign_in);

router.get('/sign-up',userController.sign_up);



module.exports= router;