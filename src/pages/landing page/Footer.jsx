export const Footer = () => {
 return (
  <>
   <div className="bg-mainblue text-white py-4">
    <div className="container mx-auto text-center">
     <p className="mb-2">© 2024 Your Company Name. All rights reserved.</p>
     <div className="flex justify-center space-x-4">
      <a href="/about" className="hover:underline">
       About Us
      </a>
      <a href="/contact" className="hover:underline">
       Contact
      </a>
      <a href="/privacy" className="hover:underline">
       Privacy Policy
      </a>
      <a href="/terms" className="hover:underline">
       Terms of Service
      </a>
     </div>
     <div className="mt-4">
      <a
       href="https://facebook.com"
       target="_blank"
       rel="noopener noreferrer"
       className="mx-2"
      >
       <img
        src="/icons/facebook.svg"
        alt="Facebook"
        className="inline h-6 w-6"
       />
      </a>
      <a
       href="https://twitter.com"
       target="_blank"
       rel="noopener noreferrer"
       className="mx-2"
      >
       <img src="/icons/twitter.svg" alt="Twitter" className="inline h-6 w-6" />
      </a>
      <a
       href="https://instagram.com"
       target="_blank"
       rel="noopener noreferrer"
       className="mx-2"
      >
       <img
        src="/icons/instagram.svg"
        alt="Instagram"
        className="inline h-6 w-6"
       />
      </a>
     </div>
    </div>
   </div>
  </>
 );
};
