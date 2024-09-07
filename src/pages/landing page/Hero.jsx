import { Searchbar } from "../../components/Searchbar";

export const Hero = () => {
 return (
  <>
   <div className="flex flex-col items-center justify-center h-screen">
    <div className="font-black text-5xl text-center leading-[50px]">
     <h1>Foodie on the Go</h1>
     <h1>With your Kodigo</h1>
     <div className="pt-3">
      <p className="text-[20px] font-light text-center">
       Discover, Save, Share, and Savor: Explore Recipes, Connect with Cooks,
       and Review Delicious Dishes.
      </p>
     </div>
    </div>
    <div className="pt-5">
     <Searchbar />
    </div>
   </div>
  </>
 );
};
