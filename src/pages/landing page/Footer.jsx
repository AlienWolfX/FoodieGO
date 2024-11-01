import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
 return (
  <footer className="bg-gray-800 text-white py-10">
   <div className="container mx-auto px-5 md:px-10">
    <div className="flex flex-col md:flex-row justify-between items-center">
     <div className="mb-5 md:mb-0">
      <h2 className="text-lg font-bold">Foodie Go</h2>
      <p className="text-sm mt-2">
       Your go-to platform for discovering and sharing delicious recipes.
      </p>
     </div>
     <div className="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
      <div>
       <h3 className="font-semibold">Quick Links</h3>
       <ul className="text-sm">
        <li><a href="#about" className="hover:underline">About Us</a></li>
        <li><a href="#explore" className="hover:underline">Explore</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
       </ul>
      </div>
      <div>
       <h3 className="font-semibold">Follow Us</h3>
       <div className="flex gap-3 mt-2">
        <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
       </div>
      </div>
     </div>
    </div>
    <div className="border-t border-gray-700 mt-5 pt-5 text-center">
     <p className="text-xs">
      &copy; {new Date().getFullYear()} Foodie Go. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
}; 