import { Sidebar } from "../../components/DashboardComponents/Sidebar";
import { Topbar } from "../../components/Topbar";
import { useState } from "react";

export const Layout = ({ children }) => {
 const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

 const handleSidebarToggle = (collapsed) => {
  setSidebarCollapsed(collapsed);
 };

 return (
  <>
   <div className="flex bg-mainbg h-screen overflow-y-scroll">
    <Sidebar onToggle={handleSidebarToggle} />
    <div
     className={`px-4 md:px-10 mt-5 w-full transition-all duration-300 ${
      isSidebarCollapsed ? "ml-0 md:ml-[60px]" : "ml-0 md:ml-[170px]"
     }`}
    >
     <Topbar />
     <div className="mt-5 bg-mainbg pb-10">{children}</div>
    </div>
   </div>
  </>
 );
};
