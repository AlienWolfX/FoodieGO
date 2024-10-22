import { IoIosCloseCircleOutline } from "react-icons/io";

export const UpdateProfileModal = ({ setOpenEdit }) => {
 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white w-[500px] rounded p-5">
     <div className="flex items-center justify-between">
      <h1 className="text-lg font-medium">Update Profile</h1>
      <IoIosCloseCircleOutline
       onClick={() => setOpenEdit(false)}
       size={20}
       className="text-gray-500"
      />
     </div>
     <div className="my-2">
      <hr />
     </div>
     <div className="my-5 space-y-3">
      <div className="flex flex-col">
       <label htmlFor="" className="text-xs font-medium">First Name</label>
       <input type="text" placeholder="" className="text-xs border rounded h-10 outline-none px-4" />
      </div>
      <div className="flex flex-col">
       <label htmlFor="" className="text-xs font-medium">Last Name</label>
       <input type="text" placeholder="" className="text-xs border rounded h-10 outline-none px-4" />
      </div>
      <div className="flex flex-col">
       <label htmlFor="" className="text-xs font-medium">Contact Number</label>
       <input type="text" placeholder="" className="text-xs border rounded h-10 outline-none px-4" />
      </div>
     </div>
     <div className="flex items-center justify-end">
      <button className="h-10 px-4 text-xs rounded text-gray-500">
       cancel
      </button>
      <button className="bg-mainblue text-white h-10 px-4 text-xs rounded">
       save
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
