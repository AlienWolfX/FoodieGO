import { PiForkKnife } from "react-icons/pi";
import { PiBowlFoodLight } from "react-icons/pi";

export const AiSuggestions = () => {
 return (
  <>
   <div className="flex items-center gap-4">
    <div className="w-full bg-white h-[200px] border rounded-lg p-6">
     <div className="flex flex-col gap-2">
      <div className="h-14 w-14 rounded-lg border border-yellow-300 bg-yellow-50 flex items-center justify-center">
       <PiForkKnife className="text-yellow-300" />
      </div>
      <h1 className="text-sm font-medium">Food Suggestions</h1>
      <span className="text-xs font-light text-gray-500">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
       ratione praesentium ex doloribus in incidunt sequi natus repellendus sint
       fugiat fugit sed, ea omnis accusamus placeat illo culpa amet earum!
      </span>
     </div>
    </div>
    <div className="w-full bg-white h-[200px] border rounded-lg p-4">
     <div className="flex flex-col gap-2">
      <div className="h-14 w-14 rounded-lg border border-yellow-300 bg-yellow-50 flex items-center justify-center">
       <PiBowlFoodLight className="text-yellow-300" />
      </div>
      <h1 className="text-sm font-medium">Food Preparations</h1>
      <span className="text-xs font-light text-gray-500">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
       ratione praesentium ex doloribus in incidunt sequi natus repellendus sint
       fugiat fugit sed, ea omnis accusamus placeat illo culpa amet earum!
      </span>
     </div>
    </div>
   </div>
  </>
 );
};
