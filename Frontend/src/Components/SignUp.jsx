import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import { FiUpload } from "react-icons/fi"; // Upload icon

const SignupModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [logo, setLogo] = useState(null);

  if (!isOpen) return null; // Prevent rendering if modal is closed

  // Handle File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setLogo(URL.createObjectURL(file)); // Preview the uploaded image
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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
          className="absolute top-3 right-3 text-white text-lg"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Modal Content */}
        <h2 className="text-white text-2xl font-bold text-center mb-4">Sign Up</h2>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-4 text-white">
          <label className="cursor-pointer relative">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-300">
              {logo ? (
                <img src={logo} alt="User Logo" className="w-full h-full object-cover" />
              ) : (
                <FiUpload className="text-gray-500 text-xl" />
              )}
            </div>
          </label>
          <p className="text-xs text-gray-300 mt-1">Upload profile picture</p>
        </div>

        {/* Signup Form */}
        <form>
          <div className="mb-3">
            <label className="text-white block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="text-white block text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-3 relative">
            <label className="text-white block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400 pr-10"
              placeholder="Enter your password"
            />
            {/* Toggle Password Visibility */}
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-5 relative">
            <label className="text-white block text-sm font-medium">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400 pr-10"
              placeholder="Re-enter your password"
            />
            {/* Toggle Confirm Password Visibility */}
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already Have an Account? */}
        <div className="text-center mt-4 flex justify-center">
          <p className="text-white text-sm">Already have an account?</p>
          <button
            className="ml-2 w-24 bg-yellow-300 text-black hover:text-white py-1 rounded-md hover:bg-yellow-500 transition"
            onClick={onClose} // Close modal, you can replace with login modal trigger
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
