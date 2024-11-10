import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessResetPassword } from "../../components/Modals/SuccessResetPassword";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../../components/Navbar";

export const ResetPassword = () => {
 const [password, setPassword] = useState("");

 const [passwordStrength, setPasswordStrength] = useState({
  hasLength: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasSymbol: false,
 });
 const [showTooltip, setShowTooltip] = useState(false);

 const [passwordSuccess, setPasswordSuccess] = useState(false);
 const nav = useNavigate();

 const checkPasswordStrength = (pass) => {
  setPasswordStrength({
   hasLength: pass.length >= 8,
   hasUpperCase: /[A-Z]/.test(pass),
   hasLowerCase: /[a-z]/.test(pass),
   hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
  });
 };

 const handleChangePassword = async () => {
  // Simulate password change logic (e.g., API call)
  try {
   // Assume you have a function to change the password
   // await changePassword(newPassword);

   // Show success modal
   setPasswordSuccess(true);

   // Redirect to login page after 2 seconds
   setTimeout(() => {
    // setPasswordSuccess(false); // Optionally hide the modal
    // nav("/login"); // Redirect to login page
   }, 2000);
  } catch (error) {
   console.error("Error changing password:", error);
   // Handle error (e.g., show an error message)
  }
 };

 return (
  <>
   <Navbar />
   <div className="w-full h-screen bg-mainbg flex items-center justify-center">
    <div className="w-[500px] h-auto bg-white rounded-lg p-6">
     <h1 className="text-xl font-medium text-mainblue">Reset Password</h1>
     <p className="text-xs font-light">Enter a newly strong password</p>
     <div className="mt-5 space-y-2">
      <div className="flex flex-col gap-1 relative">
       <label htmlFor="password" className="text-xs font-medium text-gray-700">
        New Password
       </label>
       <input
        type="password"
        className="h-10 w-full px-4 font-medium text-xst text-gray-600 outline-none border rounded-md"
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
      <div className="flex flex-col gap-1">
       <label htmlFor="password" className="text-xs font-medium text-gray-700">
        Confirm Password
       </label>
       <input
        type="password"
        className="h-10 w-full px-4 font-medium text-xst text-gray-600 outline-none border rounded-md"
       />
      </div>
     </div>
     <div onClick={handleChangePassword} className="mt-5 w-full">
      <button className="h-10 w-full text-xs text-white font-medium bg-mainblue border rounded-md px-4">
       Reset Password
      </button>
     </div>
    </div>
   </div>

   {/* Success modal (conditional rendering) */}
   <AnimatePresence>
    {passwordSuccess && (
     <SuccessResetPassword setPasswordSuccess={setPasswordSuccess} />
    )}
   </AnimatePresence>
  </>
 );
};
