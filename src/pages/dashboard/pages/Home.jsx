import { FoodCardSlider } from "../../../components/FoodCard/FoodCardSlider";
import { Layout } from "../Layout";
import { recipeData } from "../../../../data/RecipeData";
import exploreSide from "/exploreSide.png";
import { FoodCard } from "../../../components/FoodCard/FoodCard";

export const Home = () => {
 return (
  <Layout>
   <div className="mt-5 flex flex-col md:flex-row items-center justify-between">
    <div className="w-full md:w-[400px]">
     <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
      Explore New Recipes
     </h1>
     <p className="text-xs font-light text-gray-500 mt-2 leading-5">
      Discover a variety of delicious recipes that you can try at home. From
      appetizers to desserts, we have something for everyone!
     </p>
     <div className="mt-5 w-full flex items-center justify-between gap-2">
      <input
       type="text"
       className="w-full h-10 border rounded-md px-4 outline-none text-xs"
       placeholder="Search recipes..."
      />
      <button className="h-10 px-4 rounded border border-mainblue text-mainblue text-xs font-medium">
       Search
      </button>
     </div>
    </div>
    <img
     src={exploreSide}
     alt="Explore"
     className="hidden md:block w-full md:w-[390px] mt-5 md:mt-0"
    />
   </div>

   <div className="mt-10">
    <h1 className="font-semibold text-2xl text-gray-800">Latest Recipes</h1>
   </div>
   <div className="mb-3">
    <hr />
   </div>
   <div className="mt-5 w-full">
    <FoodCardSlider recipes={recipeData} />
   </div>

   <div className="mt-16">
    <h1 className="font-semibold text-2xl text-gray-800">Popular Recipes</h1>
   </div>
   <div className="mb-3">
    <hr />
   </div>
   <div className="mt-5 w-full">
    <FoodCardSlider recipes={recipeData} />
   </div>

   <div className="mt-16">
    <h1 className="font-semibold text-2xl text-gray-800">
     Recommended Recipes
    </h1>
   </div>
   <div className="mb-3">
    <hr />
   </div>
   <div className="mt-5 w-full">
    <FoodCardSlider recipes={recipeData} />
   </div>

   <div className="mt-16">
    <h1 className="font-semibold text-2xl text-gray-800">
     Followed User's Recipes
    </h1>
   </div>
   <div className="mb-3">
    <hr />
   </div>
   <div className="mt-5 w-full">
    <FoodCardSlider recipes={recipeData} />
   </div>
  </Layout>
 );
};
