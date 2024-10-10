import { MdCancel } from "react-icons/md";

export const CreateRecipe = ({ setCreateRecipe }) => {
 return (
  <>
   <div className="absolute bottom-0 right-0 left-0 top-0 flex items-center justify-center backdrop-filter backdrop-blur-sm rounded-md">
    <div className="bg-white border w-[700px] min-h-[500px] p-5 rounded">
     <div className="flex items-center justify-between">
      <h1>Add Recipe</h1>
      <MdCancel
       onClick={() => setCreateRecipe(false)}
       size={20}
       className="text-red-500"
      />
     </div>
     <div>
      <form action="">
       <div className="flex items-star gap-2">
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
           placeholder="Lunch"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs font-medium">
           Cooking Time
          </label>
          <input
           type="text"
           placeholder="Lunch"
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
      </form>
     </div>
    </div>
   </div>
  </>
 );
};
