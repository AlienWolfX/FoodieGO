import { useNavigate } from "react-router-dom";

export const Navbar = () => {
 const nav = useNavigate();

 const navLogin = () => {
  nav("/login");
 };

 const navHome = () => {
  nav("/");
 };

 const navRecipes = () => {
  nav("/recipes");
 };

 const navFavorites = () => {
  nav("/favorites");
 };

 return (
  <>
   <div className="fixed w-full border bg-white z-50">
    <div className="mx-32 flex items-center justify-between my-2">
     <div>
      <h1 onClick={navHome} className="font-bold text-2xl cursor-pointer">
       FoodieGO
      </h1>
     </div>
     <div className="flex items-center gap-20">
      <div>
       <ul className="flex items-center gap-5">
        <li onClick={navHome} className="cursor-pointer hover:text-mainblue">
         Home
        </li>
        <li onClick={navRecipes} className="cursor-pointer hover:text-mainblue">
         Recipes
        </li>
        <li
         onClick={navFavorites}
         className="cursor-pointer hover:text-mainblue"
        >
         Favorites
        </li>
       </ul>
      </div>
      <button
       onClick={navLogin}
       className="h-10 px-4 text-sm font-medium bg-mainblue rounded text-white"
      >
       Login
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
