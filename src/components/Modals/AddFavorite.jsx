import { useNavigate } from "react-router-dom";

export const AddFavorite = ({ setFavModal }) => {

 const nav = useNavigate()

 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
    <div className="h-[300px] bg-white rounded-lg p-8 flex items-center justify-center">
     <div className="flex flex-col gap-5 items-center justify-center">
      <div className="w-[170px] h-[170px] border border-green-300 bg-green-50 rounded-full"></div>
      <p className="text-sm font-medium">Recipe added to favorites</p>
      <div className="flex w-full">
       <button
        onClick={() => nav('/favorite-recipes')}
        className="w-full h-10 rounded-md text-xs bg-green-400 text-white"
       >
        view favorites
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
