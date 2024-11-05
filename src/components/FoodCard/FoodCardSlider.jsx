import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { AddFavorite } from "../Modals/AddFavorite";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const FoodCardSlider = ({ recipes }) => {
 const slidesToShow = Math.min(recipes?.length || 0, 4);
 const [favModal, setFavModal] = useState(false);

 const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: slidesToShow,
  initialSlide: 0,
  responsive: [
   {
    breakpoint: 1536,
    settings: {
     slidesToShow: Math.min(recipes?.length || 0, 4),
     slidesToScroll: Math.min(recipes?.length || 0, 4),
    },
   },
   {
    breakpoint: 1280,
    settings: {
     slidesToShow: Math.min(recipes?.length || 0, 3),
     slidesToScroll: Math.min(recipes?.length || 0, 3),
    },
   },
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: Math.min(recipes?.length || 0, 2),
     slidesToScroll: Math.min(recipes?.length || 0, 2),
    },
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: Math.min(recipes?.length || 0, 1),
     slidesToScroll: Math.min(recipes?.length || 0, 1),
    },
   },
   {
    breakpoint: 320,
    settings: {
     slidesToShow: Math.min(recipes?.length || 0, 1),
     slidesToScroll: Math.min(recipes?.length || 0, 1),
    },
   },
  ],
 };

 return (
  <div className="w-[320px] lg:w-full">
   <Slider {...settings}>
    {recipes?.map((recipe) => (
     <Link
      key={recipe.id}
      to="/view-recipe"
      state={{
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
      }}
     >
      <div className="border border-mainblue border-opacity-5 bg-white shadow-sm p-2 rounded cursor-pointer hover:border-blue-400 hover:shadow-blue-200 w-[250px] h-[280px] flex flex-col">
       <div className="relative overflow-hidden rounded">
        {recipe.img_path ? (
         <img
          src={recipe.img_path}
          alt={recipe.title}
          className="h-[140px] md:h-[180px] w-full object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-150"
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
        {/* <div className="bg-red-100 rounded-lg h-8 w-8 flex items-center justify-center">
         <Tooltip title="Like" onClick={() => setFavModal(true)}>
          <IconButton>
           <FavoriteBorderOutlinedIcon className="text-red-500" />
          </IconButton>
         </Tooltip>
        </div> */}
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
      </div>
     </Link>
    )) || null}
   </Slider>
   {favModal && <AddFavorite setFavModal={setFavModal} />}
  </div>
 );
};
