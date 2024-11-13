import { useState } from "react";
import { Layout } from "../Layout";
import { CreateRecipe } from "../../../components/recipe/CreateRecipe";
import { AnimatePresence, motion } from "framer-motion";
import { UserFoodCard } from "../../../components/FoodCard/UserFoodCard";
import { useRecipes } from "../../../context/RecipeContext";
import { toast } from "sonner";

export const MyRecipes = () => {
  const [createRecipe, setCreateRecipe] = useState(false);
  const { recipes, addRecipe, updateRecipe, deleteRecipe } = useRecipes();

  const handleRecipeCreated = (newRecipe) => {
    addRecipe(newRecipe);
    setCreateRecipe(false);
    toast.success('Recipe added to your collection');
  };

  const handleRecipeDeleted = (recipeId) => {
    deleteRecipe(recipeId);
    toast.success('Recipe removed from your collection');
  };

  const handleRecipeUpdated = (updatedRecipe) => {
    updateRecipe(updatedRecipe);
    toast.success('Recipe updated successfully');
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-md font-medium text-gray-600">My Recipes</h1>
          </motion.div>
          <motion.button
            onClick={() => setCreateRecipe(true)}
            className="px-4 h-10 bg-mainblue rounded text-xs text-white font-medium hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            + Create Recipe
          </motion.button>
        </motion.div>

        <motion.hr 
          className="mt-2"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4 }}
        />

        <motion.div 
          className="mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <UserFoodCard 
            recipes={recipes}
            onDelete={handleRecipeDeleted}
            onUpdate={handleRecipeUpdated}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {createRecipe && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <CreateRecipe 
                setCreateRecipe={setCreateRecipe}
                onRecipeCreated={handleRecipeCreated}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  );
};
