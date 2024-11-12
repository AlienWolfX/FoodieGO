import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
 const [profilePicture, setProfilePicture] = useState(
  localStorage.getItem("profilePicture") || null
 );

 const updateProfilePicture = (newPicture) => {
  setProfilePicture(newPicture);
  localStorage.setItem("profilePicture", newPicture);
 };

 const value = {
  profilePicture,
  updateProfilePicture,
 };

 return (
  <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
 );
};

export const useProfile = () => {
 const context = useContext(ProfileContext);
 if (context === undefined) {
  throw new Error("useProfile must be used within a ProfileProvider");
 }
 return context;
};
