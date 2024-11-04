import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const FoodCardSlider = ({ recipes }) => {
 const slidesToShow = Math.min(recipes?.length || 0, 4);

 const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: slidesToShow,
  initialSlide: 0,
  prevArrow: (
   <div
    className="slick-prev"
    style={{
     display: "block",
     color: "white",
     fontSize: "40px",
     backgroundColor: "rgba(0, 0, 0, 0.7)",
     padding: "10px",
     borderRadius: "50%",
     cursor: "pointer",
     zIndex: 1, // Ensures the arrow is above other elements
    }}
   >
    &lt;
   </div>
  ),
  nextArrow: (
   <div
    className="slick-next"
    style={{
     display: "block",
     color: "white",
     fontSize: "40px",
     backgroundColor: "rgba(0, 0, 0, 0.7)",
     padding: "10px",
     borderRadius: "50%",
     cursor: "pointer",
     zIndex: 1,
    }}
   >
    &gt;
   </div>
  ),
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
      <div className="border border-mainblue border-opacity-5 bg-white shadow-sm p-2 rounded cursor-pointer hover:border-blue-400 hover:shadow-blue-200 w-[250px] h-[300px]">
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
        <div className="bg-gray-50 h-8 w-8 border rounded-lg flex items-center justify-center">
         <CiHeart />
        </div>
       </div>
       <div className="md:flex items-center gap-3 mt-auto">
        <p className="text-gray-500 text-xs md:text-sm font-light">
         Category: {recipe.category}
        </p>
        <div className="flex items-center gap-2">
         <div className="flex items-center gap-1">
          <CiStar size={16} className="text-yellow-400" />
          <p className="text-gray-500 text-xs md:text-sm font-light">
           {recipe.ratings}
          </p>
         </div>
         <div className="flex items-center gap-1">
          <CiClock2 size={16} className="text-yellow-400" />
          <p className="text-gray-500 text-xs md:text-sm font-light">
           {recipe.time}
          </p>
         </div>
        </div>
       </div>
      </div>
     </Link>
    )) || null}
   </Slider>
  </div>
 );
};
