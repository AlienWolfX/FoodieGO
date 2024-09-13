import { CiHeart } from "react-icons/ci";

export const FoodCard = () => {
 return (
  <>
   <div className="border bg-white shadow-sm p-2 rounded">
    <div>
     <div className="h-[140px] bg-gray-500 rounded"></div>
    </div>
    <div className="pt-2 flex items-center justify-between">
     <h1>Food Name</h1>
     <div className="bg-gray-50 h-8 w-8 border rounded-lg flex items-center justify-center">
      <CiHeart />
     </div>
    </div>
   </div>
  </>
 );
};
