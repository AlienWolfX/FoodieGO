import { useNavigate } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const SuccessResetPassword = ({ setPasswordSuccess }) => {
 const nav = useNavigate();

 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20">
    <motion.div
     initial={{ opacity: 0, y: 800 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 800 }}
     transition={{ duration: 0.6 }}
     className="w-[270px] h-auto bg-white rounded-lg p-6 flex flex-col"
    >
     <div className="flex items-end justify-end">
      <IoCloseOutline
       onClick={() => setPasswordSuccess(false)}
       size={20}
       className="text-gray-500 cursor-pointer hover:text-red-500"
      />
     </div>
     <div className="flex flex-col gap-5 mb-5 items-center justify-center">
      <div className="w-[70px] h-[70px] bg-green-500 rounded-full flex items-center justify-center">
       <IoCheckmarkOutline size={60} className="text-white" />
      </div>
      <p className="text-xs font-medium text-gray-600">
       Reset Password Success!
      </p>
     </div>
     <div className="flex w-full mt-auto">
      <button
       onClick={() => nav("/login")}
       className="w-full h-10 rounded-md text-xs bg-green-500 text-white"
      >
       login
      </button>
     </div>
    </motion.div>
   </div>
  </>
 );
};
