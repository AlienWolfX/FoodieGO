import { Layout } from "../dashboard/Layout";
import { LeaderboardComponent } from "../../components/LeaderboardComponent/LeaderboardComponent";

export const AdminLeaderboards = () => {
 return (
  <>
   <div>
    <Layout>
     <div>
      <h1 className="text-lg text-gray-600 font-medium">Leaderboards</h1>
     </div>
     <LeaderboardComponent />
    </Layout>
   </div>
  </>
 );
};
