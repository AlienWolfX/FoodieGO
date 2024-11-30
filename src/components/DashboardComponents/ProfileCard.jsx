import { CiEdit } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import { UpdateProfileModal } from "../Modals/UpdateProfileModal";
import { useState } from "react";
import { UpdateProfilePicture } from "../Modals/UpdateProfilePicture";
import { motion } from "framer-motion";
import { useProfile } from '../../context/ProfileContext';

export const ProfileCard = () => {
 const [openEdit, setOpenEdit] = useState(false);
 const [openPicture, setOpenPicture] = useState(false);
 const { profilePicture, updateProfilePicture } = useProfile();

 // Animation variants
 const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
   opacity: 1,
   y: 0,
   transition: {
    duration: 0.6,
    staggerChildren: 0.1
   }
  }
 };

 const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
 };

 // Dummy stats data
 const stats = [
  {
   title: "Followers",
   value: "2.5K",
   icon: <MdOutlinePeopleAlt className="text-blue-500" size={20} />,
   change: "+12% this month"
  },
  {
   title: "Recipes Created",
   value: "48",
   icon: <GiCookingPot className="text-green-500" size={20} />,
   change: "+3 this week"
  },
  {
   title: "Avg. Rating",
   value: "4.8",
   icon: <FaRegStar className="text-yellow-500" size={20} />,
   change: "from 124 reviews"
  }
 ];

 const handleUpdateProfilePicture = (newPicture) => {
  updateProfilePicture(newPicture);
  // Here you would typically also make an API call to update the profile picture
 };

 return (
  <>
   <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="flex flex-col gap-4 w-full px-4 sm:px-0"
   >
    {/* Profile Header Card */}
    <motion.div
     variants={itemVariants}
     className="bg-white w-full  rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
    >
     <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
     >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
       <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group cursor-pointer"
        onClick={() => setOpenPicture(true)}
       >
        <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ type: "spring", stiffness: 260, damping: 20 }}
         className="w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gray-100 border-2 border-blue-100 overflow-hidden"
        >
         {profilePicture ? (
          <img
           src={profilePicture}
           alt="Profile"
           className="w-full h-full object-cover"
          />
         ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
           <span className="text-gray-400 text-2xl">
            {/* You could add a default avatar icon here */}
           </span>
          </div>
         )}
        </motion.div>
        <motion.div
         whileHover={{ opacity: 1 }}
         className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center"
        >
         <CiEdit className="text-white opacity-0 group-hover:opacity-100" size={20} />
        </motion.div>
       </motion.div>
       <motion.div variants={itemVariants} className="text-center sm:text-left">
        <motion.h1
         initial={{ x: -20, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         className="text-xl sm:text-lg font-semibold text-gray-800"
        >
         Patrick James Dionen
        </motion.h1>
        <motion.h2
         initial={{ x: -20, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ delay: 0.1 }}
         className="text-sm text-gray-500"
        >
         @patrickdionenofficial
        </motion.h2>
        <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ type: "spring", delay: 0.2 }}
         className="mt-2 inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
        >
         Student
        </motion.div>
       </motion.div>
      </div>
     </motion.div>

     {/* Stats Section */}
     <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
     >
      {stats.map((stat, index) => (
       <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{ y: -4, scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-gray-50 rounded-lg p-4 sm:p-3 text-center hover:shadow-md transition-all duration-300"
       >
        <motion.div
         whileHover={{ rotate: 360 }}
         transition={{ duration: 0.5 }}
         className="flex items-center justify-center mb-1"
        >
         {stat.icon}
        </motion.div>
        <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ delay: index * 0.1 + 0.2 }}
         className="text-lg font-bold text-gray-800"
        >
         {stat.value}
        </motion.div>
        <div className="text-xs text-gray-500">{stat.title}</div>
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: index * 0.1 + 0.3 }}
         className="text-[10px] text-gray-400 mt-1"
        >
         {stat.change}
        </motion.div>
       </motion.div>
      ))}
     </motion.div>
    </motion.div>

    {/* Personal Information Card */}
    <motion.div
     variants={itemVariants}
     className="w-full rounded-xl bg-white shadow-sm p-4 sm:p-6 hover:shadow-md transition-all duration-300"
    >
     <motion.div variants={itemVariants} className="mb-5">
      <div className="flex items-center justify-between mb-4">
       <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-lg font-semibold text-gray-800"
       >
        Personal Information
       </motion.h1>
       <motion.button
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpenEdit(true)}
        className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
       >
        <CiEdit size={20} className="text-gray-500" />
       </motion.button>
      </div>
      <motion.hr
       initial={{ scaleX: 0 }}
       animate={{ scaleX: 1 }}
       transition={{ duration: 0.5 }}
       className="border-gray-100"
      />
     </motion.div>

     <motion.div variants={containerVariants} className="space-y-4">
      {[
       { label: "Email", value: "patrickdionenofficial@gmail.com" },
       { label: "First Name", value: "Patrick James" },
       { label: "Last Name", value: "Dionen" },
       { label: "Contact Number", value: "+63 912 345 6789" }
      ].map((field, index) => (
       <motion.div
        key={index}
        variants={itemVariants}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        className="space-y-1"
       >
        <h2 className="text-sm font-medium text-gray-600">{field.label}</h2>
        <motion.div
         whileHover={{ scale: 1.01 }}
         className="min-h-[40px] sm:h-10 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-4 py-2 sm:py-0"
        >
         <p className="text-sm text-gray-700 break-all sm:break-normal">{field.value}</p>
        </motion.div>
       </motion.div>
      ))}
     </motion.div>
    </motion.div>
   </motion.div>
   
   {openPicture && (
    <UpdateProfilePicture 
     setOpenPicture={setOpenPicture}
     onUpdateProfilePicture={handleUpdateProfilePicture}
    />
   )}
   {openEdit && <UpdateProfileModal setOpenEdit={setOpenEdit} />}
  </>
 );
};
