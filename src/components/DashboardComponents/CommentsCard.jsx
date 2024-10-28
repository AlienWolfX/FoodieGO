import React, { useState } from "react";

export const CommentsCard = () => {
 const [comments, setComments] = useState([
  {
   name: "Lenor James Jamero",
   email: "lenorjamero@gmail.com",
   text: "This recipe is amazing! I loved the flavors.",
  },
  {
   name: "Alex Smith",
   email: "alexsmith@example.com",
   text: "I tried this recipe and it turned out great!",
  },
  {
   name: "Jamie Doe",
   email: "jamiedoe@example.com",
   text: "I didn't have all the ingredients, but it still worked out!",
  },
  {
   name: "Chris Johnson",
   email: "chrisjohnson@example.com",
   text: "A fantastic recipe! Will make it again.",
  },
 ]);

 const [newComment, setNewComment] = useState({
  name: "",
  email: "",
  text: "",
 });

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewComment({ ...newComment, [name]: value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (newComment.name && newComment.email && newComment.text) {
   setComments([...comments, newComment]);
   setNewComment({ name: "", email: "", text: "" }); // Reset the input fields
  }
 };

 return (
  <>
   {/* Header for the comments section */}
   <h1>Like the Recipe? Leave a comment</h1>
   <div className="bg-white p-4 rounded-lg shadow mt-2 flex items-start gap-4">
    {/* Form for adding a new comment */}
    <div className="w-full flex items-start gap-4 justify-between bg-white rounded-md border p-5">
     <div className="bg-gray-100 h-10 w-10 rounded-full"></div>
     <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
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
    <div className="w-full">
     {/* Comments section header */}
     <h1 className="text-sm font-medium">
      Comments{" "}
      <span className="text-xs font-light text-gray-500">
       {"(" + comments.length + ")"}
      </span>
     </h1>
     <div className="mt-2">
      {/* Mapping over comments to display each one */}
      {comments.map((comment, index) => (
       <div
        className="flex items-start gap-2 border mt-2 p-4 rounded-md"
        key={index}
       >
        <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
        <div className="flex flex-col">
         {/* Commenter's name */}
         <h1 className="text-xs font-medium text-gray-500">{comment.name}</h1>
         {/* Commenter's email */}
         <p className="text-xs font-light text-gray-500">{comment.email}</p>
         {/* Comment text */}
         <p className="text-xs font-light text-gray-700">{comment.text}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 );
};
