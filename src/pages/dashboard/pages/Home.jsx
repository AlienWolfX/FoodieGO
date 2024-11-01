import { FoodCard } from "../../../components/FoodCard/FoodCard";
import { Layout } from "../Layout";
import { recipeData } from "../../../../data/RecipeData";
import exploreSide from "/public/exploreSide.png";

export const Home = () => {
 return (
  <Layout>
   <div className="mt-5 flex items-center justify-between">
    <div className="w-[400px]">
     <h1 className=" text-4xl  font-bold text-gray-700">Explore New Recipes</h1>
     <p className="text-xs font-light text-gray-500 mt-2 leading-5">
      Discover a variety of delicious recipes that you can try at home. From
      appetizers to desserts, we have something for everyone!
     </p>
     <div className="mt-5 w-full flex items-center justify-between gap-2">
      <input
       type="text"
       className="w-full h-10 border rounded-md px-4 outline-none text-xs "
      />
      <button className="h-10 px-4 rounded border border-mainblue text-mainblue text-xs font-medium">
       search
      </button>
     </div>
    </div>
    <img src={exploreSide} alt="" className="w-[390px]" />
   </div>
   <div className="mt-10">
    <h1 className="font-semibold text-lg text-gray-800">Latest Recipes</h1>
   </div>
   <div className="mb-3">
    <hr />
   </div>
   <div className="mt-2">
    <div className="mt-5 w-full grid grid-cols-4 gap-3">
     {recipeData.map((recipe) => (
      <FoodCard
       key={recipe.id}
       id={recipe.id}
       title={recipe.title}
       img_path={recipe.img_path}
       category={recipe.category}
       author={recipe.author}
       description={recipe.description}
       difficulty={recipe.difficulty}
       time={recipe.time}
       ratings={recipe.ratings}
       ingredients={recipe.ingredients}
       instructions={recipe.instructions}
      />
     ))}
    </div>
   </div>
   <div className="mt-10">
    <h1 className="font-semibold text-lg text-gray-800">Recommended Recipes</h1>
   </div>

   <div className="mb-3">
    <hr />
   </div>
   <div className="mt-2">
    <div className="mt-5 w-full grid grid-cols-4 gap-3">
     {recipeData.map((recipe) => (
      <FoodCard
       key={recipe.id}
       id={recipe.id}
       title={recipe.title}
       img_path={recipe.img_path}
       category={recipe.category}
       author={recipe.author}
       description={recipe.description}
       difficulty={recipe.difficulty}
       time={recipe.time}
       ratings={recipe.ratings}
       ingredients={recipe.ingredients}
       instructions={recipe.instructions}
      />
     ))}
    </div>
   </div>
   <div className="mt-10">
    <h1 className="font-semibold text-lg text-gray-800">Popular Recipes</h1>
   </div>
   <div className="mb-3">
    <hr />
   </div>
   <div className="mt-2">
    <div className="mt-5 w-full grid grid-cols-4 gap-3">
     {recipeData.map((recipe) => (
      <FoodCard
       key={recipe.id}
       id={recipe.id}
       title={recipe.title}
       img_path={recipe.img_path}
       category={recipe.category}
       author={recipe.author}
       description={recipe.description}
       difficulty={recipe.difficulty}
       time={recipe.time}
       ratings={recipe.ratings}
       ingredients={recipe.ingredients}
       instructions={recipe.instructions}
      />
     ))}
    </div>
   </div>
  </Layout>
 );
};
