import { ProfileCard } from "../../../components/DashboardComponents/ProfileCard";
import { Layout } from "../Layout";

export const MyProfile = () => {
 return (
  <Layout>
   <div>My Profile</div>
   <div className="mt-2">
    <hr />
   </div> 
   <div className="mt-3">
   <ProfileCard/>
   </div>
  </Layout>
 );
};
