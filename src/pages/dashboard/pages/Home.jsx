import { FoodCard } from "../../../components/FoodCard/FoodCard";
import { Layout } from "../Layout";

export const Home = () => {
 return (
  <>
   <Layout>
    <div>Home</div>
    
    <div className="mt-5 grid grid-cols-4 gap-3">
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
    </div>
   </Layout>
  </>
 );
};
