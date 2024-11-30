import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { GiSadCrab } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { EditPreferencesModal } from "../Modals/EditPreferencesModal";

export const ProfilePreferencesCards = () => {
 const [openEdit, setOpenEdit] = useState(false);
 const [activeTab, setActiveTab] = useState("userType");

 const [userTypes, setUserTypes] = useState([
  { name: "Chef", icon: "👨‍🍳", active: true },
  { name: "Home Cook", icon: "🏠", active: false },
  { name: "Student", icon: "🎓", active: false }
 ]);

 const [selectedFoods, setSelectedFoods] = useState([
  { name: "Asian", icon: "🍜" },
  { name: "Seafoods", icon: "🦐" },
  { name: "Vegetarian", icon: "🥗" }
 ]);
 
 const [selectedAllergens, setSelectedAllergens] = useState([
  { name: "Eggs", icon: "🥚" },
  { name: "Peanuts", icon: "🥜" }
 ]);

 const tabs = [
  { id: "userType", label: "User Type" },
  { id: "foods", label: "Food Preferences" },
  { id: "allergens", label: "Allergens" }
 ];

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

 return (
  <>
   <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100"
   >
    {/* Header */}
    <motion.div 
     variants={itemVariants}
     className="flex items-center justify-between mb-6"
    >
     <div>
      <h1 className="text-xl font-semibold text-gray-800">User Preferences</h1>
      <p className="text-sm text-gray-500 mt-1">
       Customize your food preferences and allergens
      </p>
     </div>
     <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setOpenEdit(true)}
      className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
     >
      <CiEdit size={18} />
      <span className="text-sm font-medium">Edit</span>
     </motion.button>
    </motion.div>

    {/* Content */}
    <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6">
     {/* User Type Section */}
     <motion.div
      variants={itemVariants}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6"
     >
      <div className="flex items-center gap-3 mb-4">
       <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
        <MdOutlineWorkOutline className="text-blue-600 w-6 h-6" />
       </div>
       <h2 className="text-lg font-medium text-gray-800">User Type</h2>
      </div>
      <div className="flex flex-wrap gap-2">
       {userTypes.map((type) => (
        type.active && (
         <div
          key={type.name}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-100"
         >
          <span className="text-lg">{type.icon}</span>
          <span className="text-sm font-medium">{type.name}</span>
         </div>
        )
       ))}
      </div>
     </motion.div>

     {/* Food Preferences Section */}
     <motion.div
      variants={itemVariants}
      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6"
     >
      <div className="flex items-center gap-3 mb-4">
       <div className="h-12 w-12 bg-amber-100 rounded-xl flex items-center justify-center">
        <FaBowlFood className="text-amber-600 w-6 h-6" />
       </div>
       <h2 className="text-lg font-medium text-gray-800">Food Preferences</h2>
      </div>
      <div className="flex flex-wrap gap-2">
       {selectedFoods.map((food) => (
        <div
         key={food.name}
         className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-amber-100"
        >
         <span className="text-lg">{food.icon}</span>
         <span className="text-sm font-medium">{food.name}</span>
        </div>
       ))}
      </div>
     </motion.div>

     {/* Allergens Section */}
     <motion.div
      variants={itemVariants}
      className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 sm:p-6"
     >
      <div className="flex items-center gap-3 mb-4">
       <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center">
        <GiSadCrab className="text-red-600 w-6 h-6" />
       </div>
       <h2 className="text-lg font-medium text-gray-800">Allergens</h2>
      </div>
      <div className="flex flex-wrap gap-2">
       {selectedAllergens.map((allergen) => (
        <div
         key={allergen.name}
         className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-red-100"
        >
         <span className="text-lg">{allergen.icon}</span>
         <span className="text-sm font-medium">{allergen.name}</span>
        </div>
       ))}
      </div>
     </motion.div>
    </motion.div>
   </motion.div>

   {/* Edit Modal */}
   <AnimatePresence>
    {openEdit && (
     <EditPreferencesModal
      setOpenEdit={setOpenEdit}
      userTypes={userTypes}
      setUserTypes={setUserTypes}
      selectedFoods={selectedFoods}
      setSelectedFoods={setSelectedFoods}
      selectedAllergens={selectedAllergens}
      setSelectedAllergens={setSelectedAllergens}
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
     />
    )}
   </AnimatePresence>
  </>
 );
};
