import { Sidebar } from "../../components/Dashboard Components/sidebar";

export const Layout = ({ children }) => {
 return (
  <>
   <div className="flex bg-mainbg h-screen overflow-y-scroll">
    <Sidebar />
    <div className="ml-[190px] px-10 mt-5 w-full">{children}</div>
   </div>
  </>
 );
};
