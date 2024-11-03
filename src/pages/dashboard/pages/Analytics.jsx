// import { Cards } from "../../../components/AnalyticsComponents/Cards";
import { OverviewCards } from "../../../components/AnalyticsComponents/OverviewCards";
import { Layout } from "../Layout";

export const Analytics = () => {
 return (
  <>
   <Layout>
    <div>
     <h1 className="text-md font-medium text-gray-600">Analytics</h1>
    </div>
    <div className="mt-2">
     <hr />
    </div>
    <div className="mt-5">
     <OverviewCards />
    </div>
   </Layout>
  </>
 );
};
