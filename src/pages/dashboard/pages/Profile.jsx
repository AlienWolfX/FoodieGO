import { ProfileCard } from "../../../components/DashboardComponents/ProfileCard";
import { ProfilePreferencesCards } from "../../../components/DashboardComponents/ProfilePreferencesCards";
import { Layout } from "../Layout";

export const MyProfile = () => {
 return (
  <Layout>
   <div>
    <h1 className="text-md text-gray-600 font-medium">My Profile</h1>
   </div>
   <div className="mt-2">
    <hr />
   </div>
   <div className="mt-5 md:flex items-start gap-5">
    <ProfileCard />
    <ProfilePreferencesCards />
   </div>
  </Layout>
 );
};
