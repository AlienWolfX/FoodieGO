import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout";
import { CiHeart } from "react-icons/ci";

export const ViewRecipe = () => {
 const nav = useNavigate();

 return (
  <Layout>
   <div>
    <p onClick={() => nav(-1)} className="font-light text-xs cursor-pointer">
     Back
    </p>
    <div className="flex items-center justify-between">
     <div>
      <h1 className="text-2xl font-bold">Food Title</h1>
      <p>Author: Allen Gabrielle Cruiz</p>
     </div>
     <div>
      <div className="bg-red-100 rounded-lg h-10 w-10 flex items-center justify-center">
       <CiHeart size={25} className="text-red-500" />
      </div>
     </div>
    </div>
    <div className="mt-5">
     <div className="w-full rounded h-[500px] bg-gray-100"></div>
    </div>
   </div>
  </Layout>
 );
};
