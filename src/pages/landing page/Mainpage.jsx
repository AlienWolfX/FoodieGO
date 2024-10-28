import { Navbar } from "../../components/Navbar";
import { About } from "./About";
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
   <Footer />
  </>
 );
};
