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
import { toast } from "sonner";
import { Toaster } from "sonner";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  cuisine,
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
   ratings,
   reviews,
   dateCreated,
   likers,
   downloads,
   views,
   cuisine,
   shares,
  };

  const userData = getUserData();

  if (isCurrentFavorite) {
   // Remove favorite
   removeFavorite(id);
   setIsFavorite(userData.favorites.filter((fav) => fav.id !== id));
   setIsCurrentFavorite(false);
   toast.success("Recipe removed from favorites");
  } else {
   // Add favorite while preserving existing favorites
   addFavorite(newFavorite);
   setIsFavorite([...userData.favorites, newFavorite]);
   setIsCurrentFavorite(true);
   
   toast.custom((t) => (
     <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full border border-gray-100">
       <div className="flex items-start gap-3">
         {/* Recipe Image */}
         <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
           <img 
             src={img_path || '/default-recipe.jpg'} 
             alt={title}
             className="w-full h-full object-cover"
           />
         </div>

         <div className="flex-1">
           {/* Success Message */}
           <div className="flex items-center gap-2 mb-1">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <p className="text-sm font-medium text-gray-800">
               Added to Favorites
             </p>
           </div>

           {/* Recipe Title */}
           <p className="text-xs text-gray-600 line-clamp-1">
             {title}
           </p>

           {/* Action Buttons */}
           <div className="flex items-center gap-2 mt-2">
             <button
               onClick={() => nav("/favorite-recipes")}
               className="text-xs px-3 py-1.5 bg-mainblue text-white rounded-lg
                         hover:bg-mainblue/90 transition-colors duration-200"
             >
               View Favorites
             </button>
             <button
               onClick={() => toast.dismiss(t)}
               className="text-xs px-3 py-1.5 text-gray-600 hover:text-gray-800
                         transition-colors duration-200"
             >
               Dismiss
             </button>
           </div>
         </div>

         {/* Close Button */}
         <button
           onClick={() => toast.dismiss(t)}
           className="text-gray-400 hover:text-gray-600 transition-colors"
         >
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
           </svg>
         </button>
       </div>
     </div>
   ), {
     duration: 4000,
     position: "top-center",
   });
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
   ratings,
   reviews,
   dateCreated,
   likers,
   downloads,
   views,
   cuisine,
   shares,
  };

  const userData = getUserData();

  if (isLiked) {
   // Remove like
   unlikeRecipe(id);
   setLikes(userData.likes.filter((like) => like.id !== id));
   setIsLiked(false);
   toast.success("Like removed");
  } else {
   // Add like while preserving existing likes
   likeRecipe(likedRecipe);
   setLikes([...userData.likes, likedRecipe]);
   setIsLiked(true);
   toast.success("Recipe liked!");
  }
 };

 const handleDownload = async () => {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Add recipe title
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(title, 20, 20);

    // Add author and date
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`By: ${author}`, 20, 30);
    pdf.text(`Created: ${formattedDate}`, 20, 37);

    // Add recipe details
    pdf.setFont('helvetica', 'bold');
    pdf.text('Recipe Details', 20, 50);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Category: ${category}`, 25, 57);
    pdf.text(`Cuisine: ${cuisine}`, 25, 64);
    pdf.text(`Difficulty: ${difficulty}`, 25, 71);
    pdf.text(`Preparation Time: ${time}`, 25, 78);

    // Add description
    pdf.setFont('helvetica', 'bold');
    pdf.text('Description', 20, 91);
    pdf.setFont('helvetica', 'normal');
    const descriptionLines = pdf.splitTextToSize(description, 170);
    pdf.text(descriptionLines, 20, 98);

    // Add ingredients
    let currentY = 120;
    pdf.setFont('helvetica', 'bold');
    pdf.text('Ingredients', 20, currentY);
    pdf.setFont('helvetica', 'normal');
    currentY += 7;
    ingredients.forEach((ingredient) => {
      pdf.text(`• ${ingredient}`, 25, currentY);
      currentY += 7;
    });

    // Add instructions
    currentY += 5;
    pdf.setFont('helvetica', 'bold');
    pdf.text('Instructions', 20, currentY);
    pdf.setFont('helvetica', 'normal');
    currentY += 7;
    instructions.forEach((instruction, index) => {
      const instructionLines = pdf.splitTextToSize(`${index + 1}. ${instruction}`, 165);
      pdf.text(instructionLines, 25, currentY);
      currentY += (instructionLines.length * 7) + 3;

      // Add new page if needed
      if (currentY > 270) {
        pdf.addPage();
        currentY = 20;
      }
    });

    // Add nutritional information
    if (currentY > 220) {
      pdf.addPage();
      currentY = 20;
    }
    
    pdf.setFont('helvetica', 'bold');
    pdf.text('Nutritional Information', 20, currentY);
    currentY += 7;
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Calories: 230`, 25, currentY);
    pdf.text(`Total Fat: 28.6g (44%)`, 25, currentY + 7);
    pdf.text(`Protein: 6.3g`, 25, currentY + 14);
    pdf.text(`Carbohydrates: 22.4g`, 25, currentY + 21);

    // Add recommendations
    if (currentY > 220) {
      pdf.addPage();
      currentY = 20;
    } else {
      currentY += 35;
    }
    
    pdf.setFont('helvetica', 'bold');
    pdf.text('AI Recommendations', 20, currentY);
    pdf.setFont('helvetica', 'normal');
    const recommendations = [
      "• Use fresh ingredients for better flavor",
      "• Store leftovers in an airtight container",
      "• Can be prepared ahead and reheated",
    ];
    currentY += 7;
    recommendations.forEach((rec) => {
      pdf.text(rec, 25, currentY);
      currentY += 7;
    });

    // Save the PDF
    pdf.save(`${title.toLowerCase().replace(/\s+/g, '-')}-recipe.pdf`);
    
    // Show success toast
    toast.success('Recipe downloaded successfully!');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    toast.error('Failed to download recipe. Please try again.');
  }
};

 return (
  <Layout>
   <Toaster richColors position="top-center" />
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
      <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs font-medium">
       {cuisine}
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
       onClick={handleDownload}
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
