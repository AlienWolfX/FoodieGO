import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { toast, Toaster } from "sonner";

export const Signup = () => {
 const nav = useNavigate();
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [isChecked, setIsChecked] = useState(false);
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
  if (!isChecked) {
   toast.error("Please agree to the terms and conditions");
  } else if (password !== confirmPassword) {
   toast.error("Passwords do not match!");
  } else if (
   email === "" ||
   username === "" ||
   password === "" ||
   confirmPassword === ""
  ) {
   toast.error("All fields are required!");
  } else {
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
  }
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
   <Toaster richColors position="top-center"/>
   <div className="w-full h-screen flex flex-col md:flex-row justify-between items-center">
    <div className="hidden md:flex md:w-1/2 h-full p-2">
     <div className="w-full h-full bg-mainblue rounded-lg"></div>
    </div>

    {isMobile ? (
     <div
      className="fixed inset-0 flex justify-center items-center z-20"
      style={{
       background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      }}
     >
      <div className="w-[90%] max-w-[400px] animate-fadeIn">
       <SignupFormContent
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        checkPasswordStrength={checkPasswordStrength}
        passwordStrength={passwordStrength}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
        register={register}
        nav={nav}
        navLogin={navLogin}
        isMobile={isMobile}
       />
      </div>
     </div>
    ) : (
     <div className="h-screen w-full md:w-1/2 flex items-center justify-center">
      <div className="bg-white h-auto p-10 rounded-xl shadow-xl w-[90%] max-w-[400px] transition-all duration-300 hover:shadow-2xl">
       <SignupFormContent
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        checkPasswordStrength={checkPasswordStrength}
        passwordStrength={passwordStrength}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
        register={register}
        nav={nav}
        navLogin={navLogin}
        isMobile={isMobile}
       />
      </div>
     </div>
    )}
   </div>
  </>
 );
};

const SignupFormContent = ({
 username,
 setUsername,
 email,
 setEmail,
 password,
 setPassword,
 confirmPassword,
 setConfirmPassword,
 isChecked,
 setIsChecked,
 checkPasswordStrength,
 passwordStrength,
 showTooltip,
 setShowTooltip,
 register,
 nav,
 navLogin,
 isMobile,
}) => (
 <>
  <div
   className={`text-2xl ${
    isMobile ? "text-white" : "text-mainblue"
   } font-bold text-center mb-6`}
  >
   Create Account
  </div>
  <div className="flex flex-col gap-4 pt-2">
   <div className="flex flex-col gap-1.5">
    <label
     htmlFor="username"
     className={`text-sm font-medium ${
      isMobile ? "text-gray-200" : "text-gray-700"
     }`}
    >
     Username
    </label>
    <input
     type="text"
     id="username"
     placeholder="Enter your username"
     value={username}
     onChange={(e) => setUsername(e.target.value)}
     className={`px-4 h-10 rounded-lg text-sm border 
                    ${
                     isMobile
                      ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      : "border-gray-300"
                    } 
                    focus:ring-2 focus:ring-mainblue focus:border-mainblue
                    transition-all duration-200 outline-none`}
    />
   </div>

   <div className="flex flex-col gap-1.5">
    <label
     htmlFor="email"
     className={`text-sm font-medium ${
      isMobile ? "text-gray-200" : "text-gray-700"
     }`}
    >
     Email
    </label>
    <input
     type="email"
     id="email"
     placeholder="Enter your email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className={`px-4 h-10 rounded-lg text-sm border 
                    ${
                     isMobile
                      ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      : "border-gray-300"
                    } 
                    focus:ring-2 focus:ring-mainblue focus:border-mainblue
                    transition-all duration-200 outline-none`}
    />
   </div>

   <div className="flex flex-col gap-1.5 relative">
    <label
     htmlFor="password"
     className={`text-sm font-medium ${
      isMobile ? "text-gray-200" : "text-gray-700"
     }`}
    >
     Password
    </label>
    <input
     type="password"
     placeholder="Enter your password"
     value={password}
     onChange={(e) => {
      setPassword(e.target.value);
      checkPasswordStrength(e.target.value);
     }}
     onFocus={() => setShowTooltip(true)}
     onBlur={() => setShowTooltip(false)}
     className={`px-4 h-10 rounded-lg text-sm border 
                    ${
                     isMobile
                      ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      : "border-gray-300"
                    } 
                    focus:ring-2 focus:ring-mainblue focus:border-mainblue
                    transition-all duration-200 outline-none`}
    />
    {showTooltip && (
     <div className="absolute right-0 mt-12 bg-white border rounded-lg shadow-lg p-3 z-10">
      <div className="space-y-1.5">
       {Object.entries({
        hasLength: "At least 8 characters",
        hasUpperCase: "At least one capital letter",
        hasLowerCase: "At least one lowercase letter",
        hasSymbol: "At least one symbol",
       }).map(([key, text]) => (
        <p
         key={key}
         className={`text-xs flex items-center gap-2 ${
          passwordStrength[key] ? "text-green-500" : "text-gray-400"
         }`}
        >
         <span className="text-base">{passwordStrength[key] ? "✓" : "○"}</span>
         {text}
        </p>
       ))}
      </div>
     </div>
    )}
   </div>

   <div className="flex flex-col gap-1.5">
    <label
     htmlFor="confirm-password"
     className={`text-sm font-medium ${
      isMobile ? "text-gray-200" : "text-gray-700"
     }`}
    >
     Confirm Password
    </label>
    <input
     type="password"
     placeholder="Confirm your password"
     value={confirmPassword}
     onChange={(e) => setConfirmPassword(e.target.value)}
     className={`px-4 h-10 rounded-lg text-sm border 
                    ${
                     isMobile
                      ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      : "border-gray-300"
                    } 
                    focus:ring-2 focus:ring-mainblue focus:border-mainblue
                    transition-all duration-200 outline-none
                    ${password && confirmPassword && password !== confirmPassword 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : ''
                    }`}
    />
    {password && confirmPassword && password !== confirmPassword && (
     <p className={`text-xs mt-1 ${isMobile ? "text-red-300" : "text-red-500"}`}>
      Passwords do not match
     </p>
    )}
   </div>
  </div>

  <div className="mt-6 flex flex-col gap-3 items-center">
   <div className="flex items-center gap-2 w-full">
    <input
     type="checkbox"
     checked={isChecked}
     onChange={(e) => setIsChecked(e.target.checked)}
     className="w-3.5 h-3.5 text-mainblue border-gray-300 rounded 
                    focus:ring-mainblue"
    />
    <label
     className={`text-xs ${isMobile ? "text-gray-200" : "text-gray-600"}`}
    >
     I agree to the{" "}
     <span
      onClick={() => nav("/terms-conditions")}
      className="text-mainblue underline cursor-pointer"
     >
      terms and conditions
     </span>
    </label>
   </div>

   <button
    onClick={register}
    className={`w-full h-10 rounded-lg font-medium
                  transform transition-all duration-200 
                  ${
                   isMobile
                    ? "bg-white text-mainblue text-sm hover:bg-white/90"
                    : "bg-mainblue text-white hover:bg-mainblue/90"
                  }
                  hover:shadow-lg active:scale-95`}
   >
    Create Account
   </button>

   <p
    onClick={navLogin}
    className={`text-xs ${
     isMobile ? "text-gray-200" : "text-gray-600"
    } hover:text-mainblue transition-colors duration-200 cursor-pointer`}
   >
    Already have an account? <span className="font-medium">Sign in</span>
   </p>
  </div>
 </>
);
