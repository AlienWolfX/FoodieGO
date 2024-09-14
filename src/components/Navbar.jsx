import { useNavigate } from "react-router-dom";

export const Navbar = () => {
 const nav = useNavigate();
 const navLogin = () => {
  nav("/login");
 };

 const navHome = () => {
  nav("/");
 };

 return (
  <>
   <div className="fixed w-full border bg-white">
    <div className="mx-32 flex items-center justify-between my-2">
     <div>
      <h1 onClick={navHome} className="font-bold text-2xl cursor-pointer">
       FoodieGO
      </h1>
     </div>
     <div className="flex items-center gap-20">
      <div>
       <ul className="flex items-center gap-5">
        <li>Home</li>
        <li>Recipes</li>
        <li>Favorites</li>
       </ul>
      </div>
      <button
       onClick={navLogin}
       className="h-10 px-4 text-sm font-medium bg-gray-300 rounded text-gray-700"
      >
       Login
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
