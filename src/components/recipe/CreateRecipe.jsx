import { useState } from "react";
import { MdCancel, MdCloudUpload, MdDelete } from "react-icons/md";
import { UserRecipeData } from "../../../data/UserRecipeData";
import { motion, AnimatePresence } from "framer-motion";
import { IoTimeOutline } from "react-icons/io5";
import { toast } from 'sonner';

export const CreateRecipe = ({ 
  setCreateRecipe, 
  isEditing = false, 
  recipeData = null,
  onRecipeCreated,
  onRecipeUpdated 
}) => {
 const [formData, setFormData] = useState(
  isEditing 
    ? recipeData 
    : {
        title: "",
        description: "",
        category: "",
        cuisine: "",
        images: [],
        video: null,
        time: "",
        difficulty: "",
        ingredients: [],
        instructions: [],
      }
 );

 const [currentIngredient, setCurrentIngredient] = useState("");
 const [currentInstruction, setCurrentInstruction] = useState("");
 const [dragActive, setDragActive] = useState(false);
 const [showTimeSlider, setShowTimeSlider] = useState(false);
 const [timeInMinutes, setTimeInMinutes] = useState(30);

 const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins} mins`;
  if (mins === 0) return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${mins} mins`;
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleTimeChange = (e) => {
  const minutes = parseInt(e.target.value);
  setTimeInMinutes(minutes);
  setFormData(prev => ({
   ...prev,
   time: formatTime(minutes)
  }));
 };

 const handleMediaUpload = (e) => {
  const files = Array.from(e.target.files);
  
  files.forEach(file => {
    if (file.type.startsWith('image/')) {
      // Convert image to base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          img_path: reader.result // Store the base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  });
 };

 const handleDrag = (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.type === "dragenter" || e.type === "dragover") {
   setDragActive(true);
  } else if (e.type === "dragleave") {
   setDragActive(false);
  }
 };

 const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  setDragActive(false);
  
  const files = Array.from(e.dataTransfer.files);
  files.forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          img_path: reader.result // Store the base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  });
 };

 const removeMedia = (index, type) => {
  if (type === 'image') {
   setFormData(prev => ({
    ...prev,
    images: prev.images.filter((_, i) => i !== index)
   }));
  } else {
   setFormData(prev => ({
    ...prev,
    video: null
   }));
  }
 };

 const addIngredient = () => {
  if (currentIngredient.trim()) {
   setFormData(prev => ({
    ...prev,
    ingredients: [...prev.ingredients, currentIngredient.trim()]
   }));
   setCurrentIngredient("");
  }
 };

 const addInstruction = () => {
  if (currentInstruction.trim()) {
   setFormData(prev => ({
    ...prev,
    instructions: [...prev.instructions, currentInstruction.trim()]
   }));
   setCurrentInstruction("");
  }
 };

 const cuisines = [
  "Chinese",
  "Japanese",
  "Korean",
  "Thai",
  "Indian",
  "Vietnamese",
  "Filipino",
  "Malaysian",
  "Indonesian",
 ];

 const categories = [
  "Appetizers",
  "Main Dishes",
  "Side Dishes",
  "Desserts",
  "Soups",
  "Noodles & Rice",
  "Sauces & Condiments",
 ];

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const recipeId = Date.now().toString();
    
    const recipe = {
      id: recipeId,
      ...formData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      author: "You",
      ratings: 0,
      downloads: 0,
      views: 0,
      shares: 0,
      likes: [],
    };

    onRecipeCreated?.(recipe);
    toast.success('Recipe created successfully');
    setCreateRecipe(false);
  } catch (error) {
    console.error('Error creating recipe:', error);
    toast.error('Failed to create recipe');
  }
 };

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-2 z-50"
  >
   <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    className="bg-white rounded-lg w-full max-w-3xl max-h-[95vh] overflow-y-auto"
   >
    <div className="sticky top-0 bg-white px-4 py-3 border-b flex items-center justify-between">
     <h1 className="text-base font-medium text-gray-800">Create New Recipe</h1>
     <button
      onClick={() => setCreateRecipe(false)}
      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
     >
      <MdCancel size={20} className="text-gray-500" />
     </button>
    </div>

    <div className="p-4">
     <form onSubmit={handleSubmit} className="space-y-4">
      {/* Basic Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div className="space-y-3">
        <div>
         <label className="block text-xs font-medium text-gray-700 mb-1">
          Recipe Title
         </label>
         <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter recipe title"
         />
        </div>

        <div>
         <label className="block text-xs font-medium text-gray-700 mb-1">
          Description
         </label>
         <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={2}
          className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe your recipe"
         />
        </div>

        <div className="grid grid-cols-2 gap-3">
         <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
           Category
          </label>
          <select
           name="category"
           value={formData.category}
           onChange={handleChange}
           className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          >
           <option value="">Select category</option>
           {categories.map((cat) => (
            <option key={cat} value={cat.toLowerCase()}>
             {cat}
            </option>
           ))}
          </select>
         </div>

         <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
           Cuisine
          </label>
          <select
           name="cuisine"
           value={formData.cuisine}
           onChange={handleChange}
           className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          >
           <option value="">Select cuisine</option>
           {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine.toLowerCase()}>
             {cuisine}
            </option>
           ))}
          </select>
         </div>

         <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
           Difficulty
          </label>
          <select
           name="difficulty"
           value={formData.difficulty}
           onChange={handleChange}
           className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          >
           <option value="">Select difficulty</option>
           <option value="easy">Easy</option>
           <option value="medium">Medium</option>
           <option value="hard">Hard</option>
          </select>
         </div>

         <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
           Cooking Time
          </label>
          <div className="relative">
           <div
            className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md cursor-pointer hover:border-blue-500 transition-all flex items-center justify-between"
            onClick={() => setShowTimeSlider(!showTimeSlider)}
           >
            <span className="text-gray-700">
             {formData.time || "select time"}
            </span>
            <IoTimeOutline className="text-gray-500" />
           </div>

           <AnimatePresence>
            {showTimeSlider && (
             <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg w-full"
             >
              <div className="space-y-4">
               <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  5 mins
                </span>
                <span className="text-sm font-medium text-blue-500">
                 {formatTime(timeInMinutes)}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  3 hours
                </span>
               </div>
               <input
                type="range"
                min="5"
                max="180"
                value={timeInMinutes}
                onChange={handleTimeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
               />
               <div className="flex justify-between text-xs text-gray-500">
                <span>Minimum</span>
                <span>Maximum</span>
               </div>
              </div>
             </motion.div>
            )}
           </AnimatePresence>
          </div>
         </div>
        </div>
       </div>

       {/* Media Upload Section */}
       <div
        className={`border border-dashed rounded-md p-3 ${
         dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
       >
        <div className="text-center space-y-2">
         <MdCloudUpload className="mx-auto h-8 w-8 text-gray-400" />
         <div className="space-y-1">
          <p className="text-xs text-gray-500">
           Drag and drop your images here, or
          </p>
          <label className="relative cursor-pointer ml-1">
           <span className="text-blue-500 hover:text-blue-600">browse files</span>
           <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleMediaUpload}
            className="hidden"
           />
          </label>
         </div>
        </div>

        {/* Preview Section */}
        <div className="mt-3">
          {formData.img_path && (
            <div className="relative group">
              <img
                src={formData.img_path}
                alt="Recipe preview"
                className="w-full h-36 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, img_path: null }))}
                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MdDelete size={14} />
              </button>
            </div>
          )}
        </div>
       </div>
      </div>

      {/* Ingredients and Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {/* Ingredients */}
       <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
         Ingredients
        </label>
        <div className="flex gap-2 mb-2">
         <input
          type="text"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
          className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md"
          placeholder="Add ingredient"
         />
         <button
          type="button"
          onClick={addIngredient}
          className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600"
         >
          Add
         </button>
        </div>
        <div className="space-y-2">
         {formData.ingredients.map((ingredient, index) => (
          <div
           key={index}
           className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
          >
           <span className="text-sm">{ingredient}</span>
           <button
            type="button"
            onClick={() => {
             setFormData(prev => ({
              ...prev,
              ingredients: prev.ingredients.filter((_, i) => i !== index)
             }));
            }}
            className="text-red-500 hover:text-red-600"
           >
            <MdDelete size={18} />
           </button>
          </div>
         ))}
        </div>
       </div>

       {/* Instructions */}
       <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
         Instructions
        </label>
        <div className="flex gap-2 mb-2">
         <input
          type="text"
          value={currentInstruction}
          onChange={(e) => setCurrentInstruction(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addInstruction()}
          className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md"
          placeholder="Add instruction"
         />
         <button
          type="button"
          onClick={addInstruction}
          className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600"
         >
          Add
         </button>
        </div>
        <div className="space-y-2">
         {formData.instructions.map((instruction, index) => (
          <div
           key={index}
           className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
          >
           <span className="text-sm">
            {index + 1}. {instruction}
           </span>
           <button
            type="button"
            onClick={() => {
             setFormData(prev => ({
              ...prev,
              instructions: prev.instructions.filter((_, i) => i !== index)
             }));
            }}
            className="text-red-500 hover:text-red-600"
           >
            <MdDelete size={18} />
           </button>
          </div>
         ))}
        </div>
       </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-2 pt-3 border-t">
       <button
        type="button"
        onClick={() => setCreateRecipe(false)}
        className="px-4 py-1.5 text-xs border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50"
       >
        Cancel
       </button>
       <button
        type="submit"
        className="px-4 py-1.5 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600"
       >
        {isEditing ? 'Update Recipe' : 'Create Recipe'}
       </button>
      </div>
     </form>
    </div>
   </motion.div>
  </motion.div>
 );
};
