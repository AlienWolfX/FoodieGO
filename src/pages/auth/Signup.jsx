import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import registerImg from "/auth-images/register.png";

export const Signup = () => {
 const nav = useNavigate();
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

 const navLogin = () => {
  nav("/login");
 };

 const handleResize = () => {
  setIsMobile(window.innerWidth < 768);
 };

 useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

 return (
  <>
   <Navbar />
   <div className="w-full h-screen bg-mainbg flex flex-col md:flex-row justify-between items-center">
    <div className="hidden md:block h-full w-full md:w-1/2">
     <img
      src={registerImg}
      alt="Register"
      className="w-full h-full object-cover"
     />
    </div>
    <div
     className={`h-full w-full md:w-1/2 flex items-center justify-center ${
      !isMobile ? `bg-cover bg-center` : ""
     }`}
     style={isMobile ? { backgroundImage: `url(${registerImg})` } : {}}
    >
     <div className="p-5 md:p-10">
      <div className="bg-white w-full lg:w-[450px] h-auto p-8 mt-5 rounded-md shadow-md">
       <div className="text-2xl text-mainblue font-bold text-center">
        Signup Page
       </div>
       <div className="flex flex-col gap-4 pt-5">
        <div className="flex flex-col">
         <label htmlFor="username" className="text-xs text-gray-600">
          Username
         </label>
         <input
          type="text"
          placeholder="Enter your username"
          className="px-4 h-10 rounded text-xs border"
         />
        </div>
        <div className="flex flex-col">
         <label htmlFor="email" className="text-xs text-gray-600">
          Email
         </label>
         <input
          type="email"
          placeholder="Enter your email"
          className="px-4 h-10 rounded text-xs border"
         />
        </div>
        <div className="flex flex-col">
         <label htmlFor="password" className="text-xs text-gray-600">
          Password
         </label>
         <input
          type="password"
          placeholder="Enter your password"
          className="px-4 h-10 rounded text-xs border"
         />
         <p className="font-light text-gray-400 text-xs">
          *Password must contain 8 characters, one capital letter, one lower
          case letter, and one symbol
         </p>
        </div>
        <div className="flex flex-col">
         <label htmlFor="confirm-password" className="text-xs text-gray-600">
          Confirm Password
         </label>
         <input
          type="password"
          placeholder="Confirm your password"
          className="px-4 h-10 rounded text-xs border"
         />
        </div>
       </div>
       <div className="mt-10 flex flex-col gap-1">
        <div className="flex items-start">
         <p
          onClick={navLogin}
          className="text-xs text-gray-500 font-light cursor-pointer"
         >
          Already have an account? Login here
         </p>
        </div>
        <button
         onClick={() => nav("/preferences")}
         className="w-full bg-mainblue h-10 text-white rounded"
        >
         Create Account
        </button>
        <div className="flex items-center justify-center gap-2 mt-2">
         <input type="checkbox" />
         <label
          onClick={() => nav("/terms-conditions")}
          htmlFor=""
          className="text-xs font-light text-gray-400"
         >
          I agree to the{" "}
          <span className="underline cursor-pointer text-main">
           terms and conditions
          </span>{" "}
          of FoodieGo
         </label>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
