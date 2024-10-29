import { Toaster, toast } from "sonner";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sidebar } from "../../data/navbarData";
import { IoLogOut } from "react-icons/io5";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import mainLogo from "/mainLogo.png";

export const Sidebar = ({ onToggle }) => {
 const [collapsed, setCollapsed] = useState(false);
 const nav = useNavigate();

 const handleLogout = () => {
  toast.info("Logging out of account");
  setTimeout(() => {
   nav("/");
  }, 3000);
 };

 const toggleSidebar = () => {
  setCollapsed(!collapsed);
  onToggle(!collapsed); // Pass collapsed state to Layout
 };

 return (
  <>
   <Toaster richColors position="top-center" />
   <div
    className={`fixed h-screen bg-white shadow-lg rounded-tr-2xl p-3 flex flex-col transition-width duration-300 ${
     collapsed ? "w-[60px]" : "w-[170px]"
    }`}
   >
    <div className="mt-3 flex items-center justify-between">
     <div className="flex items-center gap-2">
      <img src={mainLogo} alt="" className="w-[50px]" />
      <h1
       className={`${
        collapsed ? "hidden" : "text-sm text-mainblue font-medium"
       }`}
      >
       FoodieGO
      </h1>
     </div>
     <div className="absolute -right-2">
      <button onClick={toggleSidebar} className="ml-auto text-mainblue">
       {collapsed ? (
        <IoArrowForwardCircle size={18} />
       ) : (
        <IoArrowBackCircle size={18} />
       )}
      </button>
     </div>
    </div>
    <div className="text-darkgray my-2">
     <hr />
    </div>
    <div className={`mt-5 mb-2 ${collapsed ? "hidden" : ""}`}>
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
            ? "text-blue-600 bg-mainblue bg-opacity-20 rounded px-2"
            : "text-darkgray"
          }`}
         >
          <IconComponent size={16} />
          {!collapsed && <p className="text-xs">{item.label}</p>}
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
      <IoLogOut size={20} />
      {!collapsed && "Logout"}
     </button>
    </div>
   </div>
  </>
 );
};
