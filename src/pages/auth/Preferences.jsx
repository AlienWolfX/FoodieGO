import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
   <div className="bg-mainblue w-full h-screen flex items-center justify-center">
    <div className="bg-white w-[700px] h-auto rounded-md p-8">
     <div>
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
