import { Toaster, toast } from "sonner";
import { NavLink } from "react-router-dom";
import { sidebar } from "../../data/navbarData";
import { IoLogOut } from "react-icons/io5";

export const Sidebar = () => {
 const handleLogout = () => {
  toast.info("Logging out of account");
 };

 return (
  <>
   <Toaster richColors position="top-center" />
   <div className="fixed w-[190px] h-screen bg-white shadow-lg rounded-tr-2xl p-3 flex flex-col">
    <div className="mt-3">
     {/* <img src={counsefilogo} alt="" /> */}
     <h1>FoodieGO</h1>
    </div>
    <div className="text-darkgray my-2">
     <hr />
    </div>
    <div className="mt-5 mb-2">
     <h1 className="text-[10px] text-darkgray text-light">Dashboard</h1>
    </div>
    <div className="flex-grow">
     {sidebar.map((item, index) => {
      const IconComponent = item.icon;
      return (
       <NavLink key={index} to={item.path}>
        {({ isActive }) => (
         <div
          className={`flex items-center gap-2 h-8 px-2 ${
           isActive
            ? "text-mainblue bg-mainblue bg-opacity-20 rounded px-2"
            : "text-darkgray"
          }`}
         >
          <IconComponent size={16} />
          <p className="text-xs">{item.label}</p>
         </div>
        )}
       </NavLink>
      );
     })}
    </div>
    <div className="py-4 w-full flex items-center justify-center">
     <button
      onClick={handleLogout}
      className="font-medium flex items-center gap-1 justify-center text-xs text-white px-4 bg-mainblue rounded h-10"
     >
      <IoLogOut size={20} /> Logout
     </button>
    </div>
   </div>
  </>
 );
};
