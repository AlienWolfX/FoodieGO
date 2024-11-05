import React from 'react';
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

export const FoodCard = ({ recipes, basePath }) => {
 return (
  <>
   <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {recipes.map((recipe) => (
     <Link
      key={recipe.id}
      to={`${basePath}/view-recipe`}
      state={{
       title: recipe.title,
       img_path: recipe.img_path,
       category: recipe.category,
       author: recipe.author,
       description: recipe.description,
       difficulty: recipe.difficulty,
       ratings: recipe.ratings,
       time: recipe.time,
       ingredients: recipe.ingredients,
       instructions: recipe.instructions,
      }}
     >
      <div className="border border-mainblue border-opacity-5 bg-white shadow-sm p-2 rounded cursor-pointer hover:border-blue-400 hover:shadow-blue-200 w-full flex flex-col">
       <div className="relative overflow-hidden rounded">
        {recipe.img_path ? (
         <img
          src={recipe.img_path}
          alt={recipe.title}
          className="h-[140px] md:h-[180px] w-full object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-150"
         />
        ) : (
         <div className="h-[140px] md:h-[180px] bg-gray-500 rounded"></div>
        )}
       </div>

       <div className="pt-2 flex items-center justify-between">
        <div className="flex flex-col">
         <h1 className="text-sm md:text-base font-medium">{recipe.title}</h1>
         <h1 className="text-xs md:text-sm font-medium text-gray-500">
          Author: {recipe.author}
         </h1>
        </div>
       </div>
       <div className="md:flex items-center gap-3 mt-auto">
        <p className="text-gray-500 text-xs md:text-sm font-light">
         Category: {recipe.category}
        </p>
        <div className="flex items-center gap-2">
         <div className="flex items-center gap-1">
          <CiStar size={16} className="text-yellow-400" />
          <p className="text-gray-500 text-xs md:text-sm font-light">
           {recipe.ratings}
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
    ))}
   </div>
  </>
 );
};
