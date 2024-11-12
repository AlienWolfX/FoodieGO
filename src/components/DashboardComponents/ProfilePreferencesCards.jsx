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
  <motion.div
   initial="hidden"
   animate="visible"
   variants={containerVariants}
   className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
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
     className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
    >
     <CiEdit size={18} />
     <span className="text-sm font-medium">Edit</span>
    </motion.button>
   </motion.div>

   <motion.div variants={containerVariants} className="space-y-6">
    {/* User Type Section */}
    <motion.div
     variants={itemVariants}
     className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
    >
     <motion.div 
      variants={itemVariants}
      className="flex items-center gap-3 mb-4"
     >
      <motion.div
       whileHover={{ rotate: 360 }}
       transition={{ duration: 0.5 }}
       className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center"
      >
       <MdOutlineWorkOutline size={24} className="text-blue-600" />
      </motion.div>
      <h2 className="text-lg font-medium text-gray-800">User Type</h2>
     </motion.div>
     
     <motion.div 
      variants={containerVariants}
      className="flex flex-wrap gap-3"
     >
      {userTypes.map((type, index) => (
       <motion.div
        key={type.name}
        variants={itemVariants}
        whileHover={{ y: -2, scale: 1.02 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border transition-all duration-200 cursor-pointer
         ${type.active 
           ? 'bg-blue-500 text-white border-blue-600' 
           : 'bg-white text-gray-700 border-blue-100 hover:border-blue-300'}`}
       >
        <span className="text-lg">{type.icon}</span>
        <span className="text-sm font-medium">{type.name}</span>
        {type.active && (
         <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2 h-2 bg-white rounded-full ml-1"
         />
        )}
       </motion.div>
      ))}
     </motion.div>
    </motion.div>

    {/* Food Preferences Section */}
    <motion.div
     variants={itemVariants}
     className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
    >
     <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
      <motion.div
       whileHover={{ rotate: 360 }}
       transition={{ duration: 0.5 }}
       className="h-12 w-12 bg-amber-100 rounded-xl flex items-center justify-center"
      >
       <FaBowlFood size={24} className="text-amber-600" />
      </motion.div>
      <h2 className="text-lg font-medium text-gray-800">Food Preferences</h2>
     </motion.div>
     
     <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
      {selectedFoods.map((food, index) => (
       <motion.div
        key={food.name}
        variants={itemVariants}
        whileHover={{ y: -2, scale: 1.05 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-amber-100"
       >
        <motion.span
         whileHover={{ rotate: 360 }}
         transition={{ duration: 0.5 }}
         className="text-lg"
        >
         {food.icon}
        </motion.span>
        <span className="text-sm font-medium text-gray-700">{food.name}</span>
       </motion.div>
      ))}
     </motion.div>
    </motion.div>

    {/* Allergens Section */}
    <motion.div
     variants={itemVariants}
     className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
    >
     <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
      <motion.div
       whileHover={{ rotate: 360 }}
       transition={{ duration: 0.5 }}
       className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center"
      >
       <GiSadCrab size={24} className="text-red-600" />
      </motion.div>
      <h2 className="text-lg font-medium text-gray-800">Allergens</h2>
     </motion.div>

     <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
      {selectedAllergens.map((allergen, index) => (
       <motion.div
        key={allergen.name}
        variants={itemVariants}
        whileHover={{ y: -2, scale: 1.05 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-red-100"
       >
        <motion.span
         whileHover={{ rotate: 360 }}
         transition={{ duration: 0.5 }}
         className="text-lg"
        >
         {allergen.icon}
        </motion.span>
        <span className="text-sm font-medium text-gray-700">{allergen.name}</span>
       </motion.div>
      ))}
     </motion.div>
    </motion.div>

    {/* Add Preference Button */}
    <motion.button
     variants={itemVariants}
     whileHover={{ scale: 1.01, y: -2 }}
     whileTap={{ scale: 0.99 }}
     className="w-full py-3 mt-4 bg-gray-50 text-gray-600 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
    >
     + Add New Preference
    </motion.button>
   </motion.div>
  </motion.div>
 );
};
