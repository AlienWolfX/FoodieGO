import { useNavigate } from "react-router-dom";

export const Navbar = () => {
 const nav = useNavigate();

 const navLogin = () => {
  nav("/login");
 };

 const navHome = () => {
  nav("/");
 };

 const navExplore = () => {
  nav("/recipes");
 };

 const navAboutUs = () => {
  nav("/about");
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
        <li onClick={navHome} className="text-sm font-medium  text-gray-600 cursor-pointer hover:text-mainblue">
         Home
        </li>
        <li onClick={navAboutUs} className="text-sm font-medium  text-gray-600 cursor-pointer hover:text-mainblue">
         About US
        </li>
        <li onClick={navExplore} className="text-sm font-medium  text-gray-600 cursor-pointer hover:text-mainblue">
         Explore
        </li>
       </ul>
      </div>
      <button
       onClick={navLogin}
       className="h-8 px-4 text-xs font-semibold bg-mainblue rounded text-white"
      >
       Login
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
