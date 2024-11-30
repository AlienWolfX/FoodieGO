import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import { GiChefToque, GiCook } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";

export const EditPreferencesModal = ({ 
  setOpenEdit, 
  userTypes, 
  setUserTypes,
  selectedFoods, 
  setSelectedFoods,
  selectedAllergens, 
  setSelectedAllergens,
  tabs,
  activeTab,
  setActiveTab
}) => {
 const [selectedType, setSelectedType] = useState(userTypes.find(type => type.active)?.name || "");

 // Available options
 const availableFoods = [
  { name: "Asian", icon: "🍜" },
  { name: "Seafoods", icon: "🦐" },
  { name: "Noodles", icon: "🍝" },
  { name: "Pork", icon: "🥩" },
  { name: "Vegetables", icon: "🥬" },
  { name: "Vegetarian", icon: "🥗" },
  { name: "Rice Meals", icon: "🍚" },
 ];

 const availableAllergens = [
  { name: "Eggs", icon: "🥚" },
  { name: "Soy", icon: "🫘" },
  { name: "Shellfish", icon: "🦐" },
  { name: "Milk", icon: "🥛" },
  { name: "Peanuts", icon: "🥜" },
 ];

 const roles = [
  { name: "Chef", icon: <GiChefToque className="w-6 h-6" /> },
  { name: "Home Cook", icon: <GiCook className="w-6 h-6" /> },
  { name: "Student", icon: <PiGraduationCap className="w-6 h-6" /> },
 ];

 const handleTypeSelect = (typeName) => {
  setSelectedType(typeName);
  setUserTypes(userTypes.map(type => ({
    ...type,
    active: type.name === typeName
  })));
 };

 const handleFoodToggle = (food) => {
  const isSelected = selectedFoods.some(f => f.name === food.name);
  if (isSelected) {
    setSelectedFoods(selectedFoods.filter(f => f.name !== food.name));
  } else {
    setSelectedFoods([...selectedFoods, food]);
  }
 };

 const handleAllergenToggle = (allergen) => {
  const isSelected = selectedAllergens.some(a => a.name === allergen.name);
  if (isSelected) {
    setSelectedAllergens(selectedAllergens.filter(a => a.name !== allergen.name));
  } else {
    setSelectedAllergens([...selectedAllergens, allergen]);
  }
 };

 const handleSave = () => {
  // Here you would typically save the changes to your backend
  setOpenEdit(false);
 };

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
  >
   <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.95, opacity: 0 }}
    className="bg-white rounded-xl w-full max-w-lg shadow-xl"
   >
    {/* Header */}
    <div className="p-4 sm:p-6 border-b border-gray-100">
     <div className="flex items-center justify-between">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Edit Preferences</h2>
      <button
       onClick={() => setOpenEdit(false)}
       className="text-gray-400 hover:text-gray-600 transition-colors"
      >
       <IoCloseCircleSharp size={24} />
      </button>
     </div>
    </div>

    {/* Tabs */}
    <div className="border-b border-gray-100">
     <div className="flex overflow-x-auto p-2 sm:p-4 gap-2">
      {tabs.map((tab) => (
       <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
         ${activeTab === tab.id
           ? "bg-blue-50 text-blue-600"
           : "text-gray-600 hover:bg-gray-50"
         }`}
       >
        {tab.label}
       </button>
      ))}
     </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
     {activeTab === "userType" && (
      <div className="space-y-4">
       <p className="text-sm text-gray-500">Select your primary role in the kitchen</p>
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {roles.map((role) => (
         <button
          key={role.name}
          onClick={() => handleTypeSelect(role.name)}
          className={`p-3 rounded-xl border transition-all ${
           selectedType === role.name
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 hover:border-blue-200"
          }`}
         >
          <div className="flex flex-col items-center gap-2">
           <div className="text-gray-600">{role.icon}</div>
           <span className="text-sm font-medium">{role.name}</span>
          </div>
         </button>
        ))}
       </div>
      </div>
     )}

     {activeTab === "foods" && (
      <div className="space-y-4">
       <p className="text-sm text-gray-500">Select your food preferences</p>
       <div className="flex flex-wrap gap-2">
        {availableFoods.map((food) => {
         const isSelected = selectedFoods.some(f => f.name === food.name);
         return (
          <button
           key={food.name}
           onClick={() => handleFoodToggle(food)}
           className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
            isSelected
             ? "border-amber-500 bg-amber-50"
             : "border-gray-200 hover:border-amber-200 bg-white"
           }`}
          >
           <span className="text-lg">{food.icon}</span>
           <span className="text-sm font-medium">{food.name}</span>
          </button>
         );
        })}
       </div>
      </div>
     )}

     {activeTab === "allergens" && (
      <div className="space-y-4">
       <p className="text-sm text-gray-500">Select your allergens</p>
       <div className="flex flex-wrap gap-2">
        {availableAllergens.map((allergen) => {
         const isSelected = selectedAllergens.some(a => a.name === allergen.name);
         return (
          <button
           key={allergen.name}
           onClick={() => handleAllergenToggle(allergen)}
           className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
            isSelected
             ? "border-red-500 bg-red-50"
             : "border-gray-200 hover:border-red-200 bg-white"
           }`}
          >
           <span className="text-lg">{allergen.icon}</span>
           <span className="text-sm font-medium">{allergen.name}</span>
          </button>
         );
        })}
       </div>
      </div>
     )}
    </div>

    {/* Footer */}
    <div className="p-4 sm:p-6 border-t border-gray-100">
     <div className="flex items-center justify-end gap-3">
      <button
       onClick={() => setOpenEdit(false)}
       className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
      >
       Cancel
      </button>
      <button
       onClick={handleSave}
       className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
       Save Changes
      </button>
     </div>
    </div>
   </motion.div>
  </motion.div>
 );
}; 