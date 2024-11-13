import { MdCancel } from "react-icons/md";
import { FoodCard } from "../FoodCard/FoodCard";
import { recipeData } from "../../../data/RecipeData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const AuthorProfile = ({ setAuthorModal, author }) => {
 const [selectedAuthor, setSelectedAuthor] = useState(null);
 const [isFollowing, setIsFollowing] = useState(false);
 const [isLoading, setIsLoading] = useState(false);

 // Filter recipes by the selected author
 const filteredRecipes = recipeData.filter(
  (recipe) => recipe.author === author
 );

 // Function to handle closing the modal
 const handleCardClick = () => {
  setAuthorModal(false);
 };

 // Function to handle follow/unfollow
 const handleFollowClick = async () => {
  setIsLoading(true);
  
  try {
    // Simulate API call with setTimeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsFollowing(!isFollowing);
    
    if (!isFollowing) {
      toast.success(`You are now following ${author}!`);
    } else {
      toast.success(`You have unfollowed ${author}`);
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
 };

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20"
  >
   <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.95, opacity: 0 }}
    className="bg-white w-full max-w-[900px] max-h-[80vh] rounded-xl shadow-2xl overflow-hidden"
   >
    {/* Header */}
    <div className="p-6 border-b">
     <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Foodigoer Profile</h1>
      <button
       onClick={() => setAuthorModal(false)}
       className="p-1 hover:bg-gray-100 rounded-full transition-colors"
      >
       <MdCancel size={24} className="text-gray-500" />
      </button>
     </div>
    </div>

    {/* Profile Section */}
    <div className="p-6">
     <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <div className="h-16 w-16 bg-gradient-to-br from-mainblue to-blue-400 rounded-full flex items-center justify-center text-white text-xl font-semibold">
        {author.charAt(0)}
       </div>
       <div className="space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{author}</h2>
        <div className="flex items-center gap-4 text-sm text-gray-600">
         <div className="flex items-center gap-1">
          <span className="font-medium">
            {isFollowing ? "101" : "100"}
          </span>
          <span className="text-gray-500">Followers</span>
         </div>
         <div className="flex items-center gap-1">
          <span className="font-medium">{filteredRecipes.length}</span>
          <span className="text-gray-500">Recipes</span>
         </div>
         <div className="flex items-center gap-1">
          <span className="font-medium">100</span>
          <span className="text-gray-500">Likes</span>
         </div>
        </div>
       </div>
      </div>
      <button
       onClick={handleFollowClick}
       disabled={isLoading}
       className={`px-6 py-2 rounded-lg font-medium
         transition-all duration-200
         active:scale-95 transform
         disabled:opacity-50 disabled:cursor-not-allowed
         ${isFollowing 
           ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
           : 'bg-mainblue text-white hover:bg-mainblue/90'
         }
         ${isLoading ? 'cursor-wait' : 'cursor-pointer'}
         flex items-center justify-center gap-2 min-w-[100px]`}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
        ) : (
          isFollowing ? 'Following' : 'Follow'
        )}
      </button>
     </div>
    </div>

    {/* Recipes Section */}
    <div className="px-6 pb-2">
     <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Shared Recipes ({filteredRecipes.length})
     </h3>
    </div>

    {/* Scrollable Recipe Content */}
    <div className="px-6 pb-6 overflow-y-auto max-h-[400px] custom-scrollbar">
     <div className="">
      <FoodCard
       recipes={filteredRecipes}
       basePath={""}
       onCardClick={handleCardClick}
      />
     </div>
    </div>
   </motion.div>
  </motion.div>
 );
};
