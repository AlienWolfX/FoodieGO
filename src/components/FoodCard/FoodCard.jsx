import React from "react";
import { Link } from "react-router-dom";
import { CiStar, CiClock2 } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import { GiCook } from "react-icons/gi";

export const FoodCard = ({ recipes, basePath, onCardClick }) => {
 return (
  <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {recipes.map((recipe) => (
     <Link
      key={recipe.id}
      to={`${basePath}/view-recipe`}
      state={{
       id: recipe.id,
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
       likers: recipe.likes,
       downloads: recipe.downloads,
       views: recipe.views,
       dateCreated: recipe.dateCreated,
       cuisine: recipe.cuisine,
      }}
      className="w-full block"
     >
      <div
       onClick={() => onCardClick(false)}
       className="group bg-white rounded-xl shadow-sm border border-gray-100
                hover:shadow-lg hover:shadow-blue-50 hover:border-blue-100 
                transition-all duration-200 h-[320px]"
      >
        {/* Image Container */}
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl">
          {recipe.img_path ? (
            <img
              src={recipe.img_path}
              alt={recipe.title}
              className="w-full h-full object-cover transition-transform duration-300 
                        group-hover:scale-105"
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
                <span className="text-sm font-medium text-gray-700">{recipe.ratings}</span>
              </div>
              <div className="flex items-center gap-1">
                <CiClock2 className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-600">{recipe.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FiBarChart2 className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">{recipe.views} views</span>
            </div>
          </div>
        </div>
      </div>
     </Link>
    ))}
  </div>
 );
};
