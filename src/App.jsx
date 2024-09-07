import { useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import { Mainpage } from "./pages/landing page/Mainpage";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";

function App() {
 const [count, setCount] = useState(0);

 return (
  <>
   <Routers>
    <Routes>
     <Route path="/" element={<Mainpage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
    </Routes>
   </Routers>
  </>
 );
}

export default App;
