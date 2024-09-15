import { MdCancel } from "react-icons/md";

export const AuthorProfile = ({ setAuthor }) => {
 return (
  <>
   <div className="absolute bottom-0 right-0 left-0 top-0 flex items-center justify-center backdrop-filter backdrop-blur-sm rounded-md">
    <div className="bg-white border w-[700px] min-h-[500px] p-5 rounded">
     <MdCancel
      onClick={() => setAuthor(false)}
      size={20}
      className="text-red-500"
     />
    </div>
   </div>
  </>
 );
};
