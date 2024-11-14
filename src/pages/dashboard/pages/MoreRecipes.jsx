import { Layout } from "../Layout";
import { recipeData } from "../../../../data/RecipeData";
import { useState, useEffect } from "react";
import { FoodCard } from "../../../components/FoodCard/FoodCard";
import exploreSide from "/exploreSide.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiSearch, FiX, FiChevronDown, FiFilter } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Menu } from '@headlessui/react';

export const MoreRecipes = () => {
 const location = useLocation();
 const [searchTerm, setSearchTerm] = useState(
  location.state?.searchQuery || ""
 );
 const [activeSearch, setActiveSearch] = useState(
  location.state?.searchQuery || ""
 );
 const [selectedCuisine, setSelectedCuisine] = useState("All");
 const [selectedCategory, setSelectedCategory] = useState("All");
 const [isLoading, setIsLoading] = useState(false);
 const [showNoResults, setShowNoResults] = useState(false);
 const [cuisineCounts, setCuisineCounts] = useState({});
 const [categoryCounts, setCategoryCounts] = useState({});

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

 // Add this effect to trigger search when navigated with a search query
 useEffect(() => {
  if (location.state?.searchQuery) {
   handleSearch();
  }
 }, []);

 // Add this effect to calculate counts when recipes change
 useEffect(() => {
  // Calculate cuisine counts
  const cCounts = cuisines.reduce((acc, cuisine) => {
    if (cuisine === "All") {
      acc[cuisine] = recipeData.length;
    } else {
      acc[cuisine] = recipeData.filter(recipe => recipe.cuisine === cuisine).length;
    }
    return acc;
  }, {});
  
  // Calculate category counts
  const catCounts = categories.reduce((acc, category) => {
    if (category === "All") {
      acc[category] = recipeData.length;
    } else {
      acc[category] = recipeData.filter(recipe => recipe.category === category).length;
    }
    return acc;
  }, {});

  setCuisineCounts(cCounts);
  setCategoryCounts(catCounts);
 }, [recipeData]);

 // Handle search button click
 const handleSearch = async () => {
  setIsLoading(true);
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  setActiveSearch(searchTerm);
  setIsLoading(false);

  // Check if there are any results after filtering
  const results = recipeData.filter((recipe) => {
   const matchesSearch = recipe.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
   const matchesCuisine =
    selectedCuisine === "All" || recipe.cuisine === selectedCuisine;
   const matchesCategory =
    selectedCategory === "All" || recipe.category === selectedCategory;
   return matchesSearch && matchesCuisine && matchesCategory;
  });

  if (results.length === 0) {
   setShowNoResults(true);
   // Clear all search states immediately
   setSearchTerm("");
   setActiveSearch("");
   setSelectedCuisine("All");
   setSelectedCategory("All");
   
   // Clear location state if it exists
   if (location.state?.searchQuery) {
    window.history.replaceState({}, document.title);
   }
   
   setTimeout(() => {
    window.location.reload();
   }, 2000);
  }
 };

 // Filter recipes based on search term, selected cuisine, and selected category
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

 const NoResultsModal = () => (
  <Transition appear show={showNoResults} as={Fragment}>
   <Dialog
    as="div"
    className="relative z-50"
    onClose={() => setShowNoResults(false)}
   >
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
         <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
         >
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
          We couldn't find any recipes matching your search criteria. Try
          adjusting your filters or search term.
         </p>
        </div>
        <div className="mt-4">
         <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
          onClick={() => setShowNoResults(false)}
         >
          Got it
         </button>
        </div>
       </Dialog.Panel>
      </Transition.Child>
     </div>
    </div>
   </Dialog>
  </Transition>
 );

 return (
  <Layout>
   <div className="bg-white rounded-xl shadow-sm mb-6">
    <div className="p-4">
     <div className="mx-auto">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-3">
       {/* Search Input */}
       <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <FiSearch className="h-4 w-4 text-gray-400" />
        </div>
        <input
         type="text"
         placeholder="Search for recipes..."
         className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg 
                          focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         onKeyPress={(e) => e.key === "Enter" && handleSearch()}
         disabled={isLoading}
        />
       </div>

       {/* Filter Dropdowns */}
       <div className="flex gap-2">
        {/* Cuisine Dropdown */}
        <Menu as="div" className="relative">
         <Menu.Button className="flex flex-col items-start px-4 py-2 text-sm border border-gray-200 
                           rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-[140px]">
          <span className="text-xs text-gray-500 mb-0.5">Cuisine</span>
          <div className="flex items-center justify-between w-full">
           <span className="font-medium text-gray-700 flex items-center gap-2">
            {selectedCuisine}
            {selectedCuisine !== "All" && (
              <span className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">
                {cuisineCounts[selectedCuisine] || 0}
              </span>
            )}
           </span>
           <FiChevronDown className="h-4 w-4 text-gray-400" />
          </div>
         </Menu.Button>

         <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 
                                     rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="p-1">
           {cuisines.map((cuisine) => (
            <Menu.Item key={cuisine}>
             {({ active }) => (
              <button
               onClick={() => setSelectedCuisine(cuisine)}
               className={`${
                active ? 'bg-gray-50' : ''
               } ${
                selectedCuisine === cuisine ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
               } group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm`}
              >
               <span>{cuisine}</span>
               <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                 selectedCuisine === cuisine 
                   ? 'bg-blue-100 text-blue-600' 
                   : 'bg-gray-100 text-gray-600'
               }`}>
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
         <Menu.Button className="flex flex-col items-start px-4 py-2 text-sm border border-gray-200 
                           rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-[140px]">
          <span className="text-xs text-gray-500 mb-0.5">Category</span>
          <div className="flex items-center justify-between w-full">
           <span className="font-medium text-gray-700 flex items-center gap-2">
            {selectedCategory}
            {selectedCategory !== "All" && (
              <span className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">
                {categoryCounts[selectedCategory] || 0}
              </span>
            )}
           </span>
           <FiChevronDown className="h-4 w-4 text-gray-400" />
          </div>
         </Menu.Button>

         <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 
                                     rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="p-1">
           {categories.map((category) => (
            <Menu.Item key={category}>
             {({ active }) => (
              <button
               onClick={() => setSelectedCategory(category)}
               className={`${
                active ? 'bg-gray-50' : ''
               } ${
                selectedCategory === category ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
               } group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm`}
              >
               <span>{category}</span>
               <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                 selectedCategory === category 
                   ? 'bg-blue-100 text-blue-600' 
                   : 'bg-gray-100 text-gray-600'
               }`}>
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
         className={`px-6 py-2.5 bg-mainblue text-white rounded-lg text-sm font-medium 
                          transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                            isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
                          }`}
        >
         {isLoading ? (
          <>
           <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
           </svg>
           <span>Searching...</span>
          </>
         ) : (
          <>
           <FiSearch className="h-4 w-4" />
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
    </div>
   </div>

   {/* Recipe grid */}
   <div className="mt-6">
    <FoodCard recipes={filteredRecipes} basePath={""} />
   </div>
   <NoResultsModal />
  </Layout>
 );
};
