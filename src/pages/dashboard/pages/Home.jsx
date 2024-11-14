import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FoodCardSlider } from "../../../components/FoodCard/FoodCardSlider";
import { Layout } from "../Layout";
import { recipeData } from "../../../../data/RecipeData";
import exploreSide from "/exploreSide.png";
import {
 getUserData,
 addFavorite,
 removeFavorite,
} from "../../../../data/UserData";
import { useNavigate } from "react-router-dom";

export const Home = () => {
 const navigate = useNavigate();
 const [favorites, setFavorites] = useState(getUserData().favorites); // Initialize favorites from user data
 const [searchTerm, setSearchTerm] = useState(""); // Add this state

 const sections = [
  { title: "Latest Recipes", data: recipeData },
  { title: "Popular Recipes", data: recipeData },
  { title: "Recommended Recipes", data: recipeData },
  { title: "Followed User's Recipes", data: recipeData },
 ];

 // Function to toggle favorite status
 const toggleFavorite = (recipe) => {
  if (favorites.some((fav) => fav.id === recipe.id)) {
   // If already a favorite, remove it
   setFavorites((prevFavorites) =>
    prevFavorites.filter((fav) => fav.id !== recipe.id)
   );
   removeFavorite(recipe.id); // Update the data source
  } else {
   // If not a favorite, add it
   setFavorites((prevFavorites) => [...prevFavorites, recipe]);
   addFavorite(recipe); // Update the data source
  }
 };

 // Animation variants for the slider sections
 const sliderVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
   opacity: 1,
   y: 0,
   transition: {
    duration: 0.6,
    ease: "easeOut",
   },
  },
 };

 // Add this function to handle search
 const handleSearch = () => {
  if (searchTerm.trim()) {
   navigate("/explore-more-recipes", {
    state: {
     searchQuery: searchTerm,
    },
   });
  }
 };

 return (
  <Layout>
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 overflow-hidden"
   >
    <div className="absolute inset-0 opacity-10">
     <div className="absolute inset-0 bg-grid-pattern" />
    </div>

    <div className="relative flex items-center justify-between">
     <div className="w-full md:w-[500px] space-y-6">
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2 }}
       className="space-y-3"
      >
       <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Discover & Cook
        <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
         Amazing Recipes
        </span>
       </h1>
       <p className="text-sm text-gray-600 leading-relaxed max-w-md">
        Explore a world of culinary delights. From quick weekday meals to
        gourmet weekend feasts, find the perfect recipe for any occasion.
       </p>
      </motion.div>

      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.4 }}
       className="relative max-w-xl"
      >
       <div className="relative flex items-center">
        <input
         type="text"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         onKeyPress={(e) => e.key === "Enter" && handleSearch()}
         className="w-full h-12 pl-5 pr-32 rounded-xl border-2 border-gray-100 
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                          transition-all duration-200 outline-none text-sm"
         placeholder="Search for any recipe..."
        />
        <button
         onClick={handleSearch}
         className="absolute right-2 h-8 px-6 bg-blue-600 text-white 
                          rounded-lg text-sm font-medium hover:bg-blue-700 
                          transition-colors duration-200 flex items-center gap-2"
        >
         <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
         </svg>
         Search
        </button>
       </div>

       <div className="flex gap-2 mt-3">
        {["Quick & Easy", "Vegetarian", "Healthy", "Trending"].map((tag) => (
         <button
          key={tag}
          className="px-3 py-1 text-xs font-medium text-gray-600 bg-white 
                           rounded-full border border-gray-200 hover:border-blue-500 
                           hover:text-blue-600 transition-colors duration-200"
         >
          {tag}
         </button>
        ))}
       </div>
      </motion.div>
     </div>

     <motion.img
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      src={exploreSide}
      alt="Explore"
      className="hidden md:block w-[450px] object-cover rounded-lg 
                       transition-transform duration-300"
     />
    </div>
   </motion.div>

   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="space-y-12"
   >
    {sections.map((section, index) => (
     <SliderSection
      key={section.title}
      section={section}
      index={index}
      variants={sliderVariants}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
     />
    ))}
   </motion.div>
  </Layout>
 );
};

// Separate component for each slider section with scroll animation
const SliderSection = ({
 section,
 index,
 variants,
 favorites,
 toggleFavorite,
}) => {
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
   className="w-full"
  >
   <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="flex items-center justify-between mb-6"
   >
    <div>
     <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
     <p className="text-sm text-gray-500 mt-1">
      Discover our {section.title.toLowerCase()} curated just for you
     </p>
    </div>
   </motion.div>

   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ delay: 0.4, duration: 0.5 }}
   >
    <FoodCardSlider
     recipes={section.data}
     favorites={favorites}
     toggleFavorite={toggleFavorite}
    />
   </motion.div>
  </motion.section>
 );
};
