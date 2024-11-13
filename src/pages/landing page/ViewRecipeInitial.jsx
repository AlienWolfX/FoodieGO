import { RecipeCard } from "../../components/RecipeCard";
import { useLocation } from "react-router-dom";

export const ViewRecipeInitial = () => {
 const location = useLocation(); // Retrieve location object

 const {
  id,
  title,
  img_path,
  category,
  author,
  description,
  difficulty,
  ratings,
  time,
  ingredients,
  instructions,
  likes,
  downloads,
  views,
  dateCreated,
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
