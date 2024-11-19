import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export const ReportRecipe = ({ setOpenReport, reportedRecipe }) => {
 const reason = [
  "Inappropriate",
  "Copyrigth",
  "Fake Recipe",
  "Misleading",
  "Misinformation",
 ];

 const [openSubmitReport, setOpenSubmitReport] = useState(false);

 return (
  <>
   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-2 z-50">
    <motion.div
     initial={{ opacity: 0, y: 800 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 800 }}
     transition={{ duration: 0.6 }}
     className="bg-white rounded-xl border border-gray-200 p-4 w-[400px]"
    >
     <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold text-gray-600">Report Recipe</h1>
      <IoCloseCircleSharp onClick={() => setOpenReport(false)} className="text-gray-600"/>
     </div>
     <div className="mb-5">
      <hr />
     </div>
     <div className="p-2 border border-blue-400 rounded-md mb-5">
      <div className="flex flex-col">
       <h1 className="text-sm text-gray-500 font-medium">
        Title: {reportedRecipe.title}
       </h1>
       <h1 className="text-sm text-gray-500 font-medium">
        Author: {reportedRecipe.author}
       </h1>
      </div>
      <div className="mt-2">
       <img
        src={reportedRecipe.img_path}
        alt=""
        className="w-full h-[150px] rounded-md"
       />
      </div>
     </div>
     <p className="text-xs font-light text-gray-600">
      Report this recipe? kindly add your valid reason to for the request to be
      approved.
     </p>
     <div className="mt-5">
      <h1 className="text-sm font-medium text-gray-600">Select Reason</h1>
      <select
       value={reason}
       name=""
       id=""
       className="w-full px-4 h-10 text-xs border rounded-md border-gray-300"
      >
       <option value="" disabled className="text-xs">
        Select an option
       </option>
       {reason.map((option, index) => (
        <option key={index} value={option} className="text-xs text-gray-700">
         {option}
        </option>
       ))}
      </select>
      <div className="mt-5">
       <p className="text-sm font-medium text-gray-500">Message</p>
       <textarea
        name=""
        id=""
        className="min-h-[50px] w-full rounded-md border border-gray-200 p-3 text-xs text-gray-600"
       ></textarea>
      </div>
     </div>
     <div onClick={() => setOpenSubmitReport(true)} className="mt-5">
      <button className="h-10 rounded-md bg-mainblue text-white text-xs font-medium px-4 w-full">
       Submit Report
      </button>
     </div>
    </motion.div>
   </div>

   <AnimatePresence>
    {openSubmitReport && (
     <ReportSubmitted setOpenSubmitReport={setOpenSubmitReport} />
    )}
   </AnimatePresence>
  </>
 );
};

const ReportSubmitted = ({ setOpenSubmitReport }) => {
 const nav = useNavigate();

 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
    <motion.div
     initial={{ opacity: 0, y: 800 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 800 }}
     transition={{ duration: 0.6 }}
     className="w-[270px] h-auto bg-white rounded-lg p-6 flex flex-col"
    >
     <div className="flex items-end justify-end">
      <IoCloseOutline
       onClick={
        (() => setOpenSubmitReport(false),
        setTimeout(() => {
         window.location.reload();
        }, [3000]))
       }
       size={20}
       className="text-gray-500 cursor-pointer hover:text-red-500"
      />
     </div>
     <div className="flex flex-col gap-5 mb-5 items-center justify-center">
      <div className="w-[70px] h-[70px] bg-green-500 rounded-full flex items-center justify-center">
       <IoCheckmarkOutline size={60} className="text-white" />
      </div>
      <p className="text-xs font-medium text-gray-600">
       Recipe has been reported!
      </p>
     </div>
     <div className="flex w-full mt-auto">
      <button
       onClick={() => setOpenSubmitReport(false)}
       className="w-full h-10 rounded-md text-xs bg-green-500 text-white"
      >
       okay
      </button>
     </div>
    </motion.div>
   </div>
  </>
 );
};
