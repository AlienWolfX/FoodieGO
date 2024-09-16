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
 tags,
 ratings,
}) => {
 return (
  <Link
   to={`/view-recipe`}
   state={{
    title,
    img_path,
    category,
    author,
    description,
    difficulty,
    ratings,
    time,
    tags,
   }}
  >
   <div className="border bg-white shadow-sm p-2 rounded cursor-pointer">
    <div>
     {img_path ? (
      <img
       src={img_path}
       alt={title}
       className="h-[140px] w-full object-cover rounded"
      />
     ) : (
      <div className="h-[140px] bg-gray-500 rounded"></div>
     )}
    </div>
    <div className="pt-2 flex items-center justify-between">
     <h1 className="text-sm font-medium">{title}</h1>
     <div className="bg-gray-50 h-8 w-8 border rounded-lg flex items-center justify-center">
      <CiHeart />
     </div>
    </div>
    <div className="flex items-center gap-3">
     <p className="text-gray-500 text-xs font-light">{category}</p>
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
