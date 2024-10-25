import { Navbar } from "../../components/Navbar";
import { Cover } from "./Cover";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export const Mainpage = () => {
 return (
  <>
   <Navbar />
   <div>
    <div className="mx-32">
     <Hero />
    </div>
    <Cover />
    <div className="">
     <Footer />
    </div>
   </div>
  </>
 );
};
