import { useEffect, useState } from "react";
import { Layout } from "../Layout";
import { getUserData } from "../../../../data/UserData";
import { FoodCard } from "../../../components/FoodCard/FoodCard.jsx";

export const FavoriteRecipes = () => {
 const [favorites, setFavorites] = useState([]);

 useEffect(() => {
  const userData = getUserData();
  setFavorites(userData.favorites);
 }, []);

 return (
  <Layout>
   <div>
    <h1 className="text-md text-gray-600 font-medium">Favorite Recipes</h1>
   </div>
   <div className="mt-2">
    <hr />
   </div>
   <div className="mt-4">
    {favorites.length > 0 ? (
     <FoodCard recipes={favorites} basePath={""} />
    ) : (
     <p className="text-gray-500">No favorite recipes found.</p>
    )}
   </div>
  </Layout>
 );
};
