import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { RecipeProvider } from "./context/RecipeContext";
import { MoreRecipes } from "./pages/dashboard/pages/MoreRecipes";
import { AdminLogin } from "./pages/adminDashboard/AdminLogin";
import { AdminHome } from "./pages/adminDashboard/AdminHome";
import { AdminReports } from "./pages/adminDashboard/AdminReports";
import { AdminRecipes } from "./pages/adminDashboard/AdminRecipes";
import { AdminUsers } from "./pages/adminDashboard/AdminUsers";
import { AdminProfile } from "./pages/adminDashboard/AdminProfile";
import { AdminLeaderBoards } from "./pages/adminDashboard/AdminLeaderBoards";
import { Leaderboards } from "./pages/dashboard/pages/Leaderboards";

function App() {
 return (
  <BrowserRouter>
   <RecipeProvider>
    <Routes>
     <Route path="/admin" element={<AdminLogin />} />
     <Route path="/admin/home" element={<AdminHome />} />
     <Route path="/admin/reports" element={<AdminReports />} />
     <Route path="/admin/recipes" element={<AdminRecipes />} />
     <Route path="/admin/leaderboards" element={<AdminLeaderBoards />} />
     <Route path="/admin/users" element={<AdminUsers />} />
     <Route path="/admin/profile" element={<AdminProfile />} />
     <Route path="/admin/recipes/view-recipe" element={<ViewRecipe />} />

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
     <Route path="/leaderboards" element={<Leaderboards />} />
     <Route path="/analytics" element={<Analytics />} />
     <Route path="/profile" element={<MyProfile />} />
     <Route path="/view-recipe" element={<ViewRecipe />} />
     <Route path="/explore-more-recipes" element={<MoreRecipes />} />
    </Routes>
   </RecipeProvider>
  </BrowserRouter>
 );
}

const UserRoutes = () => {
 <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/recipes" element={<MyRecipes />} />
  <Route path="/favorite-recipes" element={<SavedRecipes />} />
  <Route path="/analytics" element={<Analytics />} />
  <Route path="/profile" element={<MyProfile />} />
  <Route path="/explore-more-recipes" element={<MoreRecipes />} />
 </Routes>;
};

export default App;
