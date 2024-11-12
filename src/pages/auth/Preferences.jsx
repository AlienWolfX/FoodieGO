import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGear } from "react-icons/fa6";
import { Navbar } from "../../components/Navbar";

export const Preferences = () => {
 const [selectedFoods, setSelectedFoods] = useState([]);
 const [selectedAllergens, setSelectedAllergens] = useState([]);
 const [userRole, setUserRole] = useState("");

 const nav = useNavigate();

 const foods = [
  "Asian",
  "Seafoods",
  "Noodles",
  "Pork",
  "Vegies",
  "Vegetarian",
  "Peanuts",
 ];
 const allergens = [
  "Eggs",
  "Soy Beans",
  "Crustacean Shellfish",
  "Milk",
  "Peanuts",
 ];

 const toggleSelection = (item, type) => {
  if (type === "food") {
   setSelectedFoods((prev) =>
    prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
   );
  } else {
   setSelectedAllergens((prev) =>
    prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
   );
  }
 };

 return (
  <>
   <Navbar />
   <div className="bg-mainbg w-full h-screen flex items-center justify-center relative">
    {/* preference card */}
    <div className="bg-white w-[700px] h-auto rounded-md p-8 shadow-lg z-10">
     <h1 className="text-2xl font-semibold text-center mb-4">
      User Preferences
     </h1>
     <div className="mt-1">
      <hr />
     </div>

     {/* User Role Selection */}
     <div className="mt-5">
      <h1 className="text-xl font-medium text-gray-600">Select Your Role</h1>
      <div className="flex items-center gap-3 mt-2">
       {["Chef", "Cook", "Student"].map((role) => (
        <div className="h-10 bg-blue-50 rounded px-4 flex flex-col items-center justify-center">
         <label key={role} className="flex items-center cursor-pointer">
          <input
           type="radio"
           value={role}
           checked={userRole === role}
           onChange={() => setUserRole(role)}
           className="mr-2"
          />
          <span className="text-gray-700">{role}</span>
         </label>
        </div>
       ))}
      </div>
     </div>

     {/* Foods Selection */}
     <div className="mt-5">
      <h1 className="text-xl font-medium text-gray-600">Foods You Like</h1>
      <div className="flex flex-wrap mt-2">
       {foods.map((food) => (
        <div
         key={food}
         onClick={() => toggleSelection(food, "food")}
         className={`cursor-pointer border rounded-full px-4 py-2 m-1 transition-colors 
                    ${
                     selectedFoods.includes(food)
                      ? "border-mainblue bg-blue-100"
                      : "border-gray-300"
                    }`}
        >
         {food}
        </div>
       ))}
      </div>
     </div>

     {/* Allergens Selection */}
     <div className="mt-5">
      <h1 className="text-xl font-medium text-gray-600">Allergens</h1>
      <div className="flex flex-wrap mt-2">
       {allergens.map((allergen) => (
        <div
         key={allergen}
         onClick={() => toggleSelection(allergen, "allergen")}
         className={`cursor-pointer border rounded-full px-4 py-2 m-1 transition-colors 
                    ${
                     selectedAllergens.includes(allergen)
                      ? "border-mainblue bg-blue-100"
                      : "border-gray-300"
                    }`}
        >
         {allergen}
        </div>
       ))}
      </div>
     </div>

     {/* Next Button */}
     <div className="flex items-center justify-center mt-8">
      <button
       onClick={() => nav("/login")}
       className="text-mainblue text-sm font-light rounded-md px-4 py-2 transition"
      >
       skip for now
      </button>
      <button
       onClick={() => nav("/login")}
       className="text-mainblue text-sm font-light bg-blue-100 hover:bg-blue-200 rounded-md px-4 py-2 transition"
      >
       Next
      </button>
     </div>
    </div>

    {/* Background Divider Image */}
    <div className="custom-shape-divider-bottom-1730098822 hidden lg:block">
     <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
     >
      <path
       d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
       className="shape-fill"
      ></path>
     </svg>
    </div>
   </div>
  </>
 );
};
