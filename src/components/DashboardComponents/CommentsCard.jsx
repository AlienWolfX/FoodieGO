import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "sonner";
import { useProfile } from "../../context/ProfileContext";

export const CommentsCard = () => {
 const { profilePicture } = useProfile();
 const [comments, setComments] = useState([
  {
   name: "Lenor James Jamero",
   email: "lenorjamero@gmail.com",
   text: "This recipe is amazing! I loved the flavors.",
   rating: 5,
   date: "2024-03-15T10:30:00",
   avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=LenorJames",
  },
  {
   name: "Alex Smith",
   email: "alexsmith@example.com",
   text: "I tried this recipe and it turned out great!",
   rating: 4,
   date: "2024-03-14T15:45:00",
   avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=AlexSmith",
  },
  {
   name: "Jamie Doe",
   email: "jamiedoe@example.com",
   text: "I didn't have all the ingredients, but it still worked out!",
   rating: 3,
   date: "2024-03-13T12:00:00",
   avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=JamieDoe",
  },
  {
   name: "Chris Johnson",
   email: "chrisjohnson@example.com",
   text: "A fantastic recipe! Will make it again.",
   rating: 5,
   date: "2024-03-12T18:30:00",
   avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=ChrisJohnson",
  },
 ]);

 const [newComment, setNewComment] = useState({
  name: "",
  email: "",
  text: "",
  rating: 0,
 });

 const [hoveredStar, setHoveredStar] = useState(0);

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewComment({ ...newComment, [name]: value });
 };

 const handleStarClick = (rating) => {
  setNewComment({ ...newComment, rating });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (
   newComment.name &&
   newComment.email &&
   newComment.text &&
   newComment.rating > 0
  ) {
   const commentToAdd = {
    ...newComment,
    date: new Date().toISOString(),
    avatar: `https://api.dicebear.com/7.x/lorelei/svg?seed=${newComment.name.replace(
     /\s+/g,
     ""
    )}`,
   };

   setComments([commentToAdd, ...comments]); // Add new comment at the top
   setNewComment({ name: "", email: "", text: "", rating: 0 });
   toast.success("Comment posted successfully!");
  } else {
   toast.error("Please fill all fields and add a rating");
  }
 };

 const formatDate = (dateString) => {
  const options = {
   year: "numeric",
   month: "short",
   day: "numeric",
   hour: "2-digit",
   minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
 };

 return (
  <>
   <h1 className="text-lg font-medium">Food Review</h1>
   <div className="mb-4">
    <hr />
   </div>
   <div className="rounded-lg mt-2 flex flex-col md:flex-row gap-4">
    <div className="flex flex-col w-full">
     <h1 className="text-sm font-medium">Leave Comments</h1>
     <div className="w-full flex items-start gap-4 justify-between bg-white rounded-md border p-5 mt-2">
      <div className="bg-gray-100 h-10 w-10 min-h-[40px] min-w-[40px] rounded-full flex items-center justify-center">
       {newComment.name && (
        <img src={profilePicture} alt="" className="h-full w-full rounded-full" />
       )}
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
       <div className="flex items-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
         <FaStar
          key={star}
          className={`cursor-pointer text-lg transition-colors ${
           star <= (hoveredStar || newComment.rating)
            ? "text-yellow-400"
            : "text-gray-300"
          }`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
         />
        ))}
       </div>

       <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={newComment.name}
        onChange={handleInputChange}
        className="border rounded px-4 py-2 outline-none text-xs font-light"
        required
       />
       <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={newComment.email}
        onChange={handleInputChange}
        className="border rounded px-4 py-2 outline-none text-xs font-light"
        required
       />
       <textarea
        name="text"
        placeholder="Leave a comment here..."
        value={newComment.text}
        onChange={handleInputChange}
        className="border rounded px-4 py-2 outline-none h-20 text-xs font-light"
        required
       />
       <button
        type="submit"
        className="bg-mainblue text-xs text-white font-medium rounded px-4 py-2 mt-2 hover:bg-blue-600 transition"
       >
        Submit Comment
       </button>
      </form>
     </div>
    </div>

    <div className="w-full">
     <h1 className="text-sm font-medium">
      Comments{" "}
      <span className="text-xs font-light text-gray-500">
       ({comments.length})
      </span>
     </h1>

     <div className="mt-2 space-y-3">
      {comments.map((comment, index) => (
       <div
        className="bg-white flex items-start gap-3 border p-4 rounded-md"
        key={index}
       >
        <img
         src={comment.avatar}
         alt={comment.name}
         className="h-8 w-8 rounded-full"
        />

        <div className="flex-1">
         <div className="flex items-center justify-between">
          <h1 className="text-xs font-medium text-gray-700">{comment.name}</h1>
          <span className="text-xs text-gray-400">
           {formatDate(comment.date)}
          </span>
         </div>

         <div className="flex items-center gap-1 my-1">
          {[1, 2, 3, 4, 5].map((star) => (
           <FaStar
            key={star}
            className={`text-sm ${
             star <= comment.rating ? "text-yellow-400" : "text-gray-200"
            }`}
           />
          ))}
         </div>

         <p className="text-xs font-light text-gray-500">{comment.email}</p>
         <p className="text-xs text-gray-700 mt-1">{comment.text}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 );
};
