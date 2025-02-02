import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import { FiUpload } from "react-icons/fi"; // Upload icon
import imageTobase from "../Helpers/imageToBase64";
import axiosInstance from "../axios";
import Urls from "../Common/url";
import toast from "react-hot-toast";

const SignupModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    logo: "",
  });

  if (!isOpen) return null; // Prevent rendering if modal is closed

  // Handle File Upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase(file);

    setData((prev) => ({
      ...prev,
      logo: imagePic, // Store file for API submission
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("❌ Passwords do not match!");
      return;
    }

    try {
      const payload = {
        email: data.email,
        username: data.username,
        password: data.password,
        logo: data.logo, // ✅ Send Base64 string directly
      };

      console.log("🚀 Sending signup request with payload:", payload);

      const response = await axiosInstance.post(Urls.signUp.url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        toast.success(`🎉 ${response.data.message || "Signup successful!"}`);
        onClose(); // Close the modal after successful signup
      } else {
        toast.error(`⚠️ ${response.data.message || "Signup failed!"}`);
      }
    } catch (error) {
      console.error("❌ Signup error:", error);

      // Improved Error Handling
      const errorMessage =
        error.response?.data?.message || "Signup failed. Please try again.";
      toast.error(`⚠️ ${errorMessage}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white w-96 p-8 rounded-lg shadow-lg relative flex flex-col"
        style={{
          backgroundImage: "url('/src/Assets/login-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        <button
          className="absolute top-3 right-3 text-white text-lg"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Sign Up
        </h2>

        <div className="flex flex-col items-center mb-4 text-white">
          <label className="cursor-pointer relative">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-300">
              {data.logo ? (
                <img
                  src={data.logo}
                  alt="User Logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FiUpload className="text-gray-500 text-xl" />
              )}
            </div>
          </label>
          <p className="text-xs text-gray-300 mt-1">Upload profile picture</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-white block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400"
              placeholder="Enter your email"
              onChange={handleOnChange}
              value={data.email}
            />
          </div>

          <div className="mb-3">
            <label className="text-white block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400"
              placeholder="Enter your username"
              onChange={handleOnChange}
              value={data.username}
            />
          </div>

          <div className="mb-3 relative">
            <label className="text-white block text-sm font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400 pr-10"
              placeholder="Enter your password"
              onChange={handleOnChange}
              value={data.password}
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          <div className="mb-5 relative">
            <label className="text-white block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-400 pr-10"
              placeholder="Re-enter your password"
              onChange={handleOnChange}
              value={data.confirmPassword}
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 flex justify-center">
          <p className="text-white text-sm">Already have an account?</p>
          <button
            className="ml-2 w-24 bg-yellow-300 text-black hover:text-white py-1 rounded-md hover:bg-yellow-500 transition"
            onClick={onClose}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
