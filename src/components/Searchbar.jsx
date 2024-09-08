import { CiSearch } from "react-icons/ci";

export const Searchbar = () => {
 return (
  <>
   <div className="flex items-center gap-3 w-full">
    <label className="relative w-[600px]">
     <CiSearch
      size={30}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
     />
     <input
      type="text"
      id="search-food"
      placeholder="Search food recipes"
      className="rounded-xl border h-14 w-full pl-14 pr-4 focus:outline-none"
     />
    </label>
    <div>
     <button className="bg-gray-100 h-14 rounded-lg px-6">Find</button>
    </div>
   </div>
  </>
 );
};
