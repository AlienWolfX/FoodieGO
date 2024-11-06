import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { About } from "./About";
import { Contact } from "./Contact";
import { Cover } from "./Cover";
import { Explore } from "./Explore";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Steps } from "./Steps";

export const Mainpage = () => {
 // Animation variants for sections
 const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
 };

 const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
 };

 return (
  <motion.div
   initial="hidden"
   animate="visible"
   variants={pageVariants}
   transition={{ duration: 0.5 }}
  >
   <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
   >
    <Navbar />
   </motion.div>

   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.7 }}
   >
    <Hero />
   </motion.div>

   <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    <About />
   </motion.div>

   <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    <Cover />
   </motion.div>

   <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    <Explore />
   </motion.div>

   <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    <Steps />
   </motion.div>

   <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
   >
    <Contact />
   </motion.div>

   <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
   >
    <Footer />
   </motion.div>
  </motion.div>
 );
};
