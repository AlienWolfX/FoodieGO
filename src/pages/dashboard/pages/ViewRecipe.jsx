import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout } from "../Layout";
import { AuthorProfile } from "../../../components/Modals/AuthorProfile";
import { CommentsCard } from "../../../components/DashboardComponents/CommentsCard";
import { AiSuggestions } from "../../../components/DashboardComponents/AiSuggestions";
import { AddFavorite } from "../../../components/Modals/AddFavorite";
import { AnalyzeRecipe } from "../../../components/AiComponent/AnalyzeRecipe";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { motion, AnimatePresence } from "framer-motion";
import { Favorite } from "@mui/icons-material";

import {
 getUserData,
 addFavorite,
 removeFavorite,
 likeRecipe,
 unlikeRecipe,
} from "../../../../data/UserData.js";

export const ViewRecipe = () => {
 const nav = useNavigate();
 const location = useLocation();

 const [isLiked, setIsLiked] = useState(false);
 const [likes, setLikes] = useState([]);
 const [isFavorite, setIsFavorite] = useState([]);
 const [isCurrentFavorite, setIsCurrentFavorite] = useState(false);

 const {
  id,
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
 const [analyze, setAnalyze] = useState(false);
 useEffect(() => {
  const userData = getUserData();
  setIsFavorite(userData.favorites);
  setLikes(userData.likes);

  const isFavoriteRecipe = userData.favorites.some((fav) => fav.id === id);
  const isLikedRecipe = userData.likes.some((like) => like.id === id);
  
  setIsCurrentFavorite(isFavoriteRecipe);
  setIsLiked(isLikedRecipe);
 }, [id]);

 const toggleFavorite = () => {
  const newFavorite = {
   id,
   title,
   author,
   category,
   description,
   difficulty,
   time,
   img_path,
   ingredients,
   instructions,
  };

  const userData = getUserData();

  if (isCurrentFavorite) {
   // Remove favorite
   removeFavorite(id);
   setIsFavorite(userData.favorites.filter((fav) => fav.id !== id));
   setIsCurrentFavorite(false);
  } else {
   // Add favorite while preserving existing favorites
   addFavorite(newFavorite);
   setIsFavorite([...userData.favorites, newFavorite]);
   setIsCurrentFavorite(true);
  }
 };

 const toggleLike = () => {
  const likedRecipe = {
   id,
   title,
   author,
   category,
   description,
   difficulty,
   time,
   img_path,
   ingredients,
   instructions,
  };

  const userData = getUserData();

  if (isLiked) {
   // Remove like
   unlikeRecipe(id);
   setLikes(userData.likes.filter((like) => like.id !== id));
   setIsLiked(false);
  } else {
   // Add like while preserving existing likes
   likeRecipe(likedRecipe);
   setLikes([...userData.likes, likedRecipe]);
   setIsLiked(true);
  }
 };

 return (
  <Layout>
   <motion.p
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    onClick={() => nav(-1)}
    className="font-light text-xs cursor-pointer text-orange-500"
   >
    Back
   </motion.p>
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-4 md:p-8 rounded-xl mt-5"
   >
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.2 }}
     className="flex flex-row items-center justify-between"
    >
     <div>
      <motion.h1
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.3 }}
       className="text-xl md:text-2xl font-bold"
      >
       {title}
      </motion.h1>
      <motion.p
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.4 }}
       onClick={() => setAuthorModal(true)}
       className="cursor-pointer hover:text-red-500"
      >
       Author: {author}
      </motion.p>
     </div>
     <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="flex items-center gap-1"
     >
      <div className="rounded-lg flex items-center justify-center">
       <Tooltip title="Add to Favorites" onClick={toggleFavorite}>
        <IconButton>
         {isCurrentFavorite ? (
          <BookmarkIcon className="text-yellow-300" fontSize="medium" />
         ) : (
          <BookmarkBorderIcon className="text-yellow-300" fontSize="medium" />
         )}
        </IconButton>
       </Tooltip>
      </div>
      <div className="rounded-lg flex items-center justify-center">
       <Tooltip title="Like" onClick={toggleLike}>
        <IconButton>
         {isLiked ? (
          <Favorite className="text-red-500" fontSize="small" />
         ) : (
          <FavoriteBorderOutlinedIcon
           className="text-red-500"
           fontSize="small"
          />
         )}
        </IconButton>
       </Tooltip>
      </div>
     </motion.div>
    </motion.div>

    <motion.hr
     initial={{ scaleX: 0 }}
     animate={{ scaleX: 1 }}
     transition={{ delay: 0.5 }}
     className="mt-3"
    />

    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.6 }}
     className="mt-3"
    >
     <h1 className="font-medium text-md">Description</h1>
     <p className="text-xs font-light text-justify">{description}</p>
    </motion.div>

    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.7 }}
     className="mt-2"
    >
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
    </motion.div>

    <motion.div
     initial={{ opacity: 0, scale: 0.95 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ delay: 0.8 }}
     className="mt-5"
    >
     <div className="w-full h-[300px] md:h-[500px] bg-gray-200 rounded">
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
    </motion.div>

    <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.9 }}
     className="flex flex-col md:flex-row items-start justify-between gap-3"
    >
     {/* Ingredients Section */}
     <motion.div className="space-y-2 mt-6 w-full">
      <h1 className="text-sm font-medium">Ingredients</h1>
      <hr className="my-2" />
      {ingredients.map((data, index) => (
       <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 + index * 0.1 }}
        className="h-10 border rounded bg-white text-xs flex items-center justify-start px-4"
       >
        <p>{data}</p>
       </motion.div>
      ))}
     </motion.div>

     {/* Instructions Section */}
     <motion.div className="space-y-2 mt-6 w-full">
      <h1 className="text-sm font-medium">Instructions</h1>
      <hr className="my-2" />
      {instructions.map((data, index) => (
       <motion.div
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 + index * 0.1 }}
        className="h-10 border rounded bg-white text-xs flex items-center justify-start px-4"
       >
        <h1>{data}</h1>
       </motion.div>
      ))}
     </motion.div>
    </motion.div>

    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 1.2 }}
     className="mt-5 flex items-center justify-center gap-2"
    >
     <button
      onClick={() => setAnalyze(true)}
      className="text-mainblue text-xs font-medium"
     >
      Analyze Nutrition✨
     </button>
     <button className="bg-mainblue text-white text-xs h-10 px-4 rounded">
      Download Recipe
     </button>
    </motion.div>
   </motion.div>
   <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.3 }}
    className="mt-5"
   >
    <AiSuggestions />
   </motion.div>
   <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4 }}
    className="mt-8"
   >
    <CommentsCard />
   </motion.div>
   <AnimatePresence>
    {authorModal && (
     <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
     >
      <AuthorProfile setAuthorModal={setAuthorModal} author={author} />
     </motion.div>
    )}
   </AnimatePresence>
   <AnimatePresence>
    {favModal && (
     <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
     >
      <AddFavorite setFavModal={setFavModal} />
     </motion.div>
    )}
   </AnimatePresence>
   <AnimatePresence>
    {analyze && (
     <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
     >
      <AnalyzeRecipe setAnalyze={setAnalyze} />
     </motion.div>
    )}
   </AnimatePresence>
  </Layout>
 );
};
