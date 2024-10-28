import { FoodCard } from "../../components/FoodCard/FoodCard";
import { recipeData } from "../../../data/RecipeData";
import { useNavigate } from "react-router-dom";

export const Explore = () => {
 const nav = useNavigate();

 return (
  <>
   <div className="mx-32 h-screen flex items-center justify-center">
    <div>
     <div>
      <h1 className="text-3xl font-bold text-[#121212]">Explore New Recipes</h1>
      <p className="mt-2 text-gray-600">
       Discover a variety of delicious recipes from around the world. Whether you're looking for quick meals, healthy options, or indulgent treats, we have something for everyone!
      </p>
     </div>
     <div className="mt-5 w-full grid grid-cols-4 gap-3">
      {recipeData.slice(0, 8).map((recipe) => (
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
     <div className="flex items-center justify-center mt-5">
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
