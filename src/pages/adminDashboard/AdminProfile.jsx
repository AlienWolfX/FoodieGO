import { Layout } from "../dashboard/Layout";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiEdit2 } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import { useProfile } from "../../context/ProfileContext";

export const AdminProfile = () => {
 // Sample admin data
 const { profilePicture } = useProfile();

 const [adminData] = useState({
  name: "Patrick James",
  role: "Admin✨",
  email: "john.doe@foodiego.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  joinDate: "March 2024",
  avatar: "",
  stats: [
   { label: "Recipes Managed", value: "2,456" },
   { label: "Reports Handled", value: "892" },
   { label: "Users Managed", value: "15.4k" },
   { label: "Active Since", value: "2 years" },
  ],
  recentActivities: [
   {
    action: "Resolved Report",
    item: "Inappropriate Content #2234",
    time: "5 hours ago",
   },
   {
    action: "Updated User Status",
    item: "User ID #8845",
    time: "1 day ago",
   },
  ],
 });

 return (
  <Layout>
   <div className="p-6 bg-gray-50 min-h-screen">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
     <div>
      <h1 className="text-2xl font-semibold text-gray-800">Admin Profile</h1>
      <p className="text-gray-500 mt-1">
       Manage your admin account and view activities
      </p>
     </div>
     <button className="mt-4 md:mt-0 px-4 py-2 bg-mainblue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
      <FiEdit2 size={16} />
      Edit Profile
     </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     {/* Profile Card */}
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-1 bg-white rounded-xl p-6 border border-gray-100"
     >
      <div className="flex flex-col items-center">
       <div className="relative">
        <img
         src={profilePicture}
         alt=""
         className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <span className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-4 border-white"></span>
       </div>
       <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {adminData.name}
       </h2>
       <div className="flex items-center gap-2 mt-2">
        <MdAdminPanelSettings className="text-mainblue" size={20} />
        <span className="text-sm font-medium text-gray-600">
         {adminData.role}
        </span>
       </div>
       <div className="w-full mt-6 space-y-4">
        <div className="flex items-center gap-3 text-gray-600">
         <FiMail size={18} />
         <span className="text-sm">{adminData.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
         <FiPhone size={18} />
         <span className="text-sm">{adminData.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
         <FiMapPin size={18} />
         <span className="text-sm">{adminData.location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
         <FiCalendar size={18} />
         <span className="text-sm">Joined {adminData.joinDate}</span>
        </div>
       </div>
      </div>
     </motion.div>

     {/* Stats and Activities Section */}
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="col-span-1 lg:col-span-2 space-y-6"
     >
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {adminData.stats.map((stat, index) => (
        <div
         key={index}
         className="bg-white p-4 rounded-xl border border-gray-100"
        >
         <h3 className="text-gray-500 text-sm">{stat.label}</h3>
         <p className="text-xl font-semibold text-gray-800 mt-1">
          {stat.value}
         </p>
        </div>
       ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl border border-gray-100">
       <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
         Recent Activities
        </h3>
        <div className="space-y-6">
         {adminData.recentActivities.map((activity, index) => (
          <div
           key={index}
           className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
          >
           <div className="bg-blue-50 rounded-full p-2">
            <MdAdminPanelSettings className="text-mainblue" size={20} />
           </div>
           <div>
            <h4 className="text-sm font-medium text-gray-800">
             {activity.action}
            </h4>
            <p className="text-sm text-gray-500 mt-1">{activity.item}</p>
            <span className="text-xs text-gray-400 mt-1">{activity.time}</span>
           </div>
          </div>
         ))}
        </div>
       </div>
      </div>

      {/* Additional Info or Settings could go here */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
       <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
       </h3>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="p-4 text-left rounded-lg border border-gray-100 hover:border-mainblue hover:bg-blue-50 transition-colors">
         <h4 className="font-medium text-gray-800">Manage Recipes</h4>
         <p className="text-sm text-gray-500 mt-1">
          Review and moderate recipes
         </p>
        </button>
        <button className="p-4 text-left rounded-lg border border-gray-100 hover:border-mainblue hover:bg-blue-50 transition-colors">
         <h4 className="font-medium text-gray-800">User Reports</h4>
         <p className="text-sm text-gray-500 mt-1">Handle pending reports</p>
        </button>
       </div>
      </div>
     </motion.div>
    </div>
   </div>
  </Layout>
 );
};
