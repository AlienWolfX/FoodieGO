import { Link, useNavigate } from "react-router-dom";
import { CiStar, CiClock2 } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import { GiCook } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const FoodCardSlider = ({ recipes }) => {
 const nav = useNavigate();
 const sliderRef = useRef(null);

 const CustomArrow = ({ direction, onClick }) => (
   <button
     onClick={onClick}
     className={`custom-arrow w-8 h-8 flex items-center justify-center 
                bg-white border border-gray-200 rounded-full 
                hover:bg-gray-50 transition-all
                ${!onClick && "opacity-50 cursor-not-allowed"}`}
   >
     {direction === "prev" ? (
       <IoIosArrowBack size={20} className="text-gray-600" />
     ) : (
       <IoIosArrowForward size={20} className="text-gray-600" />
     )}
   </button>
 );

 const settings = {
  className: "slider-width",
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
   {
    breakpoint: 1536,
    settings: {
     slidesToShow: 4,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 1280,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 640,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    },
   },
  ],
 };

 return (
  <div className="w-full relative">
   <div className="absolute right-2 top-[-50px] flex items-center gap-2 z-10">
    <button
     onClick={() => nav("/explore-more-recipes")}
     className="text-xs font-regular hover:text-mainblue text-gray-600"
    >
     see more
    </button>
    <div className="custom-arrow-container">
     <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
    </div>
    <div className="custom-arrow-container">
     <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
    </div>
   </div>

   <Slider ref={sliderRef} {...settings}>
    {recipes?.map((recipe) => (
     <motion.div
      key={recipe.id}
      className="inline-block px-2"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
     >
      <Link
       to="/view-recipe"
       state={{
        id: recipe.id,
        title: recipe.title,
        img_path: recipe.img_path,
        category: recipe.category,
        author: recipe.author,
        description: recipe.description,
        difficulty: recipe.difficulty,
        ratings: recipe.ratings,
        time: recipe.time,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        likers: recipe.likes,
        downloads: recipe.downloads,
        views: recipe.views,
        dateCreated: recipe.dateCreated,
        cuisine: recipe.cuisine,
       }}
      >
       <motion.div
        className="group bg-white rounded-xl shadow-sm border border-gray-100
                   hover:shadow-lg hover:shadow-blue-50 hover:border-blue-100 
                   transition-all duration-200 h-[320px]"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
       >
         {/* Image Container */}
         <div className="relative w-full h-44 overflow-hidden rounded-t-xl">
           {recipe.img_path ? (
             <img
               src={recipe.img_path}
               alt={recipe.title}
               className="w-full h-full object-cover transition-transform duration-300 
                         group-hover:scale-105"
             />
           ) : (
             <div className="w-full h-full bg-gray-200 animate-pulse" />
           )}
           {/* Difficulty Badge */}
           <div className="absolute top-3 left-3">
             <span className={`px-2.5 py-1.5 rounded-lg text-xs font-medium 
                           ${recipe.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                             recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                             "bg-red-100 text-red-700"}`}>
               {recipe.difficulty}
             </span>
           </div>
         </div>

         {/* Content Container */}
         <div className="p-3">
           {/* Title and Author */}
           <div className="mb-3">
             <h1 className="text-base font-medium text-gray-800 line-clamp-1 
                           group-hover:text-blue-600">
               {recipe.title}
             </h1>
             <p className="text-sm text-gray-500 mt-1">
               By {recipe.author}
             </p>
           </div>

           {/* Tags */}
           <div className="flex flex-wrap gap-2 mb-3">
             <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md">
               <TbCategory className="w-4 h-4 text-gray-400" />
               <span className="text-xs text-gray-600">{recipe.category}</span>
             </div>
             <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md">
               <GiCook className="w-4 h-4 text-gray-400" />
               <span className="text-xs text-gray-600">{recipe.cuisine}</span>
             </div>
           </div>

           {/* Metrics */}
           <div className="flex items-center justify-between pt-2 border-t border-gray-50">
             <div className="flex items-center gap-3">
               <div className="flex items-center gap-1">
                 <CiStar className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                 <span className="text-sm font-medium text-gray-700">{recipe.ratings}</span>
               </div>
               <div className="flex items-center gap-1">
                 <CiClock2 className="w-5 h-5 text-blue-400" />
                 <span className="text-sm text-gray-600">{recipe.time}</span>
               </div>
             </div>
             <div className="flex items-center gap-1">
               <FiBarChart2 className="w-4 h-4 text-gray-400" />
               <span className="text-xs text-gray-500">{recipe.views} views</span>
             </div>
           </div>
         </div>
       </motion.div>
      </Link>
     </motion.div>
    ))}
   </Slider>
  </div>
 );
};
