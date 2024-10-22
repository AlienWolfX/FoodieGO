import { useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import { Mainpage } from "./pages/landing page/Mainpage";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { Layout } from "./pages/dashboard/Layout";
import { Home } from "./pages/dashboard/pages/Home";
import { MyRecipes } from "./pages/dashboard/pages/MyRecipes";
import { SavedRecipes } from "./pages/dashboard/pages/Saved";
import { Analytics } from "./pages/dashboard/pages/Analytics";
import { MyProfile } from "./pages/dashboard/pages/Profile";
import { ViewRecipe } from "./pages/dashboard/pages/ViewRecipe";

function App() {

 return (
  <>
   <Routers>
    <Routes>
     <Route path="/" element={<Mainpage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/home" element={<Home />} />
     <Route path="/user/*" element={<UserRoutes />} />
     <Route path="/home" element={<Home />} />
     <Route path="/my-recipes" element={<MyRecipes />} />
     <Route path="/saved-recipes" element={<SavedRecipes />} />
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
  <Route path="/saved-recipes" element={<SavedRecipes />} />
  <Route path="/analytics" element={<Analytics />} />
  <Route path="/profile" element={<MyProfile />} />
 </Routes>;
};

export default App;
