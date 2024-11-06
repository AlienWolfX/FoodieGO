import { IoIosCloseCircleOutline } from "react-icons/io";

export const UpdateProfilePicture = ({ setOpenPicture }) => {
 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20">
    <div className="bg-white w-[320px] p-8 rounded-md">
     <div className="flex items-ceqnter justify-between">
      <h1 className="text-md font-medium text-gray-700">
       Update Profile Picture
      </h1>
      <IoIosCloseCircleOutline
       onClick={() => setOpenPicture(false)}
       size={20}
       className="text-gray-500 hover:text-red-500"
      />
     </div>
     <div className="mt-10 flex items-center justify-center">
      <div className="bg-gray-100 w-[200px] h-[200px] rounded-full"></div>
     </div>
     <div className="mt-10 flex items-center justify-between">
      <button
       onClick={() => setOpenPicture(false)}
       className="h-10 text-xs font-medium text-gray-600 rounded px-4"
      >
       cancel
      </button>
      <button className="bg-mainblue h-10 text-xs font-medium text-white rounded px-4">
       update
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
