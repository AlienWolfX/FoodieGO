import { MdCancel } from "react-icons/md";

export const CreateRecipe = ({ setCreateRecipe }) => {
 return (
  <>
   <div className="p-5 md:p-0 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center overflow-x-scroll md:overflow-hidden z-20">
    <div className="mt-60 md:mt-0 bg-white border w-full max-w-[700px] min-h-[400px] md:min-h-[500px] p-5 rounded ">
     <div className="flex items-center justify-between">
      <h1 className="text-lg font-bold">Add Recipe</h1>
      <MdCancel
       onClick={() => setCreateRecipe(false)}
       size={20}
       className="text-red-500 cursor-pointer"
      />
     </div>
     <div>
      <form action="">
       <div className="flex flex-col md:flex-row gap-2">
        <div className="space-y-3 mt-5 w-full">
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-medium">
           Title
          </label>
          <input
           type="text"
           placeholder="Recipe name"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-medium">
           Description
          </label>
          <textarea
           type="text"
           placeholder="recipe description"
           className="h-10 pt-2 min-h-[70px] border rounded px-4 text-xs font-medium outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-medium">
           Category
          </label>
          <input
           type="text"
           placeholder="Lunch"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-medium">
           Food Image
          </label>
          <input
           type="file"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-medium">
           Cooking Time
          </label>
          <input
           type="text"
           placeholder="e.g., 30 minutes"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
          />
         </div>
        </div>
        <div className="space-y-3 mt-5 w-full">
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
           Difficulty
          </label>
          <input
           type="text"
           className="h-10 rounded px-4 border outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
           Ingredients
          </label>
          <input
           type="text"
           className="h-10 rounded px-4 border outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
           Instructions
          </label>
          <input
           type="text"
           className="h-10 rounded px-4 border outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
           Video Instructions
          </label>
          <input
           type="text"
           className="h-10 rounded px-4 border outline-none"
          />
         </div>
        </div>
       </div>
       {/* Create Recipe Button */}
       <div className="mt-5">
        <button
         type="submit"
         className="w-full bg-blue-500 text-xs text-white font-medium py-2 rounded hover:bg-blue-600 transition duration-200"
        >
         Create Recipe
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </>
 );
};
