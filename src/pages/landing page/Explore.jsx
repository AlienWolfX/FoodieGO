import { FoodCard } from "../../components/FoodCard/FoodCard";
import { recipeData } from "../../../data/RecipeData";
import { useNavigate } from "react-router-dom";

export const Explore = () => {
 const nav = useNavigate();

 return (
  <>
   <div
    id="explore"
    className="mx-5 lg:mx-32 h-auto lg:h-screen pt-10 lg:pt-0 flex items-center justify-center lg:my-32"
   >
    <div className="w-full flex flex-col justify-center items-center">
     <div className="text-center lg:w-[600px] flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#121212]">
       Explore New Recipes
      </h1>
      <p className="mt-2 text-gray-600 text-sm md:text-base">
       Discover a variety of delicious recipes from around the world. Whether
       you're looking for quick meals, healthy options, or indulgent treats, we
       have something for everyone!
      </p>
     </div>
     <div className="mt-5 mx-32">
      <FoodCard recipes={recipeData.slice(0, 6)} />
     </div>
     <div className="flex items-center justify-center mt-10">
      <button
       onClick={() => nav("/explore")}
       className="bg-mainblue text-xs font-medium text-white h-10 rounded px-4"
      >
       See More
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
