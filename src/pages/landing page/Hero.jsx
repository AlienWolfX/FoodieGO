import { Searchbar } from "../../components/Searchbar";
import threePlateFood from "/threePlateFood.png";

export const Hero = () => {
 return (
  <>
   <div
    id="hero"
    className="relative md:flex items-center justify-center h-auto lg:h-screen bg-mainbg pt-12"
   >
    <div className="mx-auto p-10 md:mx-32 md:flex items-center justify-center md:gap-14">
     <div className="w-full max-w-lg md:max-w-[500px]">
      <div className="font-black text-[#313638] text-3xl md:text-5xl leading-[50px]">
       <h1>Foodie on the Go With your Kodigo</h1>
       <div className="pt-3 leading-6">
        <p className="text-base md:text-[20px] font-light">
         Discover, Save, Share, and Savor: Explore Recipes, Connect with Cooks,
         and Review Delicious Dishes.
        </p>
       </div>
      </div>
      <div className="pt-5">
       <Searchbar />
      </div>
      <div className="mt-10 flex flex-row items-center justify-start md:justify-start gap-1 md:gap-4">
       <div className="bg-white px-2 sm:px-6 py-2 border rounded-md flex flex-col items-center">
        <h1 className="text-md font-semibold text-red-500">12k</h1>
        <p className="text-sm font-light text-gray-500">Users</p>
       </div>
       <div className="bg-white px-2 sm:px-6 py-2 border rounded-md flex flex-col items-center">
        <h1 className="text-md font-semibold text-red-500">12k</h1>
        <p className="text-sm font-light text-gray-500">Recipes</p>
       </div>
       <div className="bg-white px-2 sm:px-6 py-2 border rounded-md flex flex-col items-center">
        <h1 className="text-md font-semibold text-red-500">12k</h1>
        <p className="text-sm font-light text-gray-500">Downloads</p>
       </div>
      </div>
     </div>
     <img
      src={threePlateFood}
      alt=""
      className="w-full hidden z-10 lg:block max-w-xs lg:max-w-[430px] xl:w-[500px]"
     />
    </div>
   </div>
   {/* background divider image  */}
   <div className="custom-shape-divider-bottom-1730098822 hidden lg:block">
    <svg
     data-name="Layer 1"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1200 120"
     preserveAspectRatio="none"
    >
     <path
      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
      className="shape-fill"
     ></path>
    </svg>
   </div>
  </>
 );
};
