import { MdCancel } from "react-icons/md";

export const AnalyzeRecipe = ({ recipe, setAnalyze }) => {
 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20">
    <div className="bg-white rounded-md p-2 w-[400px]">
     <div className="flex items-end justify-end">
      <MdCancel
       onClick={() => setAnalyze(true)}
       size={20}
       className="hover:text-red-500"
      />
     </div>
     <div className="p-4">
      <div className="flex items-center justify-center">
       <h1 className="text-xl font-semibold text-gray-600">Nutrilyzer ✨</h1>
      </div>
      <p className="text-center text-xs font-light text-gray-600">
       Your go-to tool for analyzing and optimizing recipes for better
       nutrition.
      </p>
      <div className="mt-5 flex items-center justify-center ">
       <button className="h-10 bg-mainblue text-xs text-white font-medium px-4 rounded">
        Analyze Recipe
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
