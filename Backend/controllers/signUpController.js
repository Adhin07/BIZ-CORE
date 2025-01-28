const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const { Error } = require("mongoose");


async function signUpController(req, res) {

    try {
        const { email, username, password, logo } = req.body;

        // Validate Input
        if (!email || !username || !password || !logo) {
            return res.status(400).json({
                message: "Please enter all fields",
                success: false,
                error: true
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
                error: true
            });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        if (!hashedPassword) {
            throw new Error("Password hashing failed");
        }

        // Create User Payload
        const payload = {
            email,
            username,
            password: hashedPassword,
            profilePic: logo
        };

        // Save New User
        const newUser = new userModel(payload);
        const savedUser = await newUser.save();

        res.status(201).json({
            data: savedUser,
            success: true,
            error: false,
            message: "User created successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
}

module.exports = signUpController;
