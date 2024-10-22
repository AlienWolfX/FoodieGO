import { CiEdit } from "react-icons/ci";
import { UpdateProfileModal } from "../Modals/UpdateProfileModal";
import { useState } from "react";

export const ProfileCard = () => {
 const [openEdit, setOpenEdit] = useState(false);

 return (
  <>
   <div className="flex flex-col gap-4">
    <div
     className="bg-white w-[400px] rounded shadow-sm h-auto
    p-4"
    >
     <div className="flex items-start justify-between">
      <div>
       <div className="w-14 h-14 rounded-full bg-gray-100"></div>
       <div className="mt-1">
        <h1 className="text-sm font-medium">Patrick James Dionen</h1>
        <h1 className="text-xs font-light text-gray-500">
         patrickdionenofficial
        </h1>
       </div>
      </div>
      <div className="border p-1 rounded flex">
       <CiEdit
        onClick={() => setOpenEdit(true)}
        size={16}
        className="text-gray-500 cursor-pointer"
       />
      </div>
     </div>
    </div>
    <div className="w-[400px] rounded-md bg-white shadow-sm  h-auto p-4">
     <div className="mb-5">
      <div className="flex items-center justify-between my-1">
       <h1 className="text-lg font-medium">Personal Information</h1>
       <div className="border p-1 rounded">
        <CiEdit
         onClick={() => setOpenEdit(true)}
         size={16}
         className="text-gray-500 cursor-pointer"
        />
       </div>
      </div>
      <hr />
     </div>
     <div className="space-y-3">
      <div className="space-y-1">
       <h1 className="text-xs font-medium">Email</h1>
       <div className="h-10 border rounded flex items-center px-4">
        <h1 className="text-xs font-light text-gray-500">
         patrickdionenofficial@gmail.com
        </h1>
       </div>
      </div>
      <div className="space-y-1">
       <h1 className="text-xs font-medium">First Name</h1>
       <div className="h-10 border rounded flex items-center px-4">
        <h1 className="text-xs font-light text-gray-500">
         patrickdionenofficial@gmail.com
        </h1>
       </div>
      </div>
      <div className="space-y-1">
       <h1 className="text-xs font-medium">Last Name</h1>
       <div className="h-10 border rounded flex items-center px-4">
        <h1 className="text-xs font-light text-gray-500">
         patrickdionenofficial@gmail.com
        </h1>
       </div>
      </div>
      <div className="space-y-1">
       <h1 className="text-xs font-medium">Contact Number</h1>
       <div className="h-10 border rounded flex items-center px-4">
        <h1 className="text-xs font-light text-gray-500">
         patrickdionenofficial@gmail.com
        </h1>
       </div>
      </div>
     </div>
    </div>
   </div>
   {openEdit ? <UpdateProfileModal setOpenEdit={setOpenEdit} /> : ""}
  </>
 );
};
