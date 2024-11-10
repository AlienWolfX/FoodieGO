import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGear } from "react-icons/fa6";
import { Navbar } from "../../components/Navbar";

export const Preferences = () => {
 const [selectedFoods, setSelectedFoods] = useState([]);
 const [selectedAllergens, setSelectedAllergens] = useState([]);

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
  <Navbar/>
   <div className="bg-mainblue w-full h-screen flex items-center justify-center">
    <div className="bg-white w-[700px] h-auto rounded-md p-8">
     <div className="flex flex-col gap-2">
      <div className="w-10 h-10 flex items-center justify-center border border-blue-500 bg-blue-100 rounded-md">
       <FaUserGear size={16} className="text-mainblue"/>
      </div>
      <h1 className="text-md font-medium">User Preferences</h1>
     </div>
     <div className="mt-1">
      <hr />
     </div>
     <div className="mt-5">
      <h1 className="text-md font-medium text-gray-600">Foods you like</h1>
      <div className="flex flex-wrap mt-2">
       {foods.map((food) => (
        <div
         key={food}
         onClick={() => toggleSelection(food, "food")}
         className={`cursor-pointer border rounded-full px-4 py-2 m-1 transition-colors 
                    ${
                     selectedFoods.includes(food)
                      ? "border-mainblue"
                      : "border-gray-300"
                    }`}
        >
         {food}
        </div>
       ))}
      </div>
     </div>
     <div className="mt-5">
      <h1 className="text-md font-medium text-gray-600">Allergens</h1>
      <div className="flex flex-wrap mt-2">
       {allergens.map((allergen) => (
        <div
         key={allergen}
         onClick={() => toggleSelection(allergen, "allergen")}
         className={`cursor-pointer border rounded-full px-4 py-2 m-1 transition-colors 
                    ${
                     selectedAllergens.includes(allergen)
                      ? "border-mainblue"
                      : "border-gray-300"
                    }`}
        >
         {allergen}
        </div>
       ))}
      </div>
     </div>
     <div className="flex items-center justify-center mt-8">
      <button onClick={() => nav("/home")} className="text-mainblue">
       Next
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
