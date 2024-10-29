import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mainLogo from "/public/mainLogo.png";

export const Navbar = () => {
 const nav = useNavigate();
 const [activeItem, setActiveItem] = useState("home");

 const navLogin = () => {
  nav("/login");
 };

 const navHome = () => {
  window.location.hash = "hero";
 };

 const navExplore = () => {
  window.location.hash = "explore";
 };

 const navAboutUs = () => {
  window.location.hash = "about";
 };

 const navContact = () => {
  window.location.hash = "contact";
 };

 useEffect(() => {
  const handleScroll = () => {
   const sections = ["hero", "explore", "about", "contact"];
   const scrollPosition = window.scrollY;

   sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
     const { offsetTop, clientHeight } = element;
     if (scrollPosition >= offsetTop && scrollPosition < offsetTop + clientHeight) {
      setActiveItem(section);
     }
    }
   });
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 return (
  <>
   <div className="fixed w-full border bg-white z-50">
    <div className="mx-32 flex items-center justify-between my-2">
     <div>
      <img src={mainLogo} onClick={navHome} alt="" className="w-[50px]" />
     </div>
     <div className="flex items-center gap-20">
      <div>
       <ul className="flex items-center gap-5">
        <li
         onClick={navHome}
         className={`text-sm font-medium cursor-pointer ${activeItem === "hero" ? "text-mainblue" : "text-gray-600"} hover:text-mainblue`}
        >
         Home
        </li>
        <li
         onClick={navAboutUs}
         className={`text-sm font-medium cursor-pointer ${activeItem === "about" ? "text-mainblue" : "text-gray-600"} hover:text-mainblue`}
        >
         About
        </li>
        <li
         onClick={navExplore}
         className={`text-sm font-medium cursor-pointer ${activeItem === "explore" ? "text-mainblue" : "text-gray-600"} hover:text-mainblue`}
        >
         Explore
        </li>
        <li
         onClick={navContact}
         className={`text-sm font-medium cursor-pointer ${activeItem === "contact" ? "text-mainblue" : "text-gray-600"} hover:text-mainblue`}
        >
         Contact Us
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
