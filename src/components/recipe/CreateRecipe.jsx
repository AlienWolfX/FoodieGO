import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { UserRecipeData } from "../../../data/UserRecipeData";

export const CreateRecipe = ({ setCreateRecipe }) => {
 // Form state
 const [formData, setFormData] = useState({
  title: "",
  description: "",
  category: "",
  img_path: "",
  time: "",
  difficulty: "",
  ingredients: "",
  instructions: "",
  vid_path: "",
 });

 // Handle input changes
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 // Handle file input
 const handleFileChange = (e) => {
  const file = e.target.files[0];
  // Create a temporary URL for the uploaded image
  const imageUrl = URL.createObjectURL(file);
  setFormData((prev) => ({
   ...prev,
   img_path: imageUrl,
  }));
 };

 // Handle form submission
 const handleSubmit = (e) => {
  e.preventDefault();

  // Create new recipe object
  const newRecipe = {
   id: UserRecipeData.length + 1, // Generate new ID
   title: formData.title,
   time: formData.time,
   author: "Patrick James Dionen", // Default author
   ratings: 0, // Initial rating
   img_path: formData.img_path,
   vid_path: formData.vid_path,
   difficulty: formData.difficulty,
   category: formData.category,
   dateCreated: new Date().toISOString().split('T')[0], // Current date
   description: formData.description,
   ingredients: formData.ingredients.split(',').map(item => item.trim()), // Convert string to array
   instructions: formData.instructions.split(',').map(item => item.trim()), // Convert string to array
  };

  // Add new recipe to UserRecipeData
  UserRecipeData.push(newRecipe);
  
  // Close the modal
  setCreateRecipe(false);
 };

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
      <form onSubmit={handleSubmit}>
       <div className="flex flex-col md:flex-row gap-2">
        <div className="space-y-3 mt-5 w-full">
         <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-xs font-medium">
           Title
          </label>
          <input
           type="text"
           name="title"
           value={formData.title}
           onChange={handleChange}
           placeholder="Recipe name"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
           required
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-xs font-medium">
           Description
          </label>
          <textarea
           name="description"
           value={formData.description}
           onChange={handleChange}
           placeholder="Recipe description"
           className="h-10 pt-2 min-h-[70px] border rounded px-4 text-xs font-medium outline-none"
           required
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-xs font-medium">
           Category
          </label>
          <input
           type="text"
           name="category"
           value={formData.category}
           onChange={handleChange}
           placeholder="Lunch"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
           required
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="img_path" className="text-xs font-medium">
           Food Image
          </label>
          <input
           type="file"
           name="img_path"
           onChange={handleFileChange}
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
           accept="image/*"
           required
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="time" className="text-xs font-medium">
           Cooking Time
          </label>
          <input
           type="text"
           name="time"
           value={formData.time}
           onChange={handleChange}
           placeholder="e.g., 30m"
           className="h-10 border rounded px-4 text-xs font-medium outline-none"
           required
          />
         </div>
        </div>
        <div className="space-y-3 mt-5 w-full">
         <div className="flex flex-col gap-1">
          <label htmlFor="difficulty" className="text-xs">
           Difficulty
          </label>
          <input
           type="text"
           name="difficulty"
           value={formData.difficulty}
           onChange={handleChange}
           placeholder="Easy, Medium, Hard"
           className="h-10 rounded px-4 border outline-none"
           required
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="ingredients" className="text-xs">
           Ingredients (comma-separated)
          </label>
          <input
           type="text"
           name="ingredients"
           value={formData.ingredients}
           onChange={handleChange}
           placeholder="ingredient 1, ingredient 2, ingredient 3"
           className="h-10 rounded px-4 border outline-none"
           required
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="instructions" className="text-xs">
           Instructions (comma-separated)
          </label>
          <input
           type="text"
           name="instructions"
           value={formData.instructions}
           onChange={handleChange}
           placeholder="step 1, step 2, step 3"
           className="h-10 rounded px-4 border outline-none"
           required
          />
         </div>
         <div className="flex flex-col gap-1">
          <label htmlFor="vid_path" className="text-xs">
           Video Instructions (optional)
          </label>
          <input
           type="text"
           name="vid_path"
           value={formData.vid_path}
           onChange={handleChange}
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
