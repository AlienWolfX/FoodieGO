import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout";
import { CiHeart } from "react-icons/ci";
import { buildUrl } from "../../../../utils/buildUrl";
import { useState } from "react";
import { AuthorProfile } from "../../../components/Modals/AuthorProfile";

export const ViewRecipe = () => {
 const nav = useNavigate();
 const [data, setData] = useState("");
 const [author, setAuthor] = useState(false);

 // api for getting the recipe information

 const getRecipeInfo = async () => {
  const res = await fetch(buildUrl("/get-recipe"), {
   method: "GET",
   headers: {
    "Content-Type": "application/json",
   },
  });
  const data = await res.json();
  if (res.ok) {
   setData(data.data);
  }
 };

 return (
  <Layout>
   <div>
    <p onClick={() => nav(-1)} className="font-light text-xs cursor-pointer">
     Back
    </p>
    <div className="flex items-center justify-between">
     <div>
      <h1 className="text-2xl font-bold">Adobong Manok</h1>
      <p onClick={() => setAuthor(true)} className="cursor-pointer">
       Author: Allen Gabrielle Cruiz
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
     <p className="text-xs font-light text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, id minima
      cupiditate minus sapiente pariatur repellat eos provident maxime rem
      nesciunt! Repellat obcaecati ipsam cumque corrupti, non dolore animi
      numquam. Explicabo voluptates repellat quaerat accusamus neque recusandae
      earum facere, id et ut? Aliquam omnis voluptates a sit vero nulla
      voluptate atque eos culpa minus quidem, dolor nisi quae quas consectetur.
      Dignissimos hic temporibus ab? Id suscipit odio, corporis asperiores
      nesciunt distinctio illo quo repellat maiores iure harum eaque accusamus
      molestiae error libero laudantium adipisci fugiat ex cumque consectetur
      at! Molestias.
     </p>
    </div>
    <div className="mt-2">
     <p className="text-sm font-light">Tags</p>
     <div className="flex items-center gap-2 mt-2">
      <div className="px-4 h-8 rounded border flex items-center cursor-pointer justify-center">
       <h1 className="text-xs font-light">Category: Dinner</h1>
      </div>
      <div className="px-4 h-8 rounded border flex items-center cursor-pointer justify-center">
       <h1 className="text-xs font-light">Difficulty: Easy</h1>
      </div>
      <div className="px-4 h-8 rounded border flex items-center cursor-pointer justify-center">
       <h1 className="text-xs font-light">Time: 20m</h1>
      </div>
     </div>
    </div>
    <div className="mt-5">
     <div className="w-full rounded h-[500px] bg-gray-100"></div>
    </div>
   </div>
   {author ? <AuthorProfile setAuthor={setAuthor} /> : ""}
  </Layout>
 );
};
