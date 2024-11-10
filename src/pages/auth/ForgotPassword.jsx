import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
 const nav = useNavigate();
 return (
  <>
   <div className="w-full h-screen bg-mainbg flex items-center justify-center">
    <div className="w-[600px] h-auto bg-white rounded-lg p-6">
     <h1 className="text-xl font-medium text-mainblue">Forgot Password?</h1>
     <p className="text-xs font-light">
      No worries we got you covered! As long as you have access to your email
      account you can retrieve it.
     </p>
     <div className="mt-5 flex flex-col gap-1">
      <label htmlFor="" className="text-xs font-medium">
       Email
      </label>
      <input
       type="email"
       className="text-xs px-4 h-10 rounded-md border outline-none"
      />
     </div>
     <div className="mt-5 flex justify-end">
      <button
       onClick={() => nav("/forgot-password/one-time-password")}
       className="h-10 px-4 rounded-md bg-mainblue text-white text-xs font-medium"
      >
       Send OTP
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
