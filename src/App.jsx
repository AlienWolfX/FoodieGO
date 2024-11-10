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
import { ExploreRecipes } from "./pages/landing page/ExploreRecipes";
import { TermsConditions } from "./pages/landing page/TermsConditions";
import { ViewRecipeInitial } from "./pages/landing page/ViewRecipeInitial";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { OneTimePassword } from "./pages/auth/OneTimePassword";
import { ResetPassword } from "./pages/auth/ResetPassword";

function App() {
 return (
  <>
   <Routers>
    <Routes>
     <Route path="/" element={<Mainpage />} />
     <Route path="/terms-conditions" element={<TermsConditions />} />
     <Route path="/explore" element={<ExploreRecipes />} />
     <Route path="/explore/view-recipe" element={<ViewRecipeInitial />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/reset-password" element={<ResetPassword />} />
     <Route
      path="/forgot-password/one-time-password"
      element={<OneTimePassword />}
     />
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
