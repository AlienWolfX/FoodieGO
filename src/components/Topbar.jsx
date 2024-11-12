import { useState, useEffect, useRef } from "react";
import { CiBellOn } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

export const Topbar = () => {
 const [formattedDate, setFormattedDate] = useState("");
 const [dayOfWeek, setDayOfWeek] = useState("");
 const [showNotifications, setShowNotifications] = useState(false);
 const notificationRef = useRef(null);

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
   if (notificationRef.current && !notificationRef.current.contains(event.target)) {
    setShowNotifications(false);
   }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 return (
  <>
   <div className="border rounded-xl w-full h-12 flex items-center justify-between px-3 bg-white">
    <div className="flex items-center gap-2">
     <div className="h-8 w-8 bg-gray-50 rounded-full border"></div>
     <p>Patrick James Dionen</p>
    </div>
    <div className="flex items-center gap-2">
     <div className="flex flex-col items-center">
      <h1 className="text-xs font-medium text-textheader">{formattedDate}</h1>
      <p className="text-xs font-light">{dayOfWeek}</p>
     </div>
     <div className="relative" ref={notificationRef}>
      <div
       onClick={() => setShowNotifications(!showNotifications)}
       className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-400 cursor-pointer hover:bg-gray-50"
      >
       <CiBellOn size={20} className="text-gray-400" />
      </div>

      <AnimatePresence>
       {showNotifications && (
        <motion.div
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -10 }}
         transition={{ duration: 0.2 }}
         className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
         <div className="p-3 border-b">
          <h3 className="text-sm font-medium">Notifications</h3>
         </div>
         <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((notification) => (
           <div
            key={notification.id}
            className="p-3 border-b hover:bg-gray-50 cursor-pointer"
           >
            <div className="flex items-start gap-2">
             <div className="h-8 w-8 bg-gray-100 rounded-full flex-shrink-0"></div>
             <div className="flex-1">
              <p className="text-sm">
               <span className="font-medium">{notification.user}</span>{" "}
               {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
             </div>
            </div>
           </div>
          ))}
         </div>
         <div className="p-2 text-center border-t">
          <button className="text-xs text-blue-500 hover:text-blue-600">
           View all notifications
          </button>
         </div>
        </motion.div>
       )}
      </AnimatePresence>
     </div>
    </div>
   </div>
  </>
 );
};
