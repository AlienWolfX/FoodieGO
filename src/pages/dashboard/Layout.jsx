import { Sidebar } from "../../components/DashboardComponents/Sidebar";
import { Topbar } from "../../components/Topbar";
import { useState } from "react";
import { ProfileProvider } from "../../context/ProfileContext";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }) => {
 const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
 const location = useLocation();
 const isAdmin = location.pathname.startsWith("/admin");

 const handleSidebarToggle = (collapsed) => {
  setSidebarCollapsed(collapsed);
 };

 return (
  <div className="flex h-screen bg-mainbg">
   <Sidebar onToggle={handleSidebarToggle} isAdmin={isAdmin} />

   {/* Main content wrapper */}
   <div
    className={`flex-1 overflow-x-hidden ${
     isSidebarCollapsed ? "ml-0" : "ml-0 md:ml-[170px]"
    }`}
   >
    {/* Scrollable content area */}
    <div className="h-screen mx-auto">
     <div className="px-4 md:px-10 py-5">
      <ProfileProvider>
       <Topbar isAdmin={isAdmin} />
       <div className="mt-5">{children}</div>
      </ProfileProvider>
     </div>
    </div>
   </div>
  </div>
 );
};
