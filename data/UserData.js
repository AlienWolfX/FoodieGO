import { recipeData } from "./RecipeData";

// UserData.js
let UserData = {
 favorites: [],
 likes: [],
 recipes: [],
};

export const getUserData = () => UserData;

export const addFavorite = (recipe) => {
 UserData.favorites.push(recipe);
};

export const removeFavorite = (recipeId) => {
 UserData.favorites = UserData.favorites.filter((fav) => fav.id !== recipeId);
};

export const likeRecipe = (recipe) => {
 UserData.likes.push(recipe);
};

export const unlikeRecipe = (recipeId) => {
 UserData.likes = UserData.likes.filter((liked) => liked.id !== recipeId);
};
