export const Contact = () => {
 return (
  <>
   <div
    id="contact"
    className="h-auto lg:h-screen relative py-10 md:py-20 flex flex-col md:flex-row items-center justify-center"
   >
    <div className="flex flex-col lg:flex-row items-center md:items-start gap-5 mx-5 md:mx-32 z-10">
     <div className="flex flex-col w-full md:w-[500px]">
      <h1 className="text-3xl md:text-4xl font-black text-gray-700">
       Reach Out
      </h1>
      <h1 className="text-3xl md:text-4xl font-black text-gray-700">
       With FoodieGo Team
      </h1>
      <p className="text-sm md:text-base font-light mt-3 text-justify">
       We would love to hear from you! Whether you have questions, feedback, or
       need assistance, our team is here to help. Please fill out the form on
       the right, and we will get back to you as soon as possible. Your thoughts
       and suggestions are important to us!
      </p>
     </div>
     <div className="bg-white w-full lg:w-[400px] p-6 md:p-8 rounded-md border border-gray-500 space-y-3">
      <div className="flex flex-col gap-1">
       <label htmlFor="" className="text-xs font-medium">
        Email
       </label>
       <input
        type="email"
        className="h-10 border border-gray-500 rounded px-4 text-xs outline-none"
       />
      </div>
      <div className="flex flex-col gap-1">
       <label htmlFor="" className="text-xs font-medium">
        Subject
       </label>
       <input
        type="text"
        className="h-10 border border-gray-500 rounded px-4 text-xs outline-none"
       />
      </div>
      <div className="flex flex-col gap-1">
       <label htmlFor="" className="text-xs font-medium">
        Message
       </label>
       <textarea
        type="text"
        className="min-h-[120px] border border-gray-500 rounded px-4 text-xs outline-none py-4"
       />
       <div className="mt-2">
        <button className="w-full h-10 rounded bg-mainblue text-xs text-white">
         Send
        </button>
       </div>
      </div>
     </div>
    </div>
    {/* divider */}
    <div className="custom-shape-divider-bottom-1730205142 hidden md:block">
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
  </>
 );
};
