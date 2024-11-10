import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const OneTimePassword = () => {
 const nav = useNavigate();
 const [otp, setOtp] = useState(new Array(6).fill(""));
 const inputRefs = useRef(new Array(6).fill(null));

 const handleInputChange = (index, value) => {
  if (/^[0-9]?$/.test(value)) {
   const newOtp = [...otp];
   newOtp[index] = value;
   setOtp(newOtp);

   // Move focus to the next input field
   if (value && index < inputRefs.current.length - 1) {
    inputRefs.current[index + 1].focus();
   }

   // Move focus to the previous input field if backspace is pressed
   if (!value && index > 0) {
    inputRefs.current[index - 1].focus();
   }
  }
 };

 return (
  <><Navbar/>
   <div className="w-full h-screen bg-mainbg flex items-center justify-center">
    <div className="w-[500px] h-auto bg-white rounded-lg p-6">
     <h1 className="text-xl font-medium text-mainblue">One Time Password</h1>
     <p className="text-xs font-light">
      We have sent a one-time-password to your email account, please look at
      your inbox and do not share it with others.
     </p>
     <div className="mt-5 flex flex-col gap-1">
      <div className="grid grid-flow-col">
       {otp.map((value, index) => (
        <input
         key={index}
         type="text"
         className="h-16 w-16 rounded bg-white text-lg outline-primaryColor border border-primaryColor text-center outline-mainblue"
         value={value}
         onChange={(e) => handleInputChange(index, e.target.value)}
         ref={(el) => (inputRefs.current[index] = el)}
         inputMode="numeric"
         maxLength="1"
        />
       ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
       <p
        onClick={() => nav("/login")}
        className="font-light text-gray-400 text-xs cursor-pointer"
       >
        back to login
       </p>
       <button
        onClick={() => nav("/reset-password")}
        className="h-10 bg-mainblue rounded text-white text-xs font-medium px-4"
       >
        submit
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
