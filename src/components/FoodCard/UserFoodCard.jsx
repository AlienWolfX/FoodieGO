import { useState } from "react";
import { Link } from "react-router-dom";
import { CiStar, CiClock2 } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import { GiCook } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { MdEdit, MdDelete, MdMoreVert } from "react-icons/md";
import { toast } from "sonner";
import { CreateRecipe } from "../recipe/CreateRecipe";

export const UserFoodCard = ({ recipes = [], onDelete, onUpdate }) => {
 const [showOptionsFor, setShowOptionsFor] = useState(null);
 const [editingRecipe, setEditingRecipe] = useState(null);

 const handleDelete = async (recipeId) => {
  try {
   const confirmed = window.confirm("Are you sure you want to delete this recipe?");
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
  <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
   {recipes.map((recipe) => (
    <div key={recipe.id} className="relative group">
     <Link
      to="/view-recipe"
      state={{ ...recipe }}
      className="w-full block"
     >
      <div className="group bg-white rounded-xl shadow-sm border border-gray-100
                    hover:shadow-lg hover:shadow-blue-50 hover:border-blue-100 
                    transition-all duration-200 h-[320px]">
        {/* Image Container */}
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl">
          {recipe.img_path ? (
            <img
              src={recipe.img_path}
              alt={recipe.title}
              className="w-full h-full object-cover transition-transform duration-300 
                        group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default-recipe-image.jpg";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}
          {/* Difficulty Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1.5 rounded-lg text-xs font-medium 
                          ${recipe.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                            recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                            "bg-red-100 text-red-700"}`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-3">
          {/* Title and Author */}
          <div className="mb-3">
            <h1 className="text-base font-medium text-gray-800 line-clamp-1 
                          group-hover:text-blue-600">
              {recipe.title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              By {recipe.author}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md">
              <TbCategory className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-600">{recipe.category}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md">
              <GiCook className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-600">{recipe.cuisine}</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <CiStar className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-gray-700">{recipe.ratings || 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <CiClock2 className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-600">{recipe.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FiBarChart2 className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">{recipe.views || 0} views</span>
            </div>
          </div>
        </div>
      </div>
     </Link>

     {/* Options Button */}
     <div className="absolute top-3 right-3 z-10">
      <button
       onClick={(e) => {
        e.preventDefault();
        setShowOptionsFor(showOptionsFor === recipe.id ? null : recipe.id);
       }}
       className="p-1.5 bg-white/90 hover:bg-white rounded-full transition-colors shadow-sm"
      >
       <MdMoreVert className="text-gray-600 w-5 h-5" />
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
