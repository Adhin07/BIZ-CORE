const express = require("express");
const signUpController = require("../controllers/signUpController");
const LoginController = require("../controllers/LoginController");

const router=express.Router()


router.post('/signup',signUpController)//signup route
router.post('/login',LoginController)


module.exports= router;