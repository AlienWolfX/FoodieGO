import { Searchbar } from "../../components/Searchbar";

export const Hero = () => {
 return (
  <>
   <div className="flex items-center justify-center h-screen">
    <div>
     <div className="font-black text-5xl text-center leading-[40px]">
      <h1>Foodie on the Go</h1>
      <h1>With your Kodigo</h1>
      <div className="pt-3">
       <p className="text-[20px] font-light">
        Explore, Save, Share, Interact, Review foods
       </p>
      </div>
     </div>
     <div className="pt-5">
      <Searchbar />
     </div>
    </div>
   </div>
  </>
 );
};
