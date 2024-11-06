import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FoodCardSlider } from "../../../components/FoodCard/FoodCardSlider";
import { Layout } from "../Layout";
import { recipeData } from "../../../../data/RecipeData";
import exploreSide from "/exploreSide.png";

export const Home = () => {
 const sections = [
  { title: "Latest Recipes", data: recipeData },
  { title: "Popular Recipes", data: recipeData },
  { title: "Recommended Recipes", data: recipeData },
  { title: "Followed User's Recipes", data: recipeData },
 ];

 // Animation variants for the slider sections
 const sliderVariants = {
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
  <Layout>
   <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full flex items-center justify-between"
   >
    <div className="w-full md:w-[400px]">
     <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-gray-700"
     >
      Explore New Recipes
     </motion.h1>
     <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xs font-light text-gray-500 mt-2 leading-5"
     >
      Discover a variety of delicious recipes that you can try at home. From
      appetizers to desserts, we have something for everyone!
     </motion.p>
     <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-5 w-full flex items-center justify-between gap-2"
     >
      <input
       type="text"
       className="w-full h-10 border rounded-md px-4 outline-none text-xs"
       placeholder="Search recipes..."
      />
      <button className="h-10 px-4 rounded border border-mainblue text-mainblue text-xs font-medium hover:bg-mainblue hover:text-white transition-colors">
       Search
      </button>
     </motion.div>
    </div>
    <motion.img
     initial={{ opacity: 0, x: 20 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ delay: 0.5 }}
     src={exploreSide}
     alt="Explore"
     className="hidden md:block w-full md:w-[390px] mt-5 md:mt-0"
    />
   </motion.div>

   <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="w-full flex flex-col gap-10"
   >
    {sections.map((section, index) => (
     <SliderSection 
      key={section.title} 
      section={section} 
      index={index}
      variants={sliderVariants}
     />
    ))}
   </motion.div>
  </Layout>
 );
};

// Separate component for each slider section with scroll animation
const SliderSection = ({ section, index, variants }) => {
 const ref = useRef(null);
 const isInView = useInView(ref, {
   once: true,
   margin: "-100px",
 });

 return (
   <motion.section
     ref={ref}
     variants={variants}
     initial="hidden"
     animate={isInView ? "visible" : "hidden"}
     className="w-full flex flex-col mt-8"
   >
     <motion.div
       initial={{ opacity: 0, x: -20 }}
       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
       transition={{ delay: 0.2, duration: 0.5 }}
     >
       <h1 className="font-semibold text-2xl text-gray-800">
         {section.title}
       </h1>
       <hr className="my-3" />
     </motion.div>
     
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
       transition={{ delay: 0.4, duration: 0.5 }}
     >
       <FoodCardSlider recipes={section.data} />
     </motion.div>
   </motion.section>
 );
};
