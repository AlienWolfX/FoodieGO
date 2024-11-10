import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import registerImg from "/auth-images/register.png";
import LoadingBar from "react-top-loading-bar";

export const Signup = () => {
 const nav = useNavigate();
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 const [password, setPassword] = useState("");
 const [passwordStrength, setPasswordStrength] = useState({
  hasLength: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasSymbol: false,
 });
 const [showTooltip, setShowTooltip] = useState(false);

 const checkPasswordStrength = (pass) => {
  setPasswordStrength({
   hasLength: pass.length >= 8,
   hasUpperCase: /[A-Z]/.test(pass),
   hasLowerCase: /[a-z]/.test(pass),
   hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
  });
 };

 const ref = useRef(null);

 const navLogin = () => {
  nav("/login");
 };

 const handleResize = () => {
  setIsMobile(window.innerWidth < 768);
 };

 const register = async (e) => {
  ref.current.staticStart(50);

  setTimeout(() => {
   ref.current.staticStart(70);
  }, 1500);

  setTimeout(() => {
   ref.current.complete();
   setTimeout(() => {
    nav("/preferences");
   }, 300);
  }, 3000);
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
   <LoadingBar color="#f11946" ref={ref} />
   <div className="w-full h-screen bg-mainbg flex flex-col md:flex-row justify-between items-center">
    <div className="hidden md:block h-full w-full md:w-1/2">
     <img
      src={registerImg}
      alt="Register"
      className="w-full h-full object-cover"
     />
    </div>

    {isMobile ? (
     <div
      className="fixed inset-0 flex justify-center items-center z-20"
      style={{
       backgroundImage: `linear-gradient(rgba(107, 114, 128, 0.75), rgba(107, 114, 128, 0.75)), url(${registerImg})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
      }}
     >
      <div className="bg-white w-[90%] max-w-[400px] h-auto p-8 rounded-md shadow-md">
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
        <div className="flex flex-col relative">
         <label htmlFor="password" className="text-xs text-gray-600">
          Password
         </label>
         <input
          type="password"
          placeholder="Enter your password"
          className="px-4 h-10 rounded text-xs border"
          value={password}
          onChange={(e) => {
           setPassword(e.target.value);
           checkPasswordStrength(e.target.value);
          }}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
         />
         {showTooltip && (
          <div className="absolute right-0 mt-12 bg-white border rounded-md shadow-lg p-3 z-10">
           <div className="space-y-1">
            <p
             className={`text-xs ${
              passwordStrength.hasLength ? "text-green-500" : "text-gray-400"
             }`}
            >
             ✓ At least 8 characters
            </p>
            <p
             className={`text-xs ${
              passwordStrength.hasUpperCase ? "text-green-500" : "text-gray-400"
             }`}
            >
             ✓ At least one capital letter
            </p>
            <p
             className={`text-xs ${
              passwordStrength.hasLowerCase ? "text-green-500" : "text-gray-400"
             }`}
            >
             ✓ At least one lowercase letter
            </p>
            <p
             className={`text-xs ${
              passwordStrength.hasSymbol ? "text-green-500" : "text-gray-400"
             }`}
            >
             ✓ At least one symbol
            </p>
           </div>
          </div>
         )}
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
         onClick={register}
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
    ) : (
     <div className="h-full w-full md:w-1/2 flex items-center justify-center">
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
         <div className="flex flex-col relative">
          <label htmlFor="password" className="text-xs text-gray-600">
           Password
          </label>
          <input
           type="password"
           placeholder="Enter your password"
           className="px-4 h-10 rounded text-xs border"
           value={password}
           onChange={(e) => {
            setPassword(e.target.value);
            checkPasswordStrength(e.target.value);
           }}
           onFocus={() => setShowTooltip(true)}
           onBlur={() => setShowTooltip(false)}
          />
          {showTooltip && (
           <div className="absolute right-0 mt-12 bg-white border rounded-md shadow-lg p-3 z-10">
            <div className="space-y-1">
             <p
              className={`text-xs ${
               passwordStrength.hasLength ? "text-green-500" : "text-gray-400"
              }`}
             >
              ✓ At least 8 characters
             </p>
             <p
              className={`text-xs ${
               passwordStrength.hasUpperCase
                ? "text-green-500"
                : "text-gray-400"
              }`}
             >
              ✓ At least one capital letter
             </p>
             <p
              className={`text-xs ${
               passwordStrength.hasLowerCase
                ? "text-green-500"
                : "text-gray-400"
              }`}
             >
              ✓ At least one lowercase letter
             </p>
             <p
              className={`text-xs ${
               passwordStrength.hasSymbol ? "text-green-500" : "text-gray-400"
              }`}
             >
              ✓ At least one symbol
             </p>
            </div>
           </div>
          )}
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
          onClick={register}
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
    )}
   </div>
  </>
 );
};
