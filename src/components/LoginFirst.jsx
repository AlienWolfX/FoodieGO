import { motion } from "framer-motion";
import { FiLock, FiX } from "react-icons/fi";

export const LoginFirst = ({ setLoginModal }) => {
 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
   style={{ zIndex: 9999 }}
  >
   <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.95, opacity: 0 }}
    className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl"
   >
    {/* Header */}
    <div className="flex items-start justify-between mb-4">
     <div className="flex items-center gap-3">
      <div className="p-2 bg-red-100 rounded-lg">
       <FiLock className="h-5 w-5 text-red-500" />
      </div>
      <div>
       <h1 className="text-xl font-semibold text-gray-800">Login Required</h1>
       <p className="text-sm text-gray-500 mt-1">
        This feature is restricted to logged-in users
       </p>
      </div>
     </div>
     <button
      onClick={() => setLoginModal(false)}
      className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
     >
      <FiX className="h-5 w-5 text-gray-400" />
     </button>
    </div>

    {/* Content */}
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
     <p className="text-sm text-gray-600">
      To access this feature, please log in or create an account. Enjoy benefits
      like:
     </p>
     <ul className="mt-3 space-y-2">
      <li className="flex items-center gap-2 text-sm text-gray-600">
       <span className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
       Save your favorite recipes
      </li>
      <li className="flex items-center gap-2 text-sm text-gray-600">
       <span className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
       Create and share your own recipes
      </li>
      <li className="flex items-center gap-2 text-sm text-gray-600">
       <span className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
       Interact with other food lovers
      </li>
     </ul>
    </div>

    {/* Actions */}
    <div className="flex items-center justify-end gap-3">
     <button
      onClick={() => setLoginModal(false)}
      className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
     >
      Cancel
     </button>
     <button
      className="px-6 py-2 bg-mainblue text-white text-sm font-medium rounded-lg
                hover:bg-blue-600 transition-colors flex items-center gap-2"
      onClick={() => (window.location.href = "/login")}
     >
      Go to Login
      <span className="text-white/80">→</span>
     </button>
    </div>
   </motion.div>
  </motion.div>
 );
};
