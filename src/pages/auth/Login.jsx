import { useNavigate } from "react-router-dom";

export const Login = () => {
 const nav = useNavigate();

 const navCreateAccount = () => {
  nav("/signup");
 };

 return (
  <>
   <div className="h-screen flex items-center justify-center">
    <div className="bg-gray-100 w-[400px] h-auto p-5 rounded">
     <div className="text-2xl font-bold">Login Page</div>
     <div className="flex flex-col gap-4 pt-5">
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
       <p className="font-light text-xs pt-3">Forgot your password?</p>
      </div>
     </div>
     <div className="mt-10 flex flex-col gap-3 items-center">
      <button className="w-full bg-gray-500 h-10 text-white rounded">
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
  </>
 );
};
