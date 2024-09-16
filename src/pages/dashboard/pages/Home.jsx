import { FoodCard } from "../../../components/FoodCard/FoodCard";
import { Layout } from "../Layout";
import { recipeData } from "../../../../data/RecipeData";

export const Home = () => {
 return (
  <Layout>
   <div>
    <h1 className="font-bold text-xl">Explore New Recipes</h1>
    <p className="text-xs font-light text-gray-500">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas...
    </p>
   </div>
   <div className="mt-5">
    <h1 className="font-medium text-md">Latest Recipes</h1>
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
      />
     ))}
    </div>
   </div>
  </Layout>
 );
};
