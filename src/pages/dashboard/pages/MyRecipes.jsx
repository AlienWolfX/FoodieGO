import { useState } from "react";
import { Layout } from "../Layout";
import { CreateRecipe } from "../../../components/recipe/CreateRecipe";
import { AnimatePresence, motion } from "framer-motion";

export const MyRecipes = () => {
 const [createRecipe, setCreateRecipe] = useState(false);

 return (
  <>
   <Layout>
    <div>My Recipes</div>
    <div className="mt-2">
     <hr />
    </div>
    <button
     onClick={() => setCreateRecipe(true)}
     className="bg-gray-100 px-4 h-10 rounded text-xs"
    >
     + Create Recipe
    </button>
    {createRecipe ? (
     <AnimatePresence>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
      >
       <CreateRecipe setCreateRecipe={setCreateRecipe} />
      </motion.div>
     </AnimatePresence>
    ) : (
     ""
    )}
   </Layout>
  </>
 );
};
