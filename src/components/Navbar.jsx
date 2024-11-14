import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mainLogo from "/mainLogo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

export const Navbar = () => {
 const nav = useNavigate();
 const [activeItem, setActiveItem] = useState("hero");
 const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

 const navLogin = () => {
  nav("/login");
 };

 const navHome = () => {
  const section = document.getElementById("hero");
  if (section) {
   window.location.hash = "hero";
  } else {
   nav("/"); // Navigate to home if section not found
  }
 };

 const navExplore = () => {
  const section = document.getElementById("explore");
  if (section) {
   window.location.hash = "explore";
  } else {
   nav("/"); // Navigate to home if section not found
  }
 };

 const navAboutUs = () => {
  const section = document.getElementById("about");
  if (section) {
   window.location.hash = "about";
  } else {
   nav("/"); // Navigate to home if section not found
  }
 };

 const navContact = () => {
  const section = document.getElementById("contact");
  if (section) {
   window.location.hash = "contact";
  } else {
   nav("/"); // Navigate to home if section not found
  }
 };

 useEffect(() => {
  const handleScroll = () => {
   const sections = ["hero", "explore", "about", "contact"];
   const scrollPosition = window.scrollY;

   sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
     const { offsetTop, clientHeight } = element;
     if (
      scrollPosition >= offsetTop &&
      scrollPosition < offsetTop + clientHeight
     ) {
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
   <div className="fixed w-full border bg-white z-20 flex justify-between items-center px-5">
    <div>
     <img src={mainLogo} onClick={navHome} alt="" className="w-[50px]" />
    </div>
    <div className="md:hidden">
     <FaBars onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />{" "}
     {/* Hamburger icon */}
    </div>
    <div className="hidden md:flex items-center gap-20">
     {" "}
     {/* Navbar for medium and larger screens */}
     <ul className="flex items-center gap-5">
      <li
       onClick={navHome}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "hero" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       Home
      </li>
      <li
       onClick={navAboutUs}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "about" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       About
      </li>
      <li
       onClick={navExplore}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "explore" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       Explore
      </li>
      <li
       onClick={navContact}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "contact" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       Contact Us
      </li>
     </ul>
     <button
      onClick={navLogin}
      className="h-8 px-4 text-xs font-semibold bg-mainblue rounded text-white"
     >
      Login
     </button>
    </div>
   </div>
   {isOpen && ( // Conditional rendering of the sidebar for small screens
    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-5">
     <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">Menu</h2>
      <FaTimes
       onClick={() => setIsOpen(false)}
       className="cursor-pointer"
      />{" "}
      {/* Close icon */}
     </div>
     <ul className="flex flex-col items-start gap-5">
      <li
       onClick={navHome}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "hero" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       Home
      </li>
      <li
       onClick={navAboutUs}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "about" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       About
      </li>
      <li
       onClick={navExplore}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "explore" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       Explore
      </li>
      <li
       onClick={navContact}
       className={`text-sm font-medium cursor-pointer ${
        activeItem === "contact" ? "text-mainblue" : "text-gray-600"
       } hover:text-mainblue`}
      >
       Contact Us
      </li>
     </ul>
     <button
      onClick={navLogin}
      className="mt-5 h-8 px-4 text-xs font-semibold bg-mainblue rounded text-white"
     >
      Login
     </button>
    </div>
   )}
  </>
 );
};
