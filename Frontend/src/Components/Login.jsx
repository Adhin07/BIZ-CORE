import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import SignupModal from "./SignUp";

const LoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  if (!isOpen) return null; // Prevent rendering if modal is closed

  return (
    <div className="  fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Box */}
      <div 
        className="bg-white w-96 p-8 rounded-lg shadow-lg relative flex flex-col"
        style={{ 
          backgroundImage: "url('/src/Assets/login-bg.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px" // Increased height
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Modal Content */}
        <h2 className=" text-white text-2xl font-bold text-center mb-6">Login</h2>

        {/* Login Form */}
        <form>
          <div className="mb-6">
            <label className=" text-white block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6 relative">
            <label className=" text-white block text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 pr-10"
              placeholder="Enter your password"
            />
            {/* Toggle Password Visibility */}
            <button
              type="button"
              className=" absolute right-3 top-10 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-300  text-black py-3 rounded-md hover:text-white hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4">
          <a href="#" className="text-white hover:underline">Forgot password?</a>
        </div>

        {/* Signup Section */}
        <div className="text-center mt-4 flex ">
          <p className="text-white">Don't have an account?</p>
          <button
            className=" ml-2 w-28 bg-yellow-300 text-black py-1 rounded-md hover:bg-yellow-500 hover:text-slate-50 transition"
            onClick={()=>{setIsModalOpen(true)}}
          >
            Sign Up
          </button>
        </div>
        <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      </div>
    </div>
  );
};

export default LoginModal;
