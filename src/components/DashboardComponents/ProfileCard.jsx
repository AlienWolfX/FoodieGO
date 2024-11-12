import { CiEdit } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import { UpdateProfileModal } from "../Modals/UpdateProfileModal";
import { useState } from "react";
import { UpdateProfilePicture } from "../Modals/UpdateProfilePicture";
import { motion } from "framer-motion";

export const ProfileCard = () => {
 const [openEdit, setOpenEdit] = useState(false);
 const [openPicture, setOpenPicture] = useState(false);

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

 return (
  <>
   <div className="flex flex-col gap-4">
    {/* Profile Header Card */}
    <div className="bg-white w-[400px] rounded-xl shadow-sm p-6">
     <div className="flex items-start justify-between">
      <div className="flex items-start gap-4">
       <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group cursor-pointer"
        onClick={() => setOpenPicture(true)}
       >
        <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-blue-100">
         {/* Profile image would go here */}
        </div>
        <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
         <CiEdit className="text-white opacity-0 group-hover:opacity-100" size={20} />
        </div>
       </motion.div>
       <div>
        <h1 className="text-lg font-semibold text-gray-800">Patrick James Dionen</h1>
        <h2 className="text-sm text-gray-500">@patrickdionenofficial</h2>
        <div className="mt-2 inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
        Student
        </div>
       </div>
      </div>
     </div>

     {/* Stats Section */}
     <div className="grid grid-cols-3 gap-4 mt-6">
      {stats.map((stat, index) => (
       <motion.div
        key={index}
        whileHover={{ y: -2 }}
        className="bg-gray-50 rounded-lg p-3 text-center"
       >
        <div className="flex items-center justify-center mb-1">
         {stat.icon}
        </div>
        <div className="text-lg font-bold text-gray-800">{stat.value}</div>
        <div className="text-xs text-gray-500">{stat.title}</div>
        <div className="text-[10px] text-gray-400 mt-1">{stat.change}</div>
       </motion.div>
      ))}
     </div>
    </div>

    {/* Personal Information Card */}
    <div className="w-[400px] rounded-xl bg-white shadow-sm p-6">
     <div className="mb-5">
      <div className="flex items-center justify-between mb-4">
       <h1 className="text-lg font-semibold text-gray-800">Personal Information</h1>
       <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpenEdit(true)}
        className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
       >
        <CiEdit size={20} className="text-gray-500" />
       </motion.button>
      </div>
      <hr className="border-gray-100" />
     </div>

     <div className="space-y-4">
      {[
       { label: "Email", value: "patrickdionenofficial@gmail.com" },
       { label: "First Name", value: "Patrick James" },
       { label: "Last Name", value: "Dionen" },
       { label: "Contact Number", value: "+63 912 345 6789" }
      ].map((field, index) => (
       <div key={index} className="space-y-1">
        <h2 className="text-sm font-medium text-gray-600">{field.label}</h2>
        <div className="h-10 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-4">
         <p className="text-sm text-gray-700">{field.value}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
   
   {openPicture && <UpdateProfilePicture setOpenPicture={setOpenPicture} />}
   {openEdit && <UpdateProfileModal setOpenEdit={setOpenEdit} />}
  </>
 );
};
