import { Navbar } from "../../components/Navbar";
import { recipeData } from "../../../data/RecipeData";
import { FoodCard } from "../../components/FoodCard/FoodCard";

export const Recipes = () => {
 return (
  <>
   <Navbar />
   <div className="pt-20">
    <div className="mt-2 mx-32 pb-20">
    <h1>Recipes</h1>
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
   </div>
  </>
 );
};
