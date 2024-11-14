import { motion } from "framer-motion";
import { Searchbar } from "../../components/Searchbar";
import threePlateFood from "/threePlateFood.png ";
import { FiUsers, FiBook, FiDownload } from "react-icons/fi";

export const Hero = () => {
 const stats = [
  { label: "Users", value: "12k", icon: FiUsers },
  { label: "Recipes", value: "12k", icon: FiBook },
  { label: "Downloads", value: "12k", icon: FiDownload },
 ];

 return (
  <div className="relative bg-gradient-to-b from-mainbg to-white md:h-screen isolate">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
     <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center justify-between">
      {/* Left Column */}
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 }}
       className="max-w-xl z-10"
      >
       <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
        Foodie on the Go
        <span className="text-mainblue"> With your Kodigo</span>
       </h1>

       <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg text-gray-600 leading-relaxed"
       >
        Discover, Save, Share, and Savor: Explore Recipes, Connect with Cooks,
        and Review Delicious Dishes.
       </motion.p>

       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 z-[99999]"
       >
        <Searchbar />
       </motion.div>

       {/* Stats */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10"
       >
        {stats.map((stat, index) => (
         <div
          key={stat.label}
          className="bg-white border p-4 rounded-lg flex items-center justify-between"
         >
          <div className="flex items-start gap-2">
           <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
            <stat.icon className="h-6 w-6 text-mainblue" />
           </div>
           <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800">
             {stat.value}
            </h2>
            <p className="text-sm text-gray-500">{stat.label}</p>
           </div>
          </div>
         </div>
        ))}
       </motion.div>
      </motion.div>

      {/* Right Column */}
      <motion.div className="w-full flex items-center justify-center z-10">
       <img
        src={threePlateFood}
        alt=""
        className="w-full hidden lg:block max-w-xs lg:max-w-[430px] xl:w-[500px]"
       />
      </motion.div>
     </div>
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
  </div>
 );
};
