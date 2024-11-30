import { useState, useEffect, useRef } from "react";
import { CiBellOn } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

export const Topbar = ({ isAdmin }) => {
 const [formattedDate, setFormattedDate] = useState("");
 const [dayOfWeek, setDayOfWeek] = useState("");
 const [showNotifications, setShowNotifications] = useState(false);
 const notificationRef = useRef(null);
 const { profilePicture } = useProfile();

 // Dummy notifications data
 const notifications = [
  {
   id: 1,
   type: "follow",
   user: "John Doe",
   time: "2 hours ago",
   message: "started following you",
  },
  {
   id: 2,
   type: "like",
   user: "Sarah Smith",
   time: "5 hours ago",
   message: "liked your Spicy Szechuan Chicken recipe",
  },
  {
   id: 3,
   type: "download",
   user: "Mike Johnson",
   time: "1 day ago",
   message: "downloaded your Thai Green Curry recipe",
  },
  {
   id: 4,
   type: "follow",
   user: "Emily Brown",
   time: "2 days ago",
   message: "started following you",
  },
 ];

 useEffect(() => {
  const date = new Date();
  const formattedDateString = date.toLocaleDateString("en-US", {
   year: "numeric",
   month: "long",
   day: "numeric",
  });
  const dayOfWeekString = date.toLocaleDateString("en-US", {
   weekday: "long",
  });
  setFormattedDate(formattedDateString);
  setDayOfWeek(dayOfWeekString);

  // Close notifications when clicking outside
  const handleClickOutside = (event) => {
   if (
    notificationRef.current &&
    !notificationRef.current.contains(event.target)
   ) {
    setShowNotifications(false);
   }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 return (
  <>
   <div className="border rounded-xl w-full h-12 flex items-center justify-between px-2 sm:px-3 bg-white">
    <div className="flex items-center gap-2 sm:gap-3">
     <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden border border-gray-200"
     >
      {profilePicture ? (
       <img
        src={profilePicture}
        alt="Profile"
        className="w-full h-full object-cover"
       />
      ) : (
       <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <span className="text-blue-500 text-xs sm:text-sm font-medium">
         {"Patrick James Dionen"
          .split(" ")
          .map((word) => word[0])
          .join("")}
        </span>
       </div>
      )}
     </motion.div>
     <div className="flex flex-col items-start m-0">
      <motion.p
       initial={{ opacity: 0, x: -10 }}
       animate={{ opacity: 1, x: 0 }}
       className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[120px] sm:max-w-none"
      >
       Patrick James Dionen
      </motion.p>
      {isAdmin ? (
       <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[8px] flex font-light text-blue-500 p-[3px] bg-blue-100 rounded-full"
       >
        admin✨
       </motion.span>
      ) : (
       <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[8px] flex font-light text-blue-500 p-[3px] bg-blue-100 rounded-full"
       >
        student✨
       </motion.span>
      )}
     </div>
    </div>

    <div className="flex items-center gap-2 sm:gap-4">
     <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-end"
     >
      <h1 className="text-xs font-medium text-gray-700">{formattedDate}</h1>
      <p className="text-xs text-gray-500">{dayOfWeek}</p>
     </motion.div>

     <div className="relative" ref={notificationRef}>
      <motion.div
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       onClick={() => setShowNotifications(!showNotifications)}
       className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-50"
      >
       <CiBellOn size={18} className="text-gray-500" />
      </motion.div>

      <AnimatePresence>
       {showNotifications && (
        <motion.div
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -10 }}
         transition={{ duration: 0.2 }}
         className="absolute right-0 mt-2 w-[280px] sm:w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden"
         style={{
          maxWidth: 'calc(100vw - 1rem)',
          right: '-10px'
         }}
        >
         <div className="p-3 border-b bg-gray-50">
          <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
         </div>
         <div className="max-h-[60vh] sm:max-h-[400px] overflow-y-auto">
          {notifications.map((notification) => (
           <motion.div
            key={notification.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 border-b hover:bg-gray-50 cursor-pointer transition-colors duration-200"
           >
            <div className="flex items-start gap-3">
             <div className="h-8 w-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="text-blue-500 text-xs font-medium">
               {notification.user
                .split(" ")
                .map((word) => word[0])
                .join("")}
              </span>
             </div>
             <div className="flex-1 min-w-0">
              <p className="text-sm truncate">
               <span className="font-medium">{notification.user}</span>{" "}
               {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
             </div>
            </div>
           </motion.div>
          ))}
         </div>
         <motion.div
          whileHover={{ backgroundColor: "#F9FAFB" }}
          className="p-2 text-center border-t"
         >
          <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
           View all notifications
          </button>
         </motion.div>
        </motion.div>
       )}
      </AnimatePresence>
     </div>
    </div>
   </div>
  </>
 );
};
