import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Searchbar = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const navigate = useNavigate();

 const handleSearch = () => {
   if (!searchTerm.trim()) return;
   
   // Navigate to explore page with search term
   navigate("/explore", {
     state: { searchQuery: searchTerm }
   });
 };

 return (
  <div className="relative">
   <div className="flex items-start gap-2">
    {/* Search Input */}
    <div className="relative flex-1">
     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FiSearch className="h-5 w-5 text-gray-400" />
     </div>
     <input
      type="text"
      placeholder="Search for recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      className="w-full h-12 pl-10 pr-4 text-base border border-gray-200 rounded-lg 
                focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
     />
    </div>

    {/* Search Button */}
    <button
     onClick={handleSearch}
     className="h-12 px-8 bg-mainblue text-white rounded-lg text-base font-medium 
               transition-all duration-200 flex items-center gap-2 whitespace-nowrap hover:bg-blue-600"
    >
     <FiSearch className="h-5 w-5" />
     <span>Search</span>
    </button>
   </div>
  </div>
 );
};
