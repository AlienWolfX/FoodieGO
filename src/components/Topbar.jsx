import { useState, useEffect } from "react";

export const Topbar = () => {
 const [formattedDate, setFormattedDate] = useState("");
 const [dayOfWeek, setDayOfWeek] = useState("");

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
 }, []);

 return (
  <>
   <div className="border rounded-xl w-full h-12 flex items-center justify-between px-3 bg-white">
    <div className="flex items-center gap-2">
     <div className="h-8 w-8 bg-gray-50 rounded-full border "></div>
     <p>Patrick James Dionen</p>
    </div>
    <div className="flex flex-col items-center">
     <h1 className="text-xs font-medium text-textheader">{formattedDate}</h1>
     <p className="text-xs font-light">{dayOfWeek}</p>
    </div>
   </div>
  </>
 );
};
