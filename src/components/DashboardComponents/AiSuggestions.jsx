import { PiForkKnife } from "react-icons/pi";
import { PiBowlFoodLight } from "react-icons/pi";

export const AiSuggestions = () => {
 return (
  <>
   <div className="flex flex-col md:flex-row items-center gap-4">
    <div className="w-full md:w-1/2 bg-white h-auto md:h-[200px] border rounded-lg p-6">
     <div className="flex flex-col gap-2">
      <div className="h-14 w-14 rounded-lg border border-yellow-300 bg-yellow-50 flex items-center justify-center">
       <PiForkKnife className="text-yellow-300" />
      </div>
      <h1 className="text-sm font-medium">Food Suggestions</h1>
      <span className="text-xs font-light text-gray-500">
       "Use buttermilk for marinating to make the chicken tender and
       flavorful.", "Add a pinch of baking powder to the flour mixture for extra
       crispiness.", "Double-dip the chicken in the batter for a thicker,
       crunchier coating.", "Let the fried chicken rest on a wire rack to
       maintain crispiness."
      </span>
     </div>
    </div>
    <div className="w-full md:w-1/2 bg-white h-auto md:h-[200px] border rounded-lg p-4">
     <div className="flex flex-col gap-2">
      <div className="h-14 w-14 rounded-lg border border-yellow-300 bg-yellow-50 flex items-center justify-center">
       <PiBowlFoodLight className="text-yellow-300" />
      </div>
      <h1 className="text-sm font-medium">Food Preparations</h1>
      <span className="text-xs font-light text-gray-500">
       "Gather ingredients: chicken pieces, buttermilk, flour, spices, eggs, and
       oil.", "Marinate the chicken in buttermilk and spices for at least 4
       hours or overnight.", "Prepare a dredging station with seasoned flour,
       egg wash, and breadcrumbs.", "Heat oil in a deep fryer or pan to 350°F
       (175°C)."
      </span>
     </div>
    </div>
   </div>
  </>
 );
};
