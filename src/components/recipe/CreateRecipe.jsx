import { useState, useRef, useEffect } from "react";
import { MdCancel, MdCloudUpload, MdDelete, MdEdit } from "react-icons/md";
import { UserRecipeData } from "../../../data/UserRecipeData";
import { motion, AnimatePresence } from "framer-motion";
import { IoTimeOutline } from "react-icons/io5";
import { toast } from "sonner";

export const CreateRecipe = ({
 setCreateRecipe,
 isEditing = false,
 recipeData = null,
 onRecipeCreated,
 onRecipeUpdated,
}) => {
 const [formData, setFormData] = useState(
  isEditing
   ? {
      ...recipeData,
      img_path: recipeData.img_path || null,
     }
   : {
      title: "",
      description: "",
      category: "",
      cuisine: "",
      img_path: null,
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
 const [editingIngredientIndex, setEditingIngredientIndex] = useState(null);
 const [editingInstructionIndex, setEditingInstructionIndex] = useState(null);
 const [editableIngredientId, setEditableIngredientId] = useState(null);
 const [editableInstructionId, setEditableInstructionId] = useState(null);
 const [imageError, setImageError] = useState(null);
 const [isUploading, setIsUploading] = useState(false);
 const [errors, setErrors] = useState({});

 const timeSliderRef = useRef(null);

 useEffect(() => {
  function handleClickOutside(event) {
   if (timeSliderRef.current && !timeSliderRef.current.contains(event.target)) {
    setShowTimeSlider(false);
   }
  }

  if (showTimeSlider) {
   document.addEventListener("mousedown", handleClickOutside);
   return () => {
    document.removeEventListener("mousedown", handleClickOutside);
   };
  }
 }, [showTimeSlider]);

 const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins} mins`;
  if (mins === 0) return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  return `${hours} ${hours === 1 ? "hour" : "hours"} ${mins} mins`;
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
  setFormData((prev) => ({
   ...prev,
   time: formatTime(minutes),
  }));
 };

 const handleMediaUpload = (e) => {
  const files = Array.from(e.target.files);
  setImageError(null);

  if (files.length > 0) {
   const file = files[0];

   // Check file type
   if (!file.type.startsWith("image/")) {
    setImageError("Please upload an image file (JPG, PNG, etc)");
    return;
   }

   // Check file size (5MB limit)
   if (file.size > 5 * 1024 * 1024) {
    setImageError("Image size should be less than 5MB");
    return;
   }

   setIsUploading(true);
   const reader = new FileReader();

   reader.onloadend = () => {
    setFormData((prev) => ({
     ...prev,
     img_path: reader.result,
    }));
    setIsUploading(false);
   };

   reader.onerror = () => {
    setImageError("Failed to read the image file");
    setIsUploading(false);
   };

   try {
    reader.readAsDataURL(file);
   } catch (error) {
    setImageError("Failed to process the image");
    setIsUploading(false);
   }
  }
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
  setImageError(null);

  const files = Array.from(e.dataTransfer.files);
  if (files.length > 0) {
   const file = files[0];

   // Check file type
   if (!file.type.startsWith("image/")) {
    setImageError("Please upload an image file (JPG, PNG, etc)");
    return;
   }

   // Check file size (5MB limit)
   if (file.size > 5 * 1024 * 1024) {
    setImageError("Image size should be less than 5MB");
    return;
   }

   setIsUploading(true);
   const reader = new FileReader();

   reader.onloadend = () => {
    setFormData((prev) => ({
     ...prev,
     img_path: reader.result,
    }));
    setIsUploading(false);
   };

   reader.onerror = () => {
    setImageError("Failed to read the image file");
    setIsUploading(false);
   };

   try {
    reader.readAsDataURL(file);
   } catch (error) {
    setImageError("Failed to process the image");
    setIsUploading(false);
   }
  }
 };

 const removeMedia = (index, type) => {
  if (type === "image") {
   setFormData((prev) => ({
    ...prev,
    images: prev.images.filter((_, i) => i !== index),
   }));
  } else {
   setFormData((prev) => ({
    ...prev,
    video: null,
   }));
  }
 };

 const startEditingIngredient = (index) => {
  setCurrentIngredient(formData.ingredients[index]);
  setEditingIngredientIndex(index);
 };

 const startEditingInstruction = (index) => {
  setCurrentInstruction(formData.instructions[index]);
  setEditingInstructionIndex(index);
 };

 const addIngredient = () => {
  if (currentIngredient.trim()) {
   setFormData((prev) => ({
    ...prev,
    ingredients:
     editingIngredientIndex !== null
      ? prev.ingredients.map((ing, i) =>
         i === editingIngredientIndex ? currentIngredient.trim() : ing
        )
      : [...prev.ingredients, currentIngredient.trim()],
   }));
   setCurrentIngredient("");
   setEditingIngredientIndex(null);
  }
 };

 const addInstruction = () => {
  if (currentInstruction.trim()) {
   setFormData((prev) => ({
    ...prev,
    instructions:
     editingInstructionIndex !== null
      ? prev.instructions.map((inst, i) =>
         i === editingInstructionIndex ? currentInstruction.trim() : inst
        )
      : [...prev.instructions, currentInstruction.trim()],
   }));
   setCurrentInstruction("");
   setEditingInstructionIndex(null);
  }
 };

 const cuisines = [
  "All",
  "American",
  "Argentine",
  "Asian Fusion",
  "Bangladeshi",
  "Brazilian",
  "British",
  "Burmese",
  "Cambodian",
  "Caribbean",
  "Chinese",
  "Egyptian",
  "Ethiopian",
  "Filipino",
  "French",
  "German",
  "Greek",
  "Hungarian",
  "Indian",
  "Indonesian",
  "Israeli",
  "Italian",
  "Japanese",
  "Korean",
  "Laotian",
  "Lebanese",
  "Malaysian",
  "Mediterranean",
  "Mexican",
  "Moroccan",
  "Nepali",
  "Nigerian",
  "Pacific Rim",
  "Pakistani",
  "Persian",
  "Peruvian",
  "Polish",
  "Russian",
  "Singaporean",
  "Spanish",
  "Sri Lankan",
  "Thai",
  "Turkish",
  "Vietnamese",
 ];

 const categories = [
  "All",
  "Appetizers",
  "Beverages",
  "Breads",
  "Braised Dishes",
  "Breakfast",
  "Cakes",
  "Cookies",
  "Curries",
  "Desserts",
  "Dinner",
  "Dips & Spreads",
  "Gluten-Free",
  "Grilled Dishes",
  "Holiday Specials",
  "Lunch",
  "Main Dishes",
  "Marinades",
  "Meat Dishes",
  "Noodles & Rice",
  "Pasta",
  "Pastries",
  "Party Food",
  "Pickled & Fermented",
  "Poultry",
  "Preserves & Jams",
  "Roasted Dishes",
  "Salads",
  "Sandwiches",
  "Sauces & Condiments",
  "Seafood",
  "Side Dishes",
  "Snacks",
  "Soups",
  "Spice Blends",
  "Steamed Dishes",
  "Stews",
  "Stir-Fries",
  "Street Food",
  "Vegan",
  "Vegetarian",
 ];

 const validateForm = () => {
  const newErrors = {};

  // Required fields validation
  if (!formData.title?.trim()) newErrors.title = "Title is required";
  if (!formData.description?.trim())
   newErrors.description = "Description is required";
  if (!formData.category) newErrors.category = "Category is required";
  if (!formData.cuisine) newErrors.cuisine = "Cuisine is required";
  if (!formData.time) newErrors.time = "Cooking time is required";
  if (!formData.difficulty)
   newErrors.difficulty = "Difficulty level is required";
  if (!formData.img_path) newErrors.image = "Recipe image is required";
  if (formData.ingredients.length === 0)
   newErrors.ingredients = "At least one ingredient is required";
  if (formData.instructions.length === 0)
   newErrors.instructions = "At least one instruction is required";

  // Additional validations
  if (formData.title?.length > 100)
   newErrors.title = "Title is too long (max 100 characters)";
  if (formData.description?.length > 500)
   newErrors.description = "Description is too long (max 500 characters)";
  if (formData.ingredients.length > 50)
   newErrors.ingredients = "Too many ingredients (max 50)";
  if (formData.instructions.length > 30)
   newErrors.instructions = "Too many instructions (max 30)";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form
  if (!validateForm()) {
   toast.error("Please fill in all required fields");
   return;
  }

  try {
   if (isEditing) {
    // Update existing recipe
    const updatedRecipe = {
     ...recipeData,
     ...formData,
     updated_at: new Date().toISOString(),
    };

    onRecipeUpdated?.(updatedRecipe);
    toast.success("Recipe updated successfully");
    setCreateRecipe(false);
   } else {
    // Create new recipe
    const recipeId = Date.now().toString();
    const newRecipe = {
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

    onRecipeCreated?.(newRecipe);
    toast.success("Recipe created successfully");
    setCreateRecipe(false);
   }
  } catch (error) {
   console.error("Error saving recipe:", error);
   toast.error(
    isEditing ? "Failed to update recipe" : "Failed to create recipe"
   );
  }
 };

 const handleIngredientEdit = (index, newValue) => {
  setFormData((prev) => ({
   ...prev,
   ingredients: prev.ingredients.map((ing, i) =>
    i === index ? newValue : ing
   ),
  }));
 };

 const handleInstructionEdit = (index, newValue) => {
  setFormData((prev) => ({
   ...prev,
   instructions: prev.instructions.map((inst, i) =>
    i === index ? newValue : inst
   ),
  }));
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
    className="bg-white rounded-lg shadow-xl max-w-3xl mx-auto"
   >
    <div className="max-h-[80vh] overflow-y-auto flex flex-col">
     <div className="sticky top-0 bg-white px-4 py-3 border-b flex items-center justify-between z-10">
      <h1 className="text-base font-medium text-gray-800">
       {isEditing ? "Edit Recipe" : "Create New Recipe"}
      </h1>
      <button
       onClick={() => setCreateRecipe(false)}
       className="p-1 hover:bg-gray-100 rounded-full transition-colors"
      >
       <MdCancel size={20} className="text-gray-500" />
      </button>
     </div>

     <form onSubmit={handleSubmit} className="flex flex-col flex-1">
      <div className="p-4 space-y-4 flex-1">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
         <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-700">
           Title {errors.title && <span className="text-red-500">*</span>}
          </label>
          <input
           type="text"
           name="title"
           value={formData.title}
           onChange={handleChange}
           className={`w-full px-3 py-1.5 text-sm border ${
            errors.title ? "border-red-300 bg-red-50" : "border-gray-200"
           } rounded-md focus:outline-none focus:ring-1 ${
            errors.title ? "focus:ring-red-500" : "focus:ring-blue-500"
           }`}
           placeholder="Recipe title"
          />
          {errors.title && (
           <p className="text-xs text-red-500 mt-1">{errors.title}</p>
          )}
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
           <div className="relative" ref={timeSliderRef}>
            <div
             className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md cursor-pointer hover:border-blue-500 transition-all flex items-center justify-between"
             onClick={() => setShowTimeSlider(!showTimeSlider)}
            >
             <span className="text-gray-700">
              {formData.time || "Select cooking time"}
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

        {/* Image Upload Section */}
        <div className="space-y-1">
         <label className="block text-xs font-medium text-gray-700">
          Recipe Image {errors.image && <span className="text-red-500">*</span>}
         </label>
         <label className="cursor-pointer block">
          <div
           className={`border-2 border-dashed rounded-lg p-4 transition-colors
               ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-200"}
               ${formData.img_path ? "bg-gray-50" : ""}
               ${imageError ? "border-red-300 bg-red-50" : ""}
             `}
           onDragEnter={handleDrag}
           onDragLeave={handleDrag}
           onDragOver={handleDrag}
           onDrop={handleDrop}
          >
           <input
            type="file"
            accept="image/*"
            onChange={handleMediaUpload}
            className="hidden"
           />
           {!formData.img_path ? (
            <div className="text-center space-y-2">
             {isUploading ? (
              <div className="animate-pulse">
               <div className="mx-auto h-8 w-8 text-gray-400">
                <svg className="animate-spin" viewBox="0 0 24 24">
                 <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                 />
                 <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                 />
                </svg>
               </div>
               <p className="text-xs text-gray-500">Uploading image...</p>
              </div>
             ) : (
              <>
               <MdCloudUpload className="mx-auto h-8 w-8 text-gray-400" />
               <div className="space-y-1">
                <p className="text-xs text-gray-500">
                 Drag and drop your image here, or click to browse
                </p>
                <p className="text-xs text-gray-400">
                 (Max size: 5MB, Formats: JPG, PNG)
                </p>
               </div>
              </>
             )}
            </div>
           ) : (
            <div className="relative group">
             <img
              src={formData.img_path}
              alt="Recipe preview"
              className="w-full h-36 object-cover rounded-md"
              onError={() => {
               setImageError("Failed to load the image");
               setFormData((prev) => ({ ...prev, img_path: null }));
              }}
             />
             <button
              type="button"
              onClick={(e) => {
               e.stopPropagation();
               setFormData((prev) => ({ ...prev, img_path: null }));
               setImageError(null);
              }}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity"
             >
              <MdDelete size={16} />
             </button>
            </div>
           )}
          </div>
         </label>
         {imageError && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
           <MdCancel size={14} />
           {imageError}
          </p>
         )}
         {errors.image && (
          <p className="text-xs text-red-500 mt-1">{errors.image}</p>
         )}
        </div>
       </div>

       {/* Ingredients and Instructions */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ingredients */}
        <div className="space-y-1">
         <label className="block text-xs font-medium text-gray-700">
          Ingredients{" "}
          {errors.ingredients && <span className="text-red-500">*</span>}
         </label>
         <div className="flex gap-2 mb-2">
          <input
           type="text"
           value={currentIngredient}
           onChange={(e) => setCurrentIngredient(e.target.value)}
           onKeyPress={(e) => e.key === "Enter" && addIngredient()}
           className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md"
           placeholder="Add ingredient"
          />
          <button
           type="button"
           onClick={addIngredient}
           className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
           {editingIngredientIndex !== null ? "Update" : "Add"}
          </button>
         </div>
         <div className="space-y-2">
          {formData.ingredients.map((ingredient, index) => (
           <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-lg group"
           >
            {editableIngredientId === index ? (
             <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientEdit(index, e.target.value)}
              onBlur={() => setEditableIngredientId(null)}
              onKeyPress={(e) => {
               if (e.key === "Enter") {
                setEditableIngredientId(null);
               }
              }}
              autoFocus
              className="flex-1 px-2 py-1 text-sm bg-white border border-blue-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
             />
            ) : (
             <span
              className="text-sm flex-1 cursor-pointer hover:text-blue-600"
              onClick={() => setEditableIngredientId(index)}
             >
              {ingredient}
             </span>
            )}
            <button
             type="button"
             onClick={() => {
              setFormData((prev) => ({
               ...prev,
               ingredients: prev.ingredients.filter((_, i) => i !== index),
              }));
             }}
             className="text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
             <MdDelete size={18} />
            </button>
           </div>
          ))}
         </div>
         {errors.ingredients && (
          <p className="text-xs text-red-500 mt-1">{errors.ingredients}</p>
         )}
        </div>

        {/* Instructions */}
        <div className="space-y-1">
         <label className="block text-xs font-medium text-gray-700">
          Instructions{" "}
          {errors.instructions && <span className="text-red-500">*</span>}
         </label>
         <div className="flex gap-2 mb-2">
          <input
           type="text"
           value={currentInstruction}
           onChange={(e) => setCurrentInstruction(e.target.value)}
           onKeyPress={(e) => e.key === "Enter" && addInstruction()}
           className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md"
           placeholder="Add instruction"
          />
          <button
           type="button"
           onClick={addInstruction}
           className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
           {editingInstructionIndex !== null ? "Update" : "Add"}
          </button>
         </div>
         <div className="space-y-2">
          {formData.instructions.map((instruction, index) => (
           <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-lg group"
           >
            {editableInstructionId === index ? (
             <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionEdit(index, e.target.value)}
              onBlur={() => setEditableInstructionId(null)}
              onKeyPress={(e) => {
               if (e.key === "Enter") {
                setEditableInstructionId(null);
               }
              }}
              autoFocus
              className="flex-1 px-2 py-1 text-sm bg-white border border-blue-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
             />
            ) : (
             <span
              className="text-sm flex-1 cursor-pointer hover:text-blue-600"
              onClick={() => setEditableInstructionId(index)}
             >
              {index + 1}. {instruction}
             </span>
            )}
            <button
             type="button"
             onClick={() => {
              setFormData((prev) => ({
               ...prev,
               instructions: prev.instructions.filter((_, i) => i !== index),
              }));
             }}
             className="text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
             <MdDelete size={18} />
            </button>
           </div>
          ))}
         </div>
         {errors.instructions && (
          <p className="text-xs text-red-500 mt-1">{errors.instructions}</p>
         )}
        </div>
       </div>
      </div>

      {/* Submit Button Section */}
      <div className="sticky bottom-0 bg-white border-t py-3 mt-auto">
       <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-end gap-2">
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
          {isEditing ? "Update Recipe" : "Create Recipe"}
         </button>
        </div>
       </div>
      </div>
     </form>
    </div>
   </motion.div>
  </motion.div>
 );
};
