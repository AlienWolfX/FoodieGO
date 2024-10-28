import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { buildUrl } from "../../../utils/buildUrl";

import loginImg from "/public/auth-images/login.png";

export const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [cpass, setCpass] = useState("");

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

 return (
  <>
   <Navbar />
   <Toaster richColors position="top-center" />
   <div className="w-full h-screen bg-mainbg flex justify-between items-center">
    <div className=" h-full w-full">
     <img src={loginImg} alt="" className="w-full h-full" />
    </div>
    <div className="p-16">
     <div className="bg-white w-[400px]  h-auto p-8 rounded-md">
      <div className="text-2xl text-mainblue font-bold">Login Page</div>
      <div className="flex flex-col gap-4 pt-5">
       <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input
         type="email"
         placeholder="Enter your email"
         className="px-4 h-10 rounded text-xs border"
        />
       </div>
       <div className="flex flex-col">
        <label htmlFor="">Password</label>
        <input
         type="password"
         placeholder="Enter your password"
         className="px-4 h-10 rounded text-xs border"
        />
        <div className="flex justify-end mt-1">
         <p
          onClick={() => nav("/forgot-password")}
          className="font-light text-xs"
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
        Dont have an account yet? Create account here
       </p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
