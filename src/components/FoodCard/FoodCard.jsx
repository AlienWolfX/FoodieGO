import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

export const FoodCard = ({
 id,
 title,
 img_path,
 category,
 author,
 description,
 difficulty,
 time,
 ingredients,
 instructions,
 ratings,
 navigateTo = "/view-recipe",
}) => {
 return (
  <Link
   to={navigateTo}
   state={{
    title,
    img_path,
    category,
    author,
    description,
    difficulty,
    ratings,
    time,
    ingredients,
    instructions,
   }}
  >
   <div className="border border-mainblue border-opacity-5 bg-white shadow-sm p-2 rounded cursor-pointer hover:border-blue-400 hover:shadow-blue-200">
    <div className="relative overflow-hidden rounded">
     {img_path ? (
      <img
       src={img_path}
       alt={title}
       className="h-[140px] w-full object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-150"
      />
     ) : (
      <div className="h-[140px] bg-gray-500 rounded"></div>
     )}
    </div>

    <div className="pt-2 flex items-center justify-between">
     <div className="flex flex-col">
      <h1 className="text-sm font-medium">{title}</h1>
      <h1 className="text-xs font-medium text-gray-500">Author: {author}</h1>
     </div>
     <div className="bg-gray-50 h-8 w-8 border rounded-lg flex items-center justify-center">
      <CiHeart />
     </div>
    </div>
    <div className="flex items-center gap-3">
     <p className="text-gray-500 text-xs font-light">Category: {category}</p>
     <div className="flex items-center gap-1">
      <CiStar size={16} className="text-yellow-400" />
      <p className="text-gray-500 text-xs font-light">{ratings}</p>
     </div>
     <div className="flex items-center gap-1">
      <CiClock2 size={16} className="text-yellow-400" />
      <p className="text-gray-500 text-xs font-light">{time}</p>
     </div>
    </div>
   </div>
  </Link>
 );
};
