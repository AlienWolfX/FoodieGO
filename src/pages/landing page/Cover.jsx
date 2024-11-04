import header from "/foodimages/header.png";

export const Cover = () => {
 return (
  <>
   <div className="bg-gray-50 w-full h-screen relative overflow-hidden">
    <img 
      src={header} 
      alt="" 
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
   </div>
  </>
 );
};
