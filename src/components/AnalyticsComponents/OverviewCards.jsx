import { IoMdPeople } from "react-icons/io";

export const OverviewCards = () => {
 return (
  <>
   <div className="flex items-center gap-4">
    <div className="bg-white rounded-md border border-r-gray-50 p-6 flex items-start gap-5">
     <div className="h-10 w-10 rounded-full border border-yellow-400 bg-yellow-100 flex items-center justify-center">
      <IoMdPeople size={20} className="text-yellow-400" />
     </div>
     <div className="flex flex-col">
      <p className="text-xs font-light text-gray-500">Total Followers</p>
      <h1 className="text-lg font-bold">12k</h1>
     </div>
    </div>
    <div className="bg-white rounded-md border border-r-gray-50 p-6 flex items-start gap-5">
     <div className="h-10 w-10 rounded-full border border-yellow-400 bg-yellow-100 flex items-center justify-center">
      <IoMdPeople size={20} className="text-yellow-400" />
     </div>
     <div className="flex flex-col">
      <p className="text-xs font-light text-gray-500">Total Followers</p>
      <h1 className="text-lg font-bold">12k</h1>
     </div>
    </div>
    <div className="bg-white rounded-md border border-r-gray-50 p-6 flex items-start gap-5">
     <div className="h-10 w-10 rounded-full border border-yellow-400 bg-yellow-100 flex items-center justify-center">
      <IoMdPeople size={20} className="text-yellow-400" />
     </div>
     <div className="flex flex-col">
      <p className="text-xs font-light text-gray-500">Total Followers</p>
      <h1 className="text-lg font-bold">12k</h1>
     </div>
    </div>
   </div>
  </>
 );
};
