import { CiSearch } from "react-icons/ci";

export const Searchbar = () => {
 return (
  <>
   <div className="flex items-center gap-3">
    <div className="rounded-xl border h-14 flex items-center justify-center w-[500px] relative">
     <CiSearch size={30} className="absolute left-5" />
     Find recipes on the go
    </div>
    <div>
     <button className="bg-gray-100 h-14 rounded px-6">Find</button>
    </div>
   </div>
  </>
 );
};
