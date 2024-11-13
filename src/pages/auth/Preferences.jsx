import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGear, FaUtensils } from "react-icons/fa6";
import { GiCook, GiChefToque } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineFoodBank } from "react-icons/md";
import { TbAlertCircle } from "react-icons/tb";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Toaster, toast } from "sonner";

export const Preferences = () => {
 const [selectedFoods, setSelectedFoods] = useState([]);
 const [selectedAllergens, setSelectedAllergens] = useState([]);
 const [userRole, setUserRole] = useState("");
 const nav = useNavigate();

 const foods = [
  { name: "Asian", icon: "🍜" },
  { name: "Seafoods", icon: "🦐" },
  { name: "Noodles", icon: "🍝" },
  { name: "Pork", icon: "🥩" },
  { name: "Vegetables", icon: "🥬" },
  { name: "Vegetarian", icon: "🥗" },
  { name: "Rice Meals", icon: "🍚" },
 ];

 const allergens = [
  { name: "Eggs", icon: "🥚" },
  { name: "Soy", icon: "🫘" },
  { name: "Shellfish", icon: "🦐" },
  { name: "Milk", icon: "🥛" },
  { name: "Peanuts", icon: "🥜" },
 ];

 const roles = [
  { name: "Chef", icon: <GiChefToque size={24} /> },
  { name: "Home Cook", icon: <GiCook size={24} /> },
  { name: "Student", icon: <PiGraduationCap size={24} /> },
 ];

 const toggleSelection = (item, type) => {
  if (type === "food") {
   setSelectedFoods((prev) =>
    prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
   );
  } else {
   setSelectedAllergens((prev) =>
    prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
   );
  }
 };

 const handleCompleteSetup = () => {
  toast.success("Account created, redirecting to login page");
  setTimeout(() => {
   nav("/login");
  }, [3000]);
 };

 return (
  <>
   {/* <Navbar /> */}
   <Toaster richColors position="top-center" />
   <div className="bg-gradient-to-b from-blue-50 to-white h-screen pt-2 px-4">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
    >
     {/* Header */}
     <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
      <h1 className="text-2xl font-bold text-center">
       Customize Your Experience
      </h1>
      <p className="text-blue-100 text-center mt-2">
       Help us personalize your cooking journey
      </p>
     </div>

     <div className="p-8">
      {/* User Role Selection */}
      <div className="mb-8">
       <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <FaUserGear className="text-blue-500" />
        What best describes you?
       </h2>
       <div className="grid grid-cols-3 gap-4">
        {roles.map((role) => (
         <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          key={role.name}
          onClick={() => setUserRole(role.name)}
          className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200
           ${
            userRole === role.name
             ? "border-blue-500 bg-blue-50"
             : "border-gray-200 hover:border-blue-200"
           }`}
         >
          <div className="flex flex-col items-center gap-2">
           <div
            className={`${
             userRole === role.name ? "text-blue-500" : "text-gray-400"
            }`}
           >
            {role.icon}
           </div>
           <span className="font-medium text-gray-700">{role.name}</span>
          </div>
         </motion.div>
        ))}
       </div>
      </div>

      {/* Foods Selection */}
      <div className="mb-8">
       <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <MdOutlineFoodBank className="text-blue-500" />
        Select foods you love to cook
       </h2>
       <div className="flex flex-wrap gap-2">
        {foods.map((food) => (
         <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={food.name}
          onClick={() => toggleSelection(food.name, "food")}
          className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-200
           ${
            selectedFoods.includes(food.name)
             ? "bg-blue-500 text-white"
             : "bg-gray-50 hover:bg-gray-100"
           }`}
         >
          <span className="mr-2">{food.icon}</span>
          {food.name}
         </motion.div>
        ))}
       </div>
      </div>

      {/* Allergens Selection */}
      <div className="mb-8">
       <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <TbAlertCircle className="text-blue-500" />
        Select your allergens
       </h2>
       <div className="flex flex-wrap gap-2">
        {allergens.map((allergen) => (
         <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={allergen.name}
          onClick={() => toggleSelection(allergen.name, "allergen")}
          className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-200
           ${
            selectedAllergens.includes(allergen.name)
             ? "bg-red-500 text-white"
             : "bg-red-50 hover:bg-red-100"
           }`}
         >
          <span className="mr-2">{allergen.icon}</span>
          {allergen.name}
         </motion.div>
        ))}
       </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-8">
       <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCompleteSetup}
        className="text-gray-500 hover:text-gray-700 font-medium"
       >
        Skip for now
       </motion.button>
       <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCompleteSetup}
        className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 
                  transition-colors duration-200 font-medium shadow-lg shadow-blue-100"
       >
        Complete Setup
       </motion.button>
      </div>
     </div>
    </motion.div>
   </div>
  </>
 );
};
