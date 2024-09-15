import { Sidebar } from "../../components/Dashboard Components/sidebar";
import { Topbar } from "../../components/Topbar";
import { useState } from "react";

export const Layout = ({ children }) => {
 const [isSidebarCollapsed, setSidebarCollapsed] = useState(false); // State to track if the sidebar is collapsed

 const handleSidebarToggle = (collapsed) => {
  setSidebarCollapsed(collapsed);
 };

 return (
  <>
   <div className="flex bg-mainbg h-screen overflow-y-scroll">
    <Sidebar onToggle={handleSidebarToggle} />
    <div
     className={`px-10 mt-5 w-full transition-all duration-300 ${
      isSidebarCollapsed ? "ml-[60px]" : "ml-[170px]"
     }`}
    >
     <Topbar />
     <div className="mt-10">{children}</div>
    </div>
   </div>
  </>
 );
};
