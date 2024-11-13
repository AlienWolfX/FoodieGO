import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { recipeData } from "../../../data/RecipeData";
import { FoodCard } from "../../components/FoodCard/FoodCard";
import exploreSide from "/exploreSide.png";

export const ExploreRecipes = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const [selectedCuisine, setSelectedCuisine] = useState("All");
 const [selectedCategory, setSelectedCategory] = useState("All");

 const cuisines = [
  "All",
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
  "All",
  "Appetizers",
  "Main Dishes",
  "Side Dishes",
  "Desserts",
  "Soups",
  "Noodles & Rice",
  "Sauces & Condiments",
 ];

 // Filter recipes based on search term, selected cuisine, and selected category
 const filteredRecipes = recipeData.filter((recipe) => {
  const matchesSearch = recipe.title
   .toLowerCase()
   .includes(searchTerm.toLowerCase());
  const matchesCuisine =
   selectedCuisine === "All" || recipe.cuisine === selectedCuisine;
  const matchesCategory =
   selectedCategory === "All" || recipe.category === selectedCategory;

  return matchesSearch && matchesCuisine && matchesCategory;
 });

 return (
  <>
   <Navbar />
   <div className="pt-20 bg-gray-100 min-h-screen">
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

     <div className="md:pt-10 flex flex-col space-y-4 mt-5">
      {/* Cuisine Buttons */}
      <div className="space-y-2">
       <h3 className="text-sm font-medium text-gray-600">Cuisine:</h3>
       <div className="flex flex-wrap gap-2">
        {cuisines.map((cuisine) => (
         <button
          key={cuisine}
          onClick={() => setSelectedCuisine(cuisine)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
           selectedCuisine === cuisine
            ? "bg-mainblue text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
         >
          {cuisine}
         </button>
        ))}
       </div>
      </div>

      {/* Category Buttons */}
      <div className="space-y-2">
       <h3 className="text-sm font-medium text-gray-600">Category:</h3>
       <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
         <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
           selectedCategory === category
            ? "bg-mainblue text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
         >
          {category}
         </button>
        ))}
       </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full">
       <input
        type="text"
        placeholder="Explore recipes on the Internet"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       />
       <button className="bg-mainblue text-white rounded-lg px-6 py-2 ml-2 text-sm font-medium hover:bg-blue-600 transition-colors duration-200">
        Filter
       </button>
      </div>
     </div>

     <div className="mt-6">
      <FoodCard recipes={filteredRecipes} basePath={"/explore"}/>
     </div>
    </div>
   </div>
  </>
 );
};