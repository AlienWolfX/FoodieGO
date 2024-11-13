import { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiStar, CiClock2 } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { MdEdit, MdDelete, MdMoreVert } from "react-icons/md";
import { toast } from "sonner";
import { CreateRecipe } from "../recipe/CreateRecipe";

export const UserFoodCard = ({ recipes = [], onDelete, onUpdate }) => {
 const [showOptionsFor, setShowOptionsFor] = useState(null);
 const [editingRecipe, setEditingRecipe] = useState(null);

 const handleDelete = async (recipeId) => {
  try {
   const confirmed = window.confirm(
    "Are you sure you want to delete this recipe?"
   );
   if (confirmed) {
    onDelete?.(recipeId);
    toast.success("Recipe deleted successfully");
   }
  } catch (error) {
   console.error("Error deleting recipe:", error);
   toast.error("Failed to delete recipe");
  }
 };

 if (!recipes || recipes.length === 0) {
  return (
   <div className="text-center py-10">
    <p className="text-gray-500">No recipes found</p>
   </div>
  );
 }

 return (
  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
   {recipes.map((recipe) => (
    <div key={recipe.id} className="relative group">
     <Link
      to={`/view-recipe`}
      state={{
       ...recipe,
      }}
     >
      <div className="border border-mainblue border-opacity-5 bg-white shadow-sm p-2 rounded cursor-pointer hover:border-blue-400 hover:shadow-blue-200 w-full flex flex-col">
       {/* Recipe Image */}
       <div className="relative overflow-hidden rounded">
        {recipe.img_path ? (
         <img
          src={recipe.img_path}
          alt={recipe.title}
          className="h-[140px] w-full object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
          onError={(e) => {
           e.target.onerror = null;
           e.target.src = "/default-recipe-image.jpg";
          }}
         />
        ) : (
         <div className="h-[140px] bg-gray-200 rounded flex items-center justify-center text-gray-400">
          No Image
         </div>
        )}
       </div>

       {/* Recipe Info */}
       <div className="pt-2 flex items-center justify-between">
        <div className="flex flex-col">
         <h1 className="text-sm md:text-base font-medium">{recipe.title}</h1>
         <h1 className="text-xs md:text-sm font-medium text-gray-500">
          Author: {recipe.author}
         </h1>
        </div>
       </div>

       {/* Recipe Details */}
       <div className="md:flex items-center gap-3 mt-auto">
        <p className="text-gray-500 text-xs md:text-sm font-light">
         Category: {recipe.category}
        </p>
        <div className="flex items-center gap-2">
         <div className="flex items-center gap-1">
          <CiStar size={16} className="text-yellow-400" />
          <p className="text-gray-500 text-xs md:text-sm font-light">
           {recipe.ratings || 0}
          </p>
         </div>
         <div className="flex items-center gap-1">
          <CiClock2 size={16} className="text-yellow-400" />
          <p className="text-gray-500 text-xs md:text-sm font-light">
           {recipe.time}
          </p>
         </div>
        </div>
       </div>
      </div>
     </Link>

     {/* Options Button */}
     <div className="absolute top-2 right-2">
      <button
       onClick={(e) => {
        e.preventDefault();
        setShowOptionsFor(showOptionsFor === recipe.id ? null : recipe.id);
       }}
       className="p-1 hover:bg-black/10 rounded-full transition-colors"
      >
       <MdMoreVert className="text-gray-600" />
      </button>

      {/* Options Dropdown */}
      <AnimatePresence>
       {showOptionsFor === recipe.id && (
        <motion.div
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -10 }}
         className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg py-1 z-10"
        >
         <button
          onClick={(e) => {
           e.preventDefault();
           setEditingRecipe(recipe);
           setShowOptionsFor(null);
          }}
          className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
         >
          <MdEdit size={16} />
          Edit Recipe
         </button>
         <button
          onClick={(e) => {
           e.preventDefault();
           handleDelete(recipe.id);
           setShowOptionsFor(null);
          }}
          className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50 flex items-center gap-2"
         >
          <MdDelete size={16} />
          Delete Recipe
         </button>
        </motion.div>
       )}
      </AnimatePresence>
     </div>
    </div>
   ))}

   {/* Edit Modal */}
   <AnimatePresence>
    {editingRecipe && (
     <CreateRecipe
      setCreateRecipe={() => setEditingRecipe(null)}
      isEditing={true}
      recipeData={editingRecipe}
      onRecipeUpdated={(updatedRecipe) => {
       onUpdate?.(updatedRecipe);
       setEditingRecipe(null);
      }}
     />
    )}
   </AnimatePresence>
  </div>
 );
};
