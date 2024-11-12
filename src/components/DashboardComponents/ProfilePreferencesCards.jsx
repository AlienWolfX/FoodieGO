import { CiEdit } from "react-icons/ci";
import { GiSadCrab } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

export const ProfilePreferencesCards = () => {
 // Dummy data for user preferences
 const selectedFoods = [
  { name: "Asian", icon: "🍜" },
  { name: "Seafoods", icon: "🦐" },
  { name: "Vegetarian", icon: "🥗" }
 ];
 
 const selectedAllergens = [
  { name: "Eggs", icon: "🥚" },
  { name: "Peanuts", icon: "🥜" }
 ];

 const userTypes = [
  { name: "Chef", icon: "👨‍🍳", active: true },
  { name: "Home Cook", icon: "🏠", active: false },
  { name: "Student", icon: "🎓", active: false }
 ];

 return (
  <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100">
   <div className="flex items-center justify-between mb-6">
    <div>
     <h1 className="text-xl font-semibold text-gray-800">User Preferences</h1>
     <p className="text-sm text-gray-500 mt-1">
      Customize your food preferences and allergens
     </p>
    </div>
    <motion.button
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
     className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
    >
     <CiEdit size={18} />
     <span className="text-sm font-medium">Edit</span>
    </motion.button>
   </div>

   <div className="space-y-6">
    {/* User Type Section - New! */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
     <div className="flex items-center gap-3 mb-4">
      <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
       <MdOutlineWorkOutline size={24} className="text-blue-600" />
      </div>
      <h2 className="text-lg font-medium text-gray-800">User Type</h2>
     </div>
     
     <div className="flex flex-wrap gap-3">
      {userTypes.map((type) => (
       <motion.div
        key={type.name}
        whileHover={{ y: -2 }}
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border transition-all duration-200 cursor-pointer
         ${type.active 
           ? 'bg-blue-500 text-white border-blue-600' 
           : 'bg-white text-gray-700 border-blue-100 hover:border-blue-300'}`}
       >
        <span className="text-lg">{type.icon}</span>
        <span className="text-sm font-medium">{type.name}</span>
        {type.active && (
         <span className="w-2 h-2 bg-white rounded-full ml-1 animate-pulse"></span>
        )}
       </motion.div>
      ))}
     </div>
    </div>

    {/* Food Preferences Section */}
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
     <div className="flex items-center gap-3 mb-4">
      <div className="h-12 w-12 bg-amber-100 rounded-xl flex items-center justify-center">
       <FaBowlFood size={24} className="text-amber-600" />
      </div>
      <h2 className="text-lg font-medium text-gray-800">Food Preferences</h2>
     </div>
     
     <div className="flex flex-wrap gap-2">
      {selectedFoods.map((food) => (
       <motion.div
        key={food.name}
        whileHover={{ y: -2 }}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-amber-100"
       >
        <span className="text-lg">{food.icon}</span>
        <span className="text-sm font-medium text-gray-700">{food.name}</span>
       </motion.div>
      ))}
     </div>
    </div>

    {/* Allergens Section */}
    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
     <div className="flex items-center gap-3 mb-4">
      <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center">
       <GiSadCrab size={24} className="text-red-600" />
      </div>
      <h2 className="text-lg font-medium text-gray-800">Allergens</h2>
     </div>

     <div className="flex flex-wrap gap-2">
      {selectedAllergens.map((allergen) => (
       <motion.div
        key={allergen.name}
        whileHover={{ y: -2 }}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-red-100"
       >
        <span className="text-lg">{allergen.icon}</span>
        <span className="text-sm font-medium text-gray-700">{allergen.name}</span>
       </motion.div>
      ))}
     </div>
    </div>

    {/* Add Preference Button */}
    <motion.button
     whileHover={{ scale: 1.01 }}
     whileTap={{ scale: 0.99 }}
     className="w-full py-3 mt-4 bg-gray-50 text-gray-600 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors duration-200 text-sm font-medium"
    >
     + Add New Preference
    </motion.button>
   </div>
  </div>
 );
};
