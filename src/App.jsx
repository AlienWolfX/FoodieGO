import { useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import { Mainpage } from "./pages/landing page/Mainpage";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { Home } from "./pages/dashboard/pages/Home";
import { MyRecipes } from "./pages/dashboard/pages/MyRecipes";
import { FavoriteRecipes } from "./pages/dashboard/pages/FavoriteRecipes";
import { Analytics } from "./pages/dashboard/pages/Analytics";
import { MyProfile } from "./pages/dashboard/pages/Profile";
import { ViewRecipe } from "./pages/dashboard/pages/ViewRecipe";
import { Preferences } from "./pages/auth/Preferences";
import { Recipes } from "./pages/landing page/Recipes";
import { TermsConditions } from "./pages/landing page/TermsConditions";

function App() {
 return (
  <>
   <Routers>
    <Routes>
     <Route path="/" element={<Mainpage />} />
     <Route path="/terms-conditions" element={<TermsConditions />} />
     <Route path="/recipes" element={<Recipes />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/preferences" element={<Preferences />} />
     <Route path="/home" element={<Home />} />
     {/* todo: add protected routes */}
     <Route path="/user/*" element={<UserRoutes />} />
     <Route path="/home" element={<Home />} />
     <Route path="/my-recipes" element={<MyRecipes />} />
     <Route path="/favorite-recipes" element={<FavoriteRecipes />} />
     <Route path="/analytics" element={<Analytics />} />
     <Route path="/profile" element={<MyProfile />} />
     <Route path="/view-recipe" element={<ViewRecipe />} />
    </Routes>
   </Routers>
  </>
 );
}

const UserRoutes = () => {
 <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/recipes" element={<MyRecipes />} />
  <Route path="/favorite-recipes" element={<SavedRecipes />} />
  <Route path="/analytics" element={<Analytics />} />
  <Route path="/profile" element={<MyProfile />} />
 </Routes>;
};

export default App;
