import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { buildUrl } from "../../../utils/buildUrl";

import loginImg from "/auth-images/login.png";

export const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

 const nav = useNavigate();

 const navCreateAccount = () => {
  nav("/signup");
 };

 const login = async (e) => {
  nav("/home");
  // e.preventDefault();
  // if (password === cpass) {
  //  try {
  //   let res = await fetch(buildUrl("/login"), {
  //    method: "POST",
  //    headers: {
  //     "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify({
  //     email: email,
  //     password: password,
  //    }),
  //   });
  //  } catch (err) {
  //   console.log(err);
  //  }
  // } else {
  //  toast.error("Password does not match");
  // }
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
   <Toaster richColors position="top-center" />
   <div className="w-full h-screen bg-mainbg flex flex-col md:flex-row justify-between items-center">
    <div className="hidden md:block h-full w-full md:w-1/2">
     <img src={loginImg} alt="Login" className="w-full h-full object-cover" />
    </div>
    <div
     className={`h-full w-full md:w-1/2 flex items-center justify-center ${
      !isMobile ? `bg-cover bg-center` : ""
     }`}
     style={isMobile ? { backgroundImage: `url(${loginImg})` } : {}}
    >
     <div className="p-5 md:p-10">
      <div className="bg-white w-full lg:w-[450px] h-auto p-8 mt-5 rounded-md shadow-md">
       <div className="text-2xl text-mainblue font-bold text-center">
        Login Page
       </div>
       <div className="flex flex-col gap-4 pt-5">
        <div className="flex flex-col">
         <label htmlFor="email" className="text-sm font-medium">
          Email
         </label>
         <input
          type="email"
          placeholder="Enter your email"
          className="px-4 h-10 rounded text-xs border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         />
        </div>
        <div className="flex flex-col">
         <label htmlFor="password" className="text-sm font-medium">
          Password
         </label>
         <input
          type="password"
          placeholder="Enter your password"
          className="px-4 h-10 rounded text-xs border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         />
         <div className="flex justify-end mt-1">
          <p
           onClick={() => nav("/forgot-password")}
           className="font-light text-xs cursor-pointer"
          >
           Forgot your password?
          </p>
         </div>
        </div>
       </div>
       <div className="mt-10 flex flex-col gap-3 items-center">
        <button
         onClick={login}
         className="w-full bg-mainblue h-10 text-white rounded"
        >
         Login
        </button>
        <p
         onClick={navCreateAccount}
         className="text-xs font-light cursor-pointer"
        >
         Don't have an account yet? Create account here
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
