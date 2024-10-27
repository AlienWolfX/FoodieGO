import { useState } from "react";
import { Layout } from "../Layout";
import { CreateRecipe } from "../../../components/recipe/CreateRecipe";
import { AnimatePresence, motion } from "framer-motion";

export const MyRecipes = () => {
 const [createRecipe, setCreateRecipe] = useState(false);

 return (
  <>
   <Layout>
    <div className="flex items-center justify-between">
     <div>
      <h1 className="text-md font-medium text-gray-600">My Recipes</h1>
     </div>
     <button
      onClick={() => setCreateRecipe(true)}
      className="px-4 h-10 bg-mainblue rounded text-xs text-white font-medium"
     >
      + Create Recipe
     </button>
    </div>
    <div className="mt-2">
     <hr />
    </div>
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
