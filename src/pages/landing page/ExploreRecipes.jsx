import { useState, useEffect, Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { recipeData } from "../../../data/RecipeData";
import { FoodCard } from "../../components/FoodCard/FoodCard";
import exploreSide from "/exploreSide.png";
import { Menu } from "@headlessui/react";
import { FiSearch, FiChevronDown, FiFilter, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react';

export const ExploreRecipes = () => {
 const location = useLocation();
 const [searchTerm, setSearchTerm] = useState("");
 const [activeSearch, setActiveSearch] = useState("");
 const [selectedCuisine, setSelectedCuisine] = useState("All");
 const [selectedCategory, setSelectedCategory] = useState("All");
 const [isLoading, setIsLoading] = useState(false);
 const [cuisineCounts, setCuisineCounts] = useState({});
 const [categoryCounts, setCategoryCounts] = useState({});
 const [showNoResults, setShowNoResults] = useState(false);

 const cuisines = [
  "All",
  "Chinese",
  "Japanese",
  "Korean",
  "Thai",
  "Indian",
  "Vietnamese",
  "Filipino",
  "Malaysian",
  "Indonesian",
 ];

 const categories = [
  "All",
  "Appetizers",
  "Main Dishes",
  "Side Dishes",
  "Desserts",
  "Soups",
  "Noodles & Rice",
  "Sauces & Condiments",
 ];

 // Calculate counts when component mounts
 useEffect(() => {
  const cCounts = cuisines.reduce((acc, cuisine) => {
   if (cuisine === "All") {
    acc[cuisine] = recipeData.length;
   } else {
    acc[cuisine] = recipeData.filter(
     (recipe) => recipe.cuisine === cuisine
    ).length;
   }
   return acc;
  }, {});

  const catCounts = categories.reduce((acc, category) => {
   if (category === "All") {
    acc[category] = recipeData.length;
   } else {
    acc[category] = recipeData.filter(
     (recipe) => recipe.category === category
    ).length;
   }
   return acc;
  }, {});

  setCuisineCounts(cCounts);
  setCategoryCounts(catCounts);
 }, []);

 // When component mounts, trigger search if there's a query
 useEffect(() => {
  if (location.state?.searchQuery) {
    setSearchTerm(location.state.searchQuery);
    setActiveSearch(location.state.searchQuery);
    // Clear the location state after using it
    window.history.replaceState({}, document.title);
  }
 }, [location.state]);

 // Add separate effect for handling search
 useEffect(() => {
  if (activeSearch) {
    handleSearch();
  }
 }, [activeSearch]);

 const handleSearch = async () => {
  if (!searchTerm.trim()) return;
  
  setIsLoading(true);
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  setActiveSearch(searchTerm);
  setIsLoading(false);

  // Check if there are any results after filtering
  const results = recipeData.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === "All" || recipe.cuisine === selectedCuisine;
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCuisine && matchesCategory;
  });

  if (results.length === 0) {
    setShowNoResults(true);
    setTimeout(() => {
      setSearchTerm("");
      setActiveSearch("");
      setSelectedCuisine("All");
      setSelectedCategory("All");
      window.location.reload();
    }, 2000);
  }
 };

 const filteredRecipes = recipeData.filter((recipe) => {
  const matchesSearch = recipe.title
   .toLowerCase()
   .includes(activeSearch.toLowerCase());
  const matchesCuisine =
   selectedCuisine === "All" || recipe.cuisine === selectedCuisine;
  const matchesCategory =
   selectedCategory === "All" || recipe.category === selectedCategory;
  return matchesSearch && matchesCuisine && matchesCategory;
 });

 // Add NoResultsModal component
 const NoResultsModal = () => (
  <Transition appear show={showNoResults} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={() => setShowNoResults(false)}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div className="flex justify-between items-start">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  No Results Found
                </Dialog.Title>
                <button
                  onClick={() => setShowNoResults(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  We couldn't find any recipes matching your search criteria. Try adjusting your filters or search term.
                </p>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
 );

 return (
  <>
   <Navbar />
   <div className="pt-20 bg-gray-100 min-h-screen">
    <div className="mt-2 mx-5 md:mx-10 lg:mx-32 pb-20">
     <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2 }}
       className="space-y-3"
      >
       <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Discover & Cook
        <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
         Amazing Recipes
        </span>
       </h1>
       <p className="text-sm text-gray-600 leading-relaxed max-w-md">
        Explore a world of culinary delights. From quick weekday meals to
        gourmet weekend feasts, find the perfect recipe for any occasion.
       </p>
      </motion.div>
      <img
       src={exploreSide}
       alt=""
       className="hidden md:block w-full md:w-auto md:max-w-[600px] mt-4 md:mt-0"
      />
     </div>

     {/* Search and Filters Section */}
     <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex flex-col md:flex-row gap-3">
       {/* Search Input */}
       <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
         type="text"
         placeholder="Search for recipes..."
         className="w-full h-12 pl-10 pr-4 text-base border border-gray-200 rounded-lg 
                   focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
       </div>

       {/* Filter Dropdowns */}
       <div className="flex gap-2">
        {/* Cuisine Dropdown */}
        <Menu as="div" className="relative">
         <Menu.Button
          className="h-12 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 
                              transition-colors flex items-center gap-2 min-w-[140px]"
         >
          <span className="text-gray-700">{selectedCuisine}</span>
          <FiChevronDown className="h-5 w-5 text-gray-400 ml-auto" />
         </Menu.Button>

         <Menu.Items
          className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 
                              rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
         >
          <div className="p-1">
           {cuisines.map((cuisine) => (
            <Menu.Item key={cuisine}>
             {({ active }) => (
              <button
               onClick={() => setSelectedCuisine(cuisine)}
               className={`${active ? "bg-gray-50" : ""} ${
                selectedCuisine === cuisine
                 ? "text-blue-600 bg-blue-50"
                 : "text-gray-700"
               } group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm`}
              >
               <span>{cuisine}</span>
               <span
                className={`px-1.5 py-0.5 text-xs rounded-full ${
                 selectedCuisine === cuisine
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
                }`}
               >
                {cuisineCounts[cuisine] || 0}
               </span>
              </button>
             )}
            </Menu.Item>
           ))}
          </div>
         </Menu.Items>
        </Menu>

        {/* Category Dropdown */}
        <Menu as="div" className="relative">
         <Menu.Button
          className="h-12 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 
                                 transition-colors flex items-center gap-2 min-w-[140px]"
         >
          <span className="text-gray-700">{selectedCategory}</span>
          <FiChevronDown className="h-5 w-5 text-gray-400 ml-auto" />
         </Menu.Button>

         <Menu.Items
          className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 
                                rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
         >
          <div className="p-1">
           {categories.map((category) => (
            <Menu.Item key={category}>
             {({ active }) => (
              <button
               onClick={() => setSelectedCategory(category)}
               className={`${active ? "bg-gray-50" : ""} ${
                selectedCategory === category
                 ? "text-blue-600 bg-blue-50"
                 : "text-gray-700"
               } group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm`}
              >
               <span>{category}</span>
               <span
                className={`px-1.5 py-0.5 text-xs rounded-full ${
                 selectedCategory === category
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
                }`}
               >
                {categoryCounts[category] || 0}
               </span>
              </button>
             )}
            </Menu.Item>
           ))}
          </div>
         </Menu.Items>
        </Menu>

        {/* Search Button */}
        <button
         onClick={handleSearch}
         disabled={isLoading}
         className={`h-12 px-8 bg-mainblue text-white rounded-lg text-base font-medium 
                    transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                     isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-blue-600"
                    }`}
        >
         {isLoading ? (
          <>
           <svg
            className="animate-spin h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
           >
            <circle
             className="opacity-25"
             cx="12"
             cy="12"
             r="10"
             stroke="currentColor"
             strokeWidth="4"
            />
            <path
             className="opacity-75"
             fill="currentColor"
             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
           </svg>
           <span>Searching...</span>
          </>
         ) : (
          <>
           <FiSearch className="h-5 w-5" />
           <span>Search</span>
          </>
         )}
        </button>
       </div>
      </div>

      {/* Active Filters */}
      {(selectedCuisine !== "All" || selectedCategory !== "All") && (
       <div className="flex items-center gap-2 mt-3">
        <FiFilter className="h-3 w-3 text-gray-400" />
        <span className="text-xs text-gray-500">Active filters:</span>
        {selectedCuisine !== "All" && (
         <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs">
          {selectedCuisine}
         </span>
        )}
        {selectedCategory !== "All" && (
         <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs">
          {selectedCategory}
         </span>
        )}
        <button
         onClick={() => {
          setSelectedCuisine("All");
          setSelectedCategory("All");
         }}
         className="ml-auto text-xs text-red-500 hover:text-red-600"
        >
         Clear all
        </button>
       </div>
      )}
     </div>

     {/* Recipe Grid */}
     <div className="mt-6">
      <FoodCard recipes={filteredRecipes} basePath={"/explore"} />
     </div>
    </div>
   </div>
   <NoResultsModal />
  </>
 );
};
