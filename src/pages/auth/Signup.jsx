import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const Signup = () => {
 const nav = useNavigate();

 const navLogin = () => {
  nav("/login");
 };

 return (
  <>
   <Navbar />
   <div className="h-screen flex items-center justify-center">
    <div className="bg-gray-100 w-[400px] h-auto p-5 rounded">
     <div className="text-2xl font-bold">Signup Page</div>
     <div className="flex flex-col gap-4 pt-5">
      <div className="flex flex-col">
       <label htmlFor="">Username</label>
       <input
        type="email"
        placeholder="Enter your email"
        className="px-4 h-10 rounded text-xs"
       />
      </div>
      <div className="flex flex-col">
       <label htmlFor="">Email</label>
       <input
        type="email"
        placeholder="Enter your email"
        className="px-4 h-10 rounded text-xs"
       />
      </div>
      <div className="flex flex-col">
       <label htmlFor="">Password</label>
       <input
        type="password"
        placeholder="Enter your password"
        className="px-4 h-10 rounded text-xs"
       />
      </div>
      <div className="flex flex-col">
       <label htmlFor="">Confirm Password</label>
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
  </>
 );
};
