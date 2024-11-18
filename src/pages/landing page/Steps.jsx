import img1 from "/steps/img1.png";
import img2 from "/steps/img2.png";
import img3 from "/steps/img3.png";

export const Steps = () => {
 return (
  <div
   id="howitworks"
   className="h-auto lg:h-screen flex flex-col items-center justify-center pt-10 bg-gray-100"
  >
   {/* Title for the steps section */}
   <h1 className="text-3xl md:text-4xl font-bold mb-5">SHARING PLATFORM</h1>
   <p className="text-lg md:text-xl mb-10">
    Let the world taste your flavors in cooking
   </p>

   {/* Steps layout */}
   <div className="flex flex-col md:flex-row items-center justify-center">
    {/* Step 1 */}
    <div className="flex flex-col items-center p-4">
     <img
      src={img1}
      alt="Create Account"
      className="w-full md:w-[380px] bg-white rounded-md p-4 border"
     />
     <p className="text-center mt-2 text-sm md:text-base">Create Account</p>
     <div className="w-8 h-8 bg-mainblue text-white rounded-full flex items-center justify-center mt-2">
      1
     </div>
    </div>

    {/* Dashed line to Step 2 */}
    <div className="flex items-center">
     <div className="hidden md:block w-16 h-0 border-t-2 border-dashed border-mainblue"></div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center p-4">
     <img
      src={img2}
      alt="Create Recipe"
      className="w-full md:w-[380px] bg-white rounded-md p-4 border"
     />
     <p className="text-center mt-2 text-sm md:text-base">Create Recipe</p>
     <div className="w-8 h-8 bg-mainblue text-white rounded-full flex items-center justify-center mt-2">
      2
     </div>
    </div>

    {/* Dashed line to Step 3 */}
    <div className="flex items-center">
     <div className="hidden md:block w-16 h-0 border-t-2 border-dashed border-mainblue"></div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center p-4">
     <img
      src={img3}
      alt="Share Recipe"
      className="w-full md:w-[380px] bg-white rounded-md p-4 border"
     />
     <p className="text-center mt-2 text-sm md:text-base">Share Recipe</p>
     <div className="w-8 h-8 bg-mainblue text-white rounded-full flex items-center justify-center mt-2">
      3
     </div>
    </div>
   </div>
  </div>
 );
};
