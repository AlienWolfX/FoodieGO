import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import LoadingBar from "react-top-loading-bar";

export const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

 const nav = useNavigate();

 const ref = useRef(null);

 const navCreateAccount = () => {
  nav("/signup");
 };

 const login = async (e) => {
  if (email == "" || password == "") {
   toast.error("Login credentials needed");
  } else {
   ref.current.staticStart(50);

   setTimeout(() => {
    ref.current.staticStart(70);
   }, 1500);

   setTimeout(() => {
    toast.success("Login Successful!");
    ref.current.complete();
    setTimeout(() => {
     nav("/home");
    }, 300);
   }, 3000);
  }
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
   <LoadingBar color="#f11946" ref={ref} />
   <Toaster richColors position="top-center" />
   <div className="w-full h-screen flex flex-col md:flex-row justify-between items-center">
    <div className="hidden md:flex md:w-1/2 h-full p-2">
     <div className="w-full h-full bg-mainblue rounded-lg"></div>
    </div>

    {isMobile ? (
     <div
      className="fixed inset-0 flex justify-center items-center z-20"
      style={{
       background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      }}
     >
      <div className="w-[90%] max-w-[400px] animate-fadeIn">
       <LoginFormContent
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        login={login}
        nav={nav}
        navCreateAccount={navCreateAccount}
        isMobile={isMobile}
       />
      </div>
     </div>
    ) : (
     <div className="h-screen w-full md:w-1/2 flex items-center justify-center">
      <div className="bg-white h-auto p-10 rounded-xl shadow-xl w-[90%] max-w-[400px] transition-all duration-300 hover:shadow-2xl">
       <LoginFormContent
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        login={login}
        nav={nav}
        navCreateAccount={navCreateAccount}
        isMobile={isMobile}
       />
      </div>
     </div>
    )}
   </div>
  </>
 );
};

const LoginFormContent = ({
 email,
 setEmail,
 password,
 setPassword,
 login,
 nav,
 navCreateAccount,
 isMobile,
}) => (
 <>
  <div className={`text-2xl ${isMobile ? 'text-white' : 'text-mainblue'} font-bold text-center mb-6`}>
   Welcome Back
  </div>
  <div className="flex flex-col gap-4 pt-2">
   <div className="flex flex-col gap-1.5">
    <label htmlFor="email" className={`text-sm font-medium ${isMobile ? 'text-gray-200' : 'text-gray-700'}`}>
     Email
    </label>
    <input
     type="email"
     placeholder="Enter your email"
     className={`px-4 h-10 rounded-lg text-sm border 
                    ${isMobile ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-300' : 'border-gray-300'} 
                    focus:ring-2 focus:ring-mainblue focus:border-mainblue
                    transition-all duration-200 outline-none`}
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    />
   </div>
   <div className="flex flex-col gap-1.5">
    <label htmlFor="password" className={`text-sm font-medium ${isMobile ? 'text-gray-200' : 'text-gray-700'}`}>
     Password
    </label>
    <input
     type="password"
     placeholder="Enter your password"
     className={`px-4 h-10 rounded-lg text-sm border 
                    ${isMobile ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-300' : 'border-gray-300'} 
                    focus:ring-2 focus:ring-mainblue focus:border-mainblue
                    transition-all duration-200 outline-none`}
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
    <div className="flex justify-end mt-1">
     <p
      onClick={() => nav("/forgot-password")}
      className={`text-xs ${isMobile ? 'text-gray-200' : 'text-gray-600'} hover:text-mainblue transition-colors duration-200 cursor-pointer`}
     >
      Forgot your password?
     </p>
    </div>
   </div>
  </div>
  <div className="mt-6 flex flex-col gap-3 items-center">
   <button
    onClick={login}
    className={`w-full h-10 rounded-lg font-medium text-sm
                  transform transition-all duration-200 
                  ${isMobile ? 'bg-white text-mainblue hover:bg-white/90' : 'bg-mainblue text-white hover:bg-mainblue/90'}
                  hover:shadow-lg active:scale-95`}
   >
    Sign In
   </button>
   <p
    onClick={navCreateAccount}
    className={`text-xs ${isMobile ? 'text-gray-200' : 'text-gray-600'} hover:text-mainblue transition-colors duration-200 cursor-pointer`}
   >
    Don't have an account yet?{" "}
    <span className="font-medium text-sm">Create account</span>
   </p>
  </div>
 </>
);
