import { useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import { Mainpage } from "./pages/landing page/Mainpage";
import { Login } from "./pages/auth/Login";

function App() {
 const [count, setCount] = useState(0);

 return (
  <>
   <Routers>
    <Routes>
     <Route path="/" element={<Mainpage />} />
     <Route path="/login" element={<Login />} />
    </Routes>
   </Routers>
  </>
 );
}

export default App;
