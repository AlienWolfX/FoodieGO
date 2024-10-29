import { RecipeCard } from "../../components/RecipeCard";
import { useLocation } from "react-router-dom";

export const ViewRecipeInitial = () => {
 const location = useLocation(); // Retrieve location object

 const {
  title,
  author,
  category,
  description,
  difficulty,
  time,
  img_path,
  ingredients,
  instructions,
 } = location.state; // Retrieve data passed from the previous page

 return (
  <>
   <RecipeCard 
    title={title}
    author={author}
    category={category}
    description={description}
    difficulty={difficulty}
    time={time}
    img_path={img_path}
    ingredients={ingredients}
    instructions={instructions}
   />
  </>
 );
};
