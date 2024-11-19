import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import { AuthorProfile } from "./Modals/AuthorProfile";
import { LoginFirst } from "./LoginFirst";
import { AiSuggestions } from "./DashboardComponents/AiSuggestions";
import { CommentsCard } from "./DashboardComponents/CommentsCard";
import { useState } from "react";
import { Navbar } from "./Navbar";

export const RecipeCard = () => {
 const nav = useNavigate();
 const location = useLocation();
 const [authorModal, setAuthorModal] = useState(false);
 const [loginModal, setLoginModal] = useState(false);

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
  ratings = 4.5,
  reviews = 128,
  dateCreated = "2024-03-15",
  likes = 342,
  downloads = 156,
  views = 1205,
  shares = 89,
 } = location.state;

 const formattedDate = new Date(dateCreated).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
 });

 return (
  <>
   <Navbar />
   <div className="bg-mainbg min-h-screen">
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-10 md:py-20">
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
      {/* Title and Actions Section */}
      <motion.div className="flex flex-row items-center justify-between">
       <div>
        <motion.h1 className="text-xl md:text-2xl font-bold">{title}</motion.h1>
        <motion.div className="flex items-center gap-2">
         <motion.p className="text-sm text-gray-600">
          By: {author.split(" ")[0]} •••
         </motion.p>
         <Tooltip title="Login to view author">
          <button
           onClick={() => setLoginModal(true)}
           className="text-xs text-mainblue hover:text-blue-600 transition-colors duration-200"
          >
           View Profile
          </button>
         </Tooltip>
        </motion.div>
       </div>
       <motion.div className="flex items-center gap-1">
        <Tooltip title="Login to add to favorites">
         <IconButton onClick={() => setLoginModal(true)}>
          <BookmarkBorderIcon className="text-yellow-300" fontSize="medium" />
         </IconButton>
        </Tooltip>
        <Tooltip title="Login to like">
         <IconButton onClick={() => setLoginModal(true)}>
          <FavoriteBorderOutlinedIcon
           className="text-red-500"
           fontSize="small"
          />
         </IconButton>
        </Tooltip>
       </motion.div>
      </motion.div>

      <motion.hr className="mt-3" />

      {/* Stats Section */}
      <motion.div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
       <div className="flex items-center gap-1.5">
        <VisibilityIcon sx={{ fontSize: 14 }} className="text-gray-400" />
        <span>{views.toLocaleString()} views</span>
       </div>
       <span className="text-gray-300">•</span>
       <div className="flex items-center gap-1.5">
        <FavoriteBorderOutlinedIcon
         sx={{ fontSize: 14 }}
         className="text-gray-400"
        />
        <span>{likes.toLocaleString()} likes</span>
       </div>
       <span className="text-gray-300">•</span>
       <div className="flex items-center gap-1.5">
        <DownloadIcon sx={{ fontSize: 14 }} className="text-gray-400" />
        <span>{downloads.toLocaleString()} downloads</span>
       </div>
       <span className="text-gray-300">•</span>
       <div className="flex items-center gap-1.5">
        <ShareIcon sx={{ fontSize: 14 }} className="text-gray-400" />
        <span>{shares.toLocaleString()} shares</span>
       </div>
      </motion.div>

      {/* Ratings and Meta Section */}
      <motion.div className="mt-4 flex flex-wrap items-center gap-6">
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

      {/* Description */}
      <motion.div className="mt-3">
       <h1 className="font-medium text-md">Description</h1>
       <p className="text-xs md:text-sm font-light text-justify">
        {description}
       </p>
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

      {/* Image */}
      <motion.div className="mt-5">
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
      </motion.div>

      {/* Ingredients and Instructions */}
      <motion.div className="flex flex-col lg:flex-row items-start justify-between gap-6 mt-6">
       {/* Ingredients */}
       <motion.div className="space-y-2 w-full">
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
       </motion.div>

       {/* Instructions */}
       <motion.div className="space-y-2 w-full">
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
       </motion.div>
      </motion.div>

      {/* Download Button */}
      <motion.div className="mt-5 flex items-center justify-center">
       <Tooltip title="Login to download recipe">
        <button
         onClick={() => setLoginModal(true)}
         className="flex items-center gap-2 bg-mainblue hover:bg-blue-600 
                  text-white text-sm px-6 py-2.5 rounded-lg 
                  transition-all duration-200 group"
        >
         <DownloadIcon className="text-white group-hover:scale-110 transition-transform duration-200" />
         <span>Download Recipe</span>
         <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
          {downloads.toLocaleString()}
         </span>
        </button>
       </Tooltip>
      </motion.div>

      {/* AI Suggestions */}
      <motion.div className="mt-5">{/* <AiSuggestions /> */}</motion.div>

      {/* Comments */}
      <motion.div className="mt-8">{/* <CommentsCard /> */}</motion.div>

      {/* Modals */}
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
       {loginModal && (
        <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.95 }}
         transition={{ duration: 0.2 }}
        >
         <LoginFirst setLoginModal={setLoginModal} />
        </motion.div>
       )}
      </AnimatePresence>
     </motion.div>
    </div>
   </div>
  </>
 );
};
