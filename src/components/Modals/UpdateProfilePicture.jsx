import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const UpdateProfilePicture = ({ setOpenPicture, onUpdateProfilePicture }) => {
 const [previewImage, setPreviewImage] = useState(null);
 const fileInputRef = useRef(null);

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setPreviewImage(reader.result);
   };
   reader.readAsDataURL(file);
  }
 };

 const handleUpdate = () => {
  if (previewImage) {
   onUpdateProfilePicture(previewImage);
   setOpenPicture(false);
  }
 };

 return (
  <AnimatePresence>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20"
   >
    <motion.div
     initial={{ scale: 0.9, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     exit={{ scale: 0.9, opacity: 0 }}
     className="bg-white w-[320px] p-8 rounded-xl shadow-xl"
    >
     <div className="flex items-center justify-between">
      <h1 className="text-lg font-medium text-gray-700">
       Update Profile Picture
      </h1>
      <motion.button
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       onClick={() => setOpenPicture(false)}
      >
       <IoIosCloseCircleOutline
        size={24}
        className="text-gray-500 hover:text-red-500 transition-colors"
       />
      </motion.button>
     </div>

     <div className="mt-8 flex flex-col items-center justify-center">
      <motion.div
       whileHover={{ scale: 1.02 }}
       className="relative group cursor-pointer"
       onClick={() => fileInputRef.current.click()}
      >
       <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-blue-100">
        {previewImage ? (
         <img
          src={previewImage}
          alt="Preview"
          className="w-full h-full object-cover"
         />
        ) : (
         <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Click to upload</p>
         </div>
        )}
       </div>
       <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
        <p className="text-white opacity-0 group-hover:opacity-100 text-sm">
         Change Photo
        </p>
       </div>
      </motion.div>
      <input
       type="file"
       ref={fileInputRef}
       onChange={handleImageChange}
       accept="image/*"
       className="hidden"
      />
     </div>

     <div className="mt-8 flex items-center justify-between">
      <motion.button
       whileHover={{ scale: 1.02 }}
       whileTap={{ scale: 0.98 }}
       onClick={() => setOpenPicture(false)}
       className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
      >
       Cancel
      </motion.button>
      <motion.button
       whileHover={{ scale: 1.02 }}
       whileTap={{ scale: 0.98 }}
       onClick={handleUpdate}
       disabled={!previewImage}
       className={`px-4 py-2 text-sm font-medium text-white rounded-lg
        ${previewImage 
          ? 'bg-blue-500 hover:bg-blue-600' 
          : 'bg-gray-300 cursor-not-allowed'}`}
      >
       Update
      </motion.button>
     </div>
    </motion.div>
   </motion.div>
  </AnimatePresence>
 );
};
