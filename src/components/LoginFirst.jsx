export const LoginFirst = ({ setLoginModal }) => {
 return (
  <>
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white rounded-md p-8 w-[500px] shadow-lg">
     <h1 className="text-lg font-bold text-gray-700">Login Required</h1>
     <p className="text-xs mt-2 text-gray-600 font-regular">
      Please log in to access this feature. If you don't have an account, you
      can create one.
     </p>
     <div className="mt-6 flex items-center justify-end gap-2">
      <p
       onClick={() => setLoginModal(false)}
       className="text-sm font-light text-gray-600 cursor-pointer"
      >
       Okay
      </p>
      <button
       className="bg-mainblue text-xs text-white font-medium px-4 h-10 rounded hover:bg-blue-600 transition duration-200"
       onClick={() => (window.location.href = "/login")} // Redirect to login page
      >
       Go to Login
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
