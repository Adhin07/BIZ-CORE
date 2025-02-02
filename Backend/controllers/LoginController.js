const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

async function LoginController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {// Check if email and password are provided
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
        error: true,
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) { //check if user exists
      return res.status(400).json({
        success: false,
        message: "User not found",
        error: true,
      });
    }

    const checkPassword = bcrypt.compare(password, user.password);//compare password

    if (!checkPassword) {
      return res.json({
        success: false,
        error: true,
        message: "Invalid Password",
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { //generate token
      expiresIn: "8h",
    });

    const tokenOption = {
      httpOnly: true,
      secure: true,
    };

    res.cookie("token", token, tokenOption);
    return res.json({
      message: "Login Successfully..!",
      data: token,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      success: false,
      error: true,
      message: err.message || err,
    });
  }
}

module.exports = LoginController;
