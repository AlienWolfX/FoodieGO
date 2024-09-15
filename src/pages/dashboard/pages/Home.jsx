import { FoodCard } from "../../../components/FoodCard/FoodCard";
import { Layout } from "../Layout";
import { Link } from "react-router-dom";

export const Home = () => {
 return (
  <>
   <Layout>
    <div>Home</div>

    <div className="mt-5 grid grid-cols-4 gap-3">
     <Link to={"/view-recipe"}>
      <FoodCard />
     </Link>
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
