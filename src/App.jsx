import { Routes, Route } from "react-router-dom";

import Navbar from "./componetnts/Navbar";

import Features from "./componetnts/Features";
import Pricing from "./componetnts/Pricing";
import Footer from "./componetnts/Footer";
import Login from "./componetnts/Login";
import SignUp from "./componetnts/SignUp";
import Manga from "./componetnts/Manga";
import Watch from "./componetnts/Watch";
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <Routes>
     
        <Route
          path="/"
          element={
            <>
              
              <Features />
              
              <Footer />
            </>
          }
        />

        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Manga" element={<Manga />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>
    </div>
  );
}

export default App;
