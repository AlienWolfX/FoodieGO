import { Toaster, toast } from "sonner";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sidebar } from "../../data/navbarData";
import { IoLogOut } from "react-icons/io5";
import mainLogo from "/mainLogo.png";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

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
   <motion.div
    className={`fixed h-screen bg-white shadow-lg rounded-tr-2xl flex flex-col `}
    initial={{ width: "170px", x: 0 }}
    animate={{
     width: collapsed ? "60px" : "170px",
     x: collapsed ? "-110px" : "0",
    }}
    transition={{ duration: 0.3 }}
   >
    <div className="p-3">
     <div className="mt-3 flex items-center justify-between">
      <div
       onClick={() => nav("/")}
       className="flex items-center gap-2 cursor-pointer"
      >
       <img src={mainLogo} alt="" className="w-[50px]" />
       <h1
        className={`${
         collapsed ? "hidden" : "text-sm text-mainblue font-medium"
        }`}
       >
        FoodieGO
       </h1>
      </div>
      <div className="absolute -right-[28px]">
       <button
        onClick={toggleSidebar}
        className="h-10 flex items-center justify-center w-[28px] bg-mainblue rounded-tr-full rounded-br-full text-white"
       >
        {collapsed ? (
         <FaAngleRight size={16} className="text-white" />
        ) : (
         <FaAngleLeft size={16} className="text-white" />
        )}
       </button>
      </div>
     </div>
     <div className="mt-5">
      <p className="text-[10px] font-light text-gray-500">Menu</p>
     </div>
     <div className={`flex-grow ${collapsed ? "hidden" : ""}`}>
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
    </div>
    <div
     className={`w-full flex items-center justify-center mt-auto border-t ${
      collapsed ? "hidden" : ""
     }`}
    >
     <button
      onClick={handleLogout}
      className="w-full m-1 font-regular flex items-center gap-1 justify-center text-xs text-gray-700 px-4 rounded-md h-10 hover:bg-gray-200"
     >
      <IoLogOut size={16} />
      {!collapsed && "Logout"}
     </button>
    </div>
   </motion.div>
   <div
    className={`absolute top-5 left-0 ${
     collapsed
      ? "w-[60px] transition-all duration-100 opacity-100"
      : "w-[170px] transition-width duration-100 opacity-0 hidden"
    }`}
   >
    <button
     onClick={toggleSidebar}
     className="h-10 w-[28px] flex items-center justify-center bg-mainblue rounded-tr-full rounded-br-full text-mainblue "
    >
     {collapsed ? (
      <FaAngleRight size={16} className="text-white" />
     ) : (
      <FaAngleLeft size={16} className="text-white" />
     )}
    </button>
   </div>
  </>
 );
};
