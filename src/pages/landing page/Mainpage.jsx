import { Navbar } from "../../components/Navbar";
import { Hero } from "./Hero";

export const Mainpage = () => {
 return (
  <>
   <Navbar />
   <div className="mx-32">
    <Hero />
   </div>
  </>
 );
}; 
