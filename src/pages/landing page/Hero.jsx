import { Searchbar } from "../../components/Searchbar";
import threePlateFood from "/public/threePlateFood.png";

export const Hero = () => {
 return (
  <>
   <div
    id="hero"
    className="relative flex items-center justify-center h-screen bg-mainbg pt-12"
   >
    <div className="flex items-center justify-center mx-32">
     <div className="z-10 w-[800px]">
      <div className="font-black text-[#313638] text-5xl leading-[50px]">
       <h1>Foodie on the Go</h1>
       <h1>With your Kodigo</h1>
       <div className="pt-3 leading-6">
        <p className="text-[20px] font-light">
         Discover, Save, Share, and Savor: Explore Recipes, Connect with Cooks,
         and Review Delicious Dishes.
        </p>
       </div>
      </div>
      <div className="pt-5">
       <Searchbar />
      </div>
      <div className="mt-10 flex items-center gap-4 z-10">
       <div className="bg-white px-6 py-2 border rounded-md flex flex-col">
        <h1 className="text-md font-semibold text-red-500">12k</h1>
        <p className="text-sm font-light text-gray-500">Users</p>
       </div>
       <div className="bg-white px-6 py-2 border rounded-md flex flex-col">
        <h1 className="text-md font-semibold text-red-500">12k</h1>
        <p className="text-sm font-light text-gray-500">Recipes</p>
       </div>
       <div className="bg-white px-6 py-2 border rounded-md flex flex-col">
        <h1 className="text-md font-semibold text-red-500">12k</h1>
        <p className="text-sm font-light text-gray-500">Downloads</p>
       </div>
      </div>
     </div>
     <img src={threePlateFood} alt="" className="w-[500px] z-10" />
    </div>
   </div>
   {/* background divider image  */}
   <div class="custom-shape-divider-bottom-1730098822">
    <svg
     data-name="Layer 1"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1200 120"
     preserveAspectRatio="none"
    >
     <path
      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
      class="shape-fill"
     ></path>
    </svg>
   </div>
  </>
 );
};
