import { Navbar } from "../../components/Navbar";
import { About } from "./About";
import { Contact } from "./Contact";
import { Cover } from "./Cover";
import { Explore } from "./Explore";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Steps } from "./Steps";

export const Mainpage = () => {
 return (
  <>
   <Navbar />
   <Hero />
   <About />
   <Cover />
   
   <Explore />
   <Steps />
   <Contact />
   <Footer />
  </>
 );
};
