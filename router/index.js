const express= require('express');

const route= express.Router();

const homeController=require('../controller/homeController');



console.log("Congrats! Router is loaded");

route.get('/',homeController.home);

route.use('/users',require('./users'));



module.exports= route;