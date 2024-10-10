import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import registerImg from "/public/auth-images/register.png"


export const Signup = () => {
 const nav = useNavigate();

 const navLogin = () => {
  nav("/login");
 };

 return (
  <>
   <Navbar />
   <div className="w-full h-screen flex justify-between items-center">
    <div className="w-full h-full">
     <img src={registerImg} alt="" className="w-full h-screen"/>
    </div>
    <div className="p-16">
    <div className="bg-gray-100 w-[500px] h-auto p-5 rounded"> 
     <div className="text-2xl font-bold">Signup Page</div>
     <div className="flex flex-col gap-4 pt-5">
      <div className="flex flex-col">
       <label htmlFor="" className="text-xs text-gray-600">Username</label>
       <input
        type="email"
        placeholder="Enter your email"
        className="px-4 h-10 rounded text-xs"
       />
      </div>
      <div className="flex flex-col">
       <label htmlFor="" className="text-xs text-gray-600">Email</label>
       <input
        type="email"
        placeholder="Enter your email"
        className="px-4 h-10 rounded text-xs"
       />
      </div>
      <div>
      <div className="flex flex-col">
       <label htmlFor="" className="text-xs text-gray-600">Password</label>
       <input
        type="password"
        placeholder="Enter your password"
        className="px-4 h-10 rounded text-xs"
       />
      </div>
      <div>
       <p className="font-light text-gray-400 text-xs">*Password must contain 8 characters, one capital letter, one lower case letter and one symbol</p>
      </div></div>
      <div className="flex flex-col">
       <label htmlFor="" className="text-xs text-gray-600">Confirm Password</label>
       <input
        type="password"
        placeholder="Enter your password"
        className="px-4 h-10 rounded text-xs"
       />
       <p className="font-light text-xs pt-3">Forgot your password?</p>
      </div>
     </div>
     <div className="mt-10 flex flex-col gap-3 items-center">
      <button className="w-full bg-gray-500 h-10 text-white rounded">
       Create Account
      </button>
      <p onClick={navLogin} className="text-xs font-light cursor-pointer">
       Already have an account yet? Login account here
      </p>
     </div>
    </div>
    </div>
   </div>
  </>
 );
};
