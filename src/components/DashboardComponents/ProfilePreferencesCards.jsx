import { CiEdit } from "react-icons/ci";
import { GiSadCrab } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";

export const ProfilePreferencesCards = () => {
 // Dummy data for user preferences
 const selectedFoods = ["Asian", "Seafoods", "Vegetarian"];
 const selectedAllergens = ["Eggs", "Peanuts"];

 return (
  <>
   <div className="w-full h-auto bg-white p-8 rounded-md border border-gray-50">
    <div className="flex items-center justify-between">
     <h1 className="text-lg font-medium">User Preferences</h1>
     <div className="border p-1 rounded flex">
      <CiEdit
       // onClick={() => setOpenPicture(true)}
       size={16}
       className="text-gray-500 cursor-pointer"
      />
     </div>
    </div>
    <div className="mt-2">
     <hr />
    </div>
    <div className="mt-4">
     <div className="h-14 w-14 bg-yellow-100 border border-yellow-500 rounded-lg flex items-center justify-center">
      <FaBowlFood size={20} className="text-yellow-500" />
     </div>
     <div className="mt-3 w-full bg-yellow-200 border border-yellow-500 rounded-md p-6">
      <h2 className="text-md font-medium">Foods:</h2>
      <ul className=" pl-5">
       {selectedFoods.map((food) => (
        <li key={food} className="text-gray-700">
         {food}
        </li>
       ))}
      </ul>
     </div>
    </div>
    <div className="mt-4">
     <div className="h-14 w-14 bg-red-100 border border-red-500 rounded-lg flex items-center justify-center">
      <GiSadCrab size={20} className="text-red-500" />
     </div>

     <div className="mt-3 w-full bg-red-200 border border-red-500 rounded-md p-6">
      <h2 className="text-md font-medium">Allergens:</h2>
      <ul className=" pl-5">
       {selectedAllergens.map((allergen) => (
        <li key={allergen} className="text-gray-700">
         {allergen}
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>
  </>
 );
};
