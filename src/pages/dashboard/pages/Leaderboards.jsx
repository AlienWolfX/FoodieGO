import { LeaderboardComponent } from "../../../components/LeaderboardComponent/LeaderboardComponent";
import { Layout } from "../Layout";

export const Leaderboards = () => {
 return (
  <>
    <Layout>
     <div>
      <h1 className="text-lg text-gray-600 font-medium">Leaderboards</h1>
     </div>
     <LeaderboardComponent />
    </Layout>
  </>
 );
};
