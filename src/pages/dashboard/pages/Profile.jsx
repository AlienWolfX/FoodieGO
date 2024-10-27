import { ProfileCard } from "../../../components/DashboardComponents/ProfileCard";
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
   <div className="mt-3">
    <ProfileCard />
    <div className="flex items-end justify-start mt-2">
     <h1 className="text-xs font-light text-red-500 cursor-pointer">Delete Account</h1>
    </div>
   </div>
  </Layout>
 );
};
