export const CommentsCard = () => {
 return (
  <>
   <h1>Like the Recipe? Leave a comment</h1>
   <div className="bg-white p-4 rounded-lg shadow mt-2">
    <textarea
     type="text"
     placeholder="leave a comment here..."
     className="h-10 border outline-none text-xs font-light rounded px-4"
    />
    <div className="mt-5">
     <h1 className="text-sm font-medium">
      Comments <span className="text-xs font-light text-gray-500">{"(5)"}</span>
     </h1>
     <div className="mt-4">
      <div className="flex items-center gap-2">
       <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
       <div className="flex flex-col">
        <h1 className="text-xs font-medium text-gray-500">
         Lenor James Jamero
        </h1>
        <p className="text-xs font-light text-gray-500">
         lenorjamero@gmail.com
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
