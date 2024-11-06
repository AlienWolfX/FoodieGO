import { useNavigate, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { AuthorProfile } from "./Modals/AuthorProfile";
import { AddFavorite } from "./Modals/AddFavorite";
import { Navbar } from "./Navbar";
import { AiSuggestions } from "./DashboardComponents/AiSuggestions";
import { CommentsCard } from "./DashboardComponents/CommentsCard";
import { LoginFirst } from "./LoginFirst";

export const RecipeCard = () => {
 const nav = useNavigate();
 const location = useLocation();

 const {
  title,
  author,
  category,
  description,
  difficulty,
  time,
  img_path,
  ingredients,
  instructions,
 } = location.state;

 const [authorModal, setAuthorModal] = useState(false);
 const [favModal, setFavModal] = useState(false);
 const [loginModal, setLoginModal] = useState(false);

 return (
  <div className="bg-mainbg min-h-screen">
   <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-10 md:py-20">
    {/* Back Button */}
    <p
     onClick={() => nav(-1)}
     className="font-light text-xs cursor-pointer text-orange-500"
    >
     Back
    </p>

    {/* Main Card */}
    <div className="bg-white p-4 md:p-8 rounded-xl mt-5">
     {/* Title and Author Section */}
     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
      <div>
       <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
       <p
        onClick={() => setLoginModal(true)}
        className="cursor-pointer hover:text-red-500 text-sm md:text-base"
       >
        Author: {author}
       </p>
      </div>
      <div className="bg-red-100 rounded-lg h-10 w-10 flex items-center justify-center">
       <CiHeart
        size={25}
        className="text-red-500 cursor-pointer"
        onClick={() => setLoginModal(true)}
       />
      </div>
     </div>

     <div className="mt-3">
      <hr />
     </div>

     {/* Description */}
     <div className="mt-3">
      <h1 className="font-medium text-md">Description</h1>
      <p className="text-xs md:text-sm font-light text-justify">{description}</p>
     </div>

     {/* Tags */}
     <div className="mt-4">
      <p className="text-sm font-light">Tags</p>
      <div className="flex flex-wrap items-center gap-2 mt-2">
       <div className="px-4 h-8 rounded border flex items-center cursor-pointer justify-center">
        <h1 className="text-xs font-light">Category: {category}</h1>
       </div>
       <div className="px-4 h-8 rounded border flex items-center cursor-pointer justify-center">
        <h1 className="text-xs font-light">Difficulty: {difficulty}</h1>
       </div>
       <div className="px-4 h-8 rounded border flex items-center cursor-pointer justify-center">
        <h1 className="text-xs font-light">Time: {time}</h1>
       </div>
      </div>
     </div>

     {/* Image */}
     <div className="mt-5">
      <div className="w-full h-[200px] md:h-[300px] lg:h-[500px] bg-gray-200 rounded">
       {img_path ? (
        <img
         src={img_path}
         alt={title}
         className="h-full w-full object-cover rounded"
        />
       ) : (
        <div className="h-full bg-gray-200 rounded flex items-center justify-center">
         No Image Available
        </div>
       )}
      </div>
     </div>

     {/* Ingredients and Instructions */}
     <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mt-6">
      {/* Ingredients */}
      <div className="space-y-2 w-full">
       <h1 className="text-sm font-medium">Ingredients</h1>
       <div className="py-2">
        <hr />
       </div>
       <div className="space-y-2">
        {ingredients.map((data, index) => (
         <div
          className="min-h-10 border rounded bg-white text-xs flex items-center justify-start p-4"
          key={index}
         >
          <p>{data}</p>
         </div>
        ))}
       </div>
      </div>

      {/* Instructions */}
      <div className="space-y-2 w-full">
       <h1 className="text-sm font-medium">Instructions</h1>
       <div className="py-2">
        <hr />
       </div>
       <div className="space-y-2">
        {instructions.map((data, index) => (
         <div
          className="min-h-10 border rounded bg-white text-xs flex items-center justify-start p-4"
          key={index}
         >
          <h1>{data}</h1>
         </div>
        ))}
       </div>
      </div>
     </div>

     {/* Download Button */}
     <div className="mt-8 flex items-center justify-center">
      <button
       className="bg-mainblue text-white text-xs h-10 px-4 rounded w-full md:w-auto"
       onClick={() => setLoginModal(true)}
      >
       Download Recipe
      </button>
     </div>
    </div>

    {/* AI Suggestions */}
    <div className="mt-5">
     <AiSuggestions />
    </div>

    {/* Comments */}
    <div className="mt-8">
     <CommentsCard />
    </div>

    {/* Modals */}
    {authorModal && (
     <AuthorProfile setAuthorModal={setAuthorModal} author={author} />
    )}
    {favModal && <AddFavorite setFavModal={setFavModal} />}
    {loginModal && <LoginFirst setLoginModal={setLoginModal} />}
   </div>
  </div>
 );
};
