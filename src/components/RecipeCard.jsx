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
  <>
   <div className="bg-mainbg">
    <div className="mx-32 py-20">
     <p
      onClick={() => nav(-1)}
      className="font-light text-xs cursor-pointer text-orange-500"
     >
      Back
     </p>
     <div className="bg-white p-8 rounded-xl mt-5">
      <div className="flex items-center justify-between">
       <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p
         onClick={() => setLoginModal(true)}
         className="cursor-pointer hover:text-red-500"
        >
         Author: {author}
        </p>
       </div>
       <div>
        <div className="bg-red-100 rounded-lg h-10 w-10 flex items-center justify-center">
         <CiHeart
          size={25}
          className="text-red-500 cursor-pointer"
          onClick={() => setLoginModal(true)}
         />
        </div>
       </div>
      </div>
      <div className="mt-3">
       <hr />
      </div>
      <div className="mt-3">
       <h1 className="font-medium text-md">Description</h1>
       <p className="text-xs font-light text-justify">{description}</p>
      </div>
      <div className="mt-2">
       <p className="text-sm font-light">Tags</p>
       <div className="flex items-center gap-2 mt-2">
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
      <div className="mt-5">
       <div className="w-full h-[500px] bg-gray-200 rounded">
        {img_path ? (
         <img
          src={img_path}
          alt={title}
          className="h-full w-full object-cover rounded"
         />
        ) : (
         <div className="h-[500px] bg-gray-200 rounded flex items-center justify-center">
          No Image Available
         </div>
        )}
       </div>
      </div>
      <div className="flex items-start justify-between gap-3">
       <div className="space-y-2 mt-6 w-full">
        <h1 className="text-sm font-medium">Ingredients</h1>
        <div className="py-2">
         <hr />
        </div>
        {ingredients.map((data, index) => (
         <div
          className="h-10 border rounded bg-white text-xs flex items-center justify-start px-4"
          key={index}
         >
          <p>{data}</p>{" "}
         </div>
        ))}
       </div>
       <div className="space-y-2 mt-6 w-full">
        <h1 className="text-sm font-medium">Instructions</h1>
        <div className="py-2">
         <hr />
        </div>
        {instructions.map((data, index) => (
         <div
          className="h-10 border rounded bg-white text-xs flex items-center justify-start px-4"
          key={index}
         >
          <h1>{data}</h1>
         </div>
        ))}
       </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
       <button
        className="bg-mainblue text-white text-xs h-10 px-4 rounded"
        onClick={() => setLoginModal(true)}
       >
        Download Recipe
       </button>
      </div>
     </div>
     <div className="mt-5">
      <AiSuggestions />
     </div>
     <div className="mt-8">
      <CommentsCard />
     </div>
     {authorModal && (
      <AuthorProfile setAuthorModal={setAuthorModal} author={author} />
     )}
     {favModal && <AddFavorite setFavModal={setFavModal} />}
     {loginModal && <LoginFirst setLoginModal={setLoginModal} />}
    </div>
   </div>
  </>
 );
};
