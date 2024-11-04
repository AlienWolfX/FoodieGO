import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { recipeData } from "../../../data/RecipeData";
import { FoodCard } from "../../components/FoodCard/FoodCard";
import exploreSide from "/exploreSide.png";

export const ExploreRecipes = () => {
 const [searchTerm, setSearchTerm] = useState("");

 // Filter recipes based on search term
 const filteredRecipes = recipeData.filter((recipe) =>
  recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
  <>
   <Navbar />
   <div className="pt-20 bg-gray-100">
    <div className="mt-2 mx-5 md:mx-10 lg:mx-32 pb-20">
     <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-[400px]">
       <h1 className="text-4xl font-bold">Explore Popular Dishes</h1>
       <p className="mt-2 text-gray-600 text-sm md:text-base">
        Discover a variety of delicious recipes from around the world. Whether
        you're looking for quick meals, healthy options, or indulgent treats, we
        have something for everyone!
       </p>
      </div>
      <img
       src={exploreSide}
       alt=""
       className="hidden md:block w-full md:w-auto md:max-w-[600px] mt-4 md:mt-0"
      />
     </div>
     <div className="md:pt-10 flex flex-col md:flex-row justify-between items-center mt-5">
      <div className="flex flex-wrap gap-1 mb-4 md:mb-0">
       <button className="bg-white border border-gray-300 rounded px-4 py-2">
        All
       </button>
       <button className="bg-white border border-gray-300 rounded px-4 py-2">
        Breakfast
       </button>
       <button className="bg-white border border-gray-300 rounded px-4 py-2">
        Lunch
       </button>
       <button className="bg-white border border-gray-300 rounded px-4 py-2">
        Dinner
       </button>
       <button className="bg-white border border-gray-300 rounded px-4 py-2">
        Snacks
       </button>
       <button className="bg-white border border-gray-300 rounded px-4 py-2">
        Dessert
       </button>
      </div>
      <div className="flex items-center w-full md:w-auto">
       <input
        type="text"
        placeholder="Explore recipes on the Internet"
        className="border border-gray-300 rounded px-4 py-2 w-full md:w-64"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       />
       <button className="bg-mainblue text-white rounded px-4 py-2 ml-2">
        Filter
       </button>
      </div>
     </div>
     <div>
      <FoodCard recipes={recipeData} />
     </div>
    </div>
   </div>
  </>
 );
};
