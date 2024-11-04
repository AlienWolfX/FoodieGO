import aboutImg from "/aboutImg.png";

export const About = () => {
 return (
  <>
   <div
    id="about"
    className="relative h-auto lg:h-screen flex items-center justify-center my-10 lg:my-0"
   >
    <div className="flex flex-col md:flex-row items-center justify-center mx-5 lg:mx-32 gap-10 md:gap-5 xl:gap-32">
     <div className="flex items-center justify-center rounded-md z-10 bg-white shadow-lg p-2">
      <img src={aboutImg} alt="" className="w-full lg:w-[340px] rounded-md" />
     </div>
     <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
      <div className="w-full lg:w-[500px] bg-white border p-6 md:p-8 rounded-md shadow">
       <p className="text-sm md:text-xs font-medium mb-4">
        Welcome to Foodie Go, where culinary dreams come to life! Our journey
        began with a simple passion for food and a desire to share it with the
        world.
       </p>
       <p className="text-sm md:text-xs font-medium mb-4">
        Food has been a universal language, bringing people together across
        cultures and generations. At Foodie Go, we believe that every recipe
        tells a story, and every meal is an opportunity to create lasting
        memories.
       </p>
       <p className="text-sm md:text-xs font-medium mb-4">
        Our platform is designed for food lovers, home cooks, and aspiring chefs
        alike. Whether you’re looking to discover new recipes, share your
        culinary creations, or connect with fellow food enthusiasts, Foodie Go
        is your go-to destination.
       </p>
       <p className="text-sm md:text-xs font-medium mb-4">
        Join us on this delicious journey as we explore flavors from around the
        globe, celebrate diverse cuisines, and inspire each other to cook,
        share, and enjoy food together. Let’s make every meal a celebration
       </p>
      </div>
     </div>
    </div>
    {/* background divider */}
    <div className="custom-shape-divider-top-1730107130 hidden lg:block">
     <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
     >
      <path
       d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
       className="shape-fill"
      ></path>
     </svg>
    </div>
   </div>
  </>
 );
};
