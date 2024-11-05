import { MdCancel } from "react-icons/md";
import { FoodCard } from "../FoodCard/FoodCard";
import { recipeData } from "../../../data/RecipeData";
import { useEffect, useState } from "react";

export const AuthorProfile = ({ setAuthorModal, author }) => {
 const [selectedAuthor, setSelectedAuthor] = useState(null);

 // Filter recipes by the selected author
 const filteredRecipes = recipeData.filter(recipe => recipe.author === author);

 // Function to handle closing the modal
 const handleCardClick = () => {
  setAuthorModal(false);
 };

 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white border w-[900px] max-h-[600px] p-5 rounded overflow-y-scroll">
     <div>
      <div className="flex items-center justify-between">
       <h1 className="font-medium text-lg ">Foodigoer Profile</h1>
       <MdCancel
        onClick={() => setAuthorModal(false)}
        size={20}
        className="text-gray-500 cursor-pointer"
       />
      </div>
      <div className="mt-2">
       <hr />
      </div>
      <div className="flex items-center w-full justify-between px-2 mt-5">
       <div className="flex items-center gap-2 ">
        <div className="h-10 w-10 bg-gray-100 rounded-full"></div>
        <div className="flex flex-col">
         <p className="font-medium text-sm">{author}</p>
         <div className="flex items-center gap-2 font-light text-gray-500 text-xs">
          <p>
           Followers
           <span className="text-xs text-gray-700 font-medium">100</span>:
          </p>
          <p>
           Recipes:
           <span className="text-xs text-gray-700 font-medium">{filteredRecipes.length}</span>
          </p>
          <p>
           Total Likes:
           <span className="text-xs text-gray-700 font-medium">100</span>
          </p>
         </div>
        </div>
       </div>
       <button className="border border-mainblue text-mainblue px-4 h-8 text-xs rounded ">
        Follow
       </button>
      </div>
     </div>
     <div className="mt-5">
      <h3 className="text-sm font-medium">Shared Recipes</h3>
     </div>
     <div className="mt-5">
      {/* Pass the filtered recipes and handleCardClick to FoodCard */}
      <FoodCard recipes={filteredRecipes} onCardClick={handleCardClick} />
     </div>
    </div>
   </div>
  </>
 );
};
