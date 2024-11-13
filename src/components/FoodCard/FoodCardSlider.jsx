import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useRef } from "react";
import { AddFavorite } from "../Modals/AddFavorite";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const FoodCardSlider = ({ recipes }) => {
 const [favModal, setFavModal] = useState(false);
 const sliderRef = useRef(null);

 const CustomArrow = ({ direction, onClick }) => {
  return (
   <button
    onClick={onClick}
    className={`
         custom-arrow 
         w-8 h-8 
         flex items-center justify-center 
         bg-white 
         border border-gray-200 
         rounded-full 
         hover:bg-gray-50
         transition-all
         ${!onClick && "opacity-50 cursor-not-allowed"}
       `}
   >
    {direction === "prev" ? (
     <IoIosArrowBack size={20} className="text-gray-600" />
    ) : (
     <IoIosArrowForward size={20} className="text-gray-600" />
    )}
   </button>
  );
 };

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
    <div className="custom-arrow-container">
     <CustomArrow
      direction="prev"
      onClick={() => sliderRef.current?.slickPrev()}
     />
    </div>
    <div className="custom-arrow-container">
     <CustomArrow
      direction="next"
      onClick={() => sliderRef.current?.slickNext()}
     />
    </div>
   </div>

   <Slider ref={sliderRef} {...settings}>
    {recipes?.map((recipe) => (
     <motion.div
      key={recipe.id}
      className="inline-block"
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
       }}
      >
       <div className="px-2">
        <motion.div
         className="border border-mainblue border-opacity-5 bg-white shadow-sm p-2 rounded cursor-pointer hover:border-blue-400 hover:shadow-blue-200 gap-1 flex flex-col h-[290px]"
         layout
         transition={{
          layout: { duration: 0.3 },
          ease: "easeInOut",
         }}
         whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
         }}
        >
         <div className="overflow-hidden rounded">
          {recipe.img_path ? (
           <img
            src={recipe.img_path}
            alt={recipe.title}
            className="w-full h-[140px] md:h-[180px] object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-150"
           />
          ) : (
           <div className="h-[140px] md:h-[180px] bg-gray-500 rounded"></div>
          )}
         </div>
         <div className="pt-2 flex items-center justify-between">
          <div className="flex flex-col">
           <h1 className="text-sm md:text-base font-medium">{recipe.title}</h1>
           <h1 className="text-xs md:text-sm font-medium text-gray-500">
            Author: {recipe.author}
           </h1>
          </div>
         </div>
         <div className="md:flex items-center gap-3 mt-auto">
          <p className="text-gray-500 text-xs font-light">
           Category: {recipe.category}
          </p>
          <div className="flex items-center gap-2">
           <div className="flex items-center gap-1">
            <CiStar size={16} className="text-yellow-400" />
            <p className="text-gray-500 text-xs font-light">{recipe.ratings}</p>
           </div>
           <div className="flex items-center gap-1">
            <CiClock2 size={16} className="text-yellow-400" />
            <p className="text-gray-500 text-xs font-light">{recipe.time}</p>
           </div>
          </div>
         </div>
        </motion.div>
       </div>
      </Link>
     </motion.div>
    )) || null}
   </Slider>
  </div>
 );
};
