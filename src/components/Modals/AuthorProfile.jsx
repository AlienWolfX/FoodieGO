import { MdCancel } from "react-icons/md";

export const AuthorProfile = ({ setAuthor }) => {
 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white border w-[900px] min-h-[700px] p-5 rounded">
     <div className="flex items-start justify-between">
      <div>
       <h1 className="font-bold text-sm ">Foodigoer Profile</h1>
       <div className="flex items-center gap-2 ">
        <div className="h-10 w-10 bg-gray-100 rounded-full"></div>
        <div className="flex flex-col">
         <p className="font-medium text-sm">Allen Gabrielle Cruiz</p>
         <div className="flex items-center gap-2 font-light text-xs">
          <p>Followers:</p>
          <p>Recipes: </p>
          <p>Total Likes: </p>
         </div>
        </div>
        <div>
         <button className="border border-mainblue text-mainblue px-4 h-8 text-xs rounded ">
          Follow
         </button>
        </div>
       </div>
      </div>
      <MdCancel
       onClick={() => setAuthor(false)}
       size={20}
       className="text-red-500"
      />
     </div>
     <div className="mt-2">
      <hr />
     </div>
     <div>
      <h3 className="text-sm font-medium">Shared Recipes</h3>
     </div>
    </div>
   </div>
  </>
 );
};
