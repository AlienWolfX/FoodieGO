export const Contact = () => {
 return (
  <>
   <div id="contact" className="h-screen mx-32 py-20 flex items-center justify-center">
    <div className="flex items-start gap-5">
     <div className="flex flex-col w-[500px]">
      <h1 className="text-3xl font-black text-gray-700">Reach Out</h1>
      <h1 className="text-3xl font-black text-gray-700">With FoodieGo Team</h1>
      <p className="text-sm font-light mt-3 text-justify">
       We would love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. 
       Please fill out the form on the right, and we will get back to you as soon as possible. Your thoughts and suggestions are important to us!
      </p>
     </div>
     <div className="bg-white w-[400px] p-8 rounded-md border border-gray-500 space-y-3">
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
        <button className="w-full h-10 rounded bg-mainblue text-xs text-white">Send</button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
