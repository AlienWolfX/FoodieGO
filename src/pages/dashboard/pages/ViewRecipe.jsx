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
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";

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
  ratings,
  reviews = 128,
  dateCreated,
  likers,
  downloads,
  views,
  shares,
 } = location.state;

 const formattedDate = new Date(dateCreated).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
 });

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
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.5 }}
     className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600"
    >
     <div className="flex items-center gap-1.5">
      <VisibilityIcon sx={{ fontSize: 14 }} className="text-gray-400" />
      <span>{views} views</span>
     </div>

     <span className="text-gray-300">•</span>

     <div className="flex items-center gap-1.5">
      <FavoriteIcon sx={{ fontSize: 14 }} className="text-gray-400" />
      <span>{likers} likes</span>
     </div>

     <span className="text-gray-300">•</span>

     <div className="flex items-center gap-1.5">
      <DownloadIcon sx={{ fontSize: 14 }} className="text-gray-400" />
      <span>{downloads} downloads</span>
     </div>
    </motion.div>

    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.5 }}
     className="mt-6 mb-6"
    ></motion.div>

    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.5 }}
     className="mt-4 flex flex-wrap items-center gap-6"
    >
     <div className="flex items-center gap-2">
      <div className="flex items-center">
       {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
         {star <= Math.floor(ratings) ? (
          <StarIcon className="text-yellow-400 text-lg" />
         ) : (
          <StarBorderIcon className="text-yellow-400 text-lg" />
         )}
        </span>
       ))}
      </div>
      <div className="text-sm text-gray-600">
       <span className="font-medium">{ratings}</span>
       <span className="mx-1">•</span>
       <span>{reviews} reviews</span>
      </div>
     </div>

     <div className="flex items-center gap-2 text-gray-600">
      <CalendarTodayIcon className="text-gray-400 text-sm" />
      <span className="text-sm">Created {formattedDate}</span>
     </div>

     <div className="flex items-center gap-2 text-gray-600">
      <AccessTimeIcon className="text-gray-400 text-sm" />
      <span className="text-sm">{time}</span>
     </div>
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
     className="mt-6"
    >
     <div className="flex flex-wrap items-center gap-3">
      <span className="px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-xs font-medium">
       {category}
      </span>
      <span
       className={`px-4 py-2 rounded-full text-xs font-medium ${
        difficulty.toLowerCase() === "easy"
         ? "bg-green-50 text-green-600"
         : difficulty.toLowerCase() === "medium"
         ? "bg-yellow-50 text-yellow-600"
         : "bg-red-50 text-red-600"
       }`}
      >
       {difficulty}
      </span>
      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
       {time}
      </span>
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
     className="mt-5 flex items-center justify-center gap-3"
    >
     <Tooltip title="Analyze recipe nutrition">
      <button
       onClick={() => setAnalyze(true)}
       className="flex items-center gap-2 px-6 py-2.5 text-mainblue text-sm font-medium 
                 hover:bg-blue-50 rounded-lg transition-all duration-200"
      >
       <span>Analyze Nutrition</span>
       <span className="text-lg">✨</span>
      </button>
     </Tooltip>

     <Tooltip title="Download recipe">
      <button
       className="flex items-center gap-2 bg-mainblue hover:bg-blue-600 
                        text-white text-sm px-6 py-2.5 rounded-lg 
                        transition-all duration-200 group"
      >
       <DownloadIcon className="text-white group-hover:scale-110 transition-transform duration-200" />
       <span>Download Recipe</span>
       <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
        {downloads}
       </span>
      </button>
     </Tooltip>
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
