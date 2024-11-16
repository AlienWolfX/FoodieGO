import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";

export const AdminLogin = () => {
 const nav = useNavigate();

 return (
  <div className="flex w-full h-screen bg-gray-50">
    {/* Left Side - Image/Brand Section */}
    <div className="hidden lg:flex w-1/2 bg-blue-600 p-12 relative overflow-hidden">
      <div className="relative z-10 w-full h-full flex flex-col justify-between text-white">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <MdAdminPanelSettings className="text-4xl" />
            <h1 className="text-2xl font-bold">FooDiego Admin</h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-blue-100 max-w-md"
          >
            Manage your recipes, users, and content all in one place. Welcome to your administrative dashboard.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm text-blue-100"
        >
          © 2024 FooDiego. All rights reserved.
        </motion.div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blue-700 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
    </div>

    {/* Right Side - Login Form */}
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Please sign in to your admin account</p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="admin@foodiego.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Forgot password?
            </a>
          </div>

          <button
            onClick={() => nav("/admin/home")}
            className="w-full h-10 bg-blue-600 rounded-md text-white text-sm font-medium"
          >
            Login
          </button>
        </div>
      </motion.div>
    </div>
  </div>
 );
};
