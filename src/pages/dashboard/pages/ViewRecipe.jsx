import { useNavigate, useLocation } from "react-router-dom";
import { Layout } from "../Layout";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { AuthorProfile } from "../../../components/Modals/AuthorProfile";

export const ViewRecipe = () => {
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
 } = location.state; // Retrieve data passed from the previous page
 const [authorModal, setAuthorModal] = useState(false);

 return (
  <Layout>
   <div>
    <p onClick={() => nav(-1)} className="font-light text-xs cursor-pointer">
     Back
    </p>
    <div className="flex items-center justify-between">
     <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p onClick={() => setAuthorModal(true)} className="cursor-pointer">
       Author: {author}
      </p>
     </div>
     <div>
      <div className="bg-red-100 rounded-lg h-10 w-10 flex items-center justify-center">
       <CiHeart size={25} className="text-red-500" />
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
     <div className="w-full rounded h-[500px] bg-gray-100">
      {img_path ? (
       <img
        src={img_path}
        alt={title}
        className="h-full w-full object-cover rounded"
       />
      ) : (
       <div className="h-[500px] bg-gray-200 flex items-center justify-center">
        No Image Available
       </div>
      )}
     </div>
    </div>
   </div>
   {authorModal && <AuthorProfile setAuthor={setAuthorModal} />}
  </Layout>
 );
};
