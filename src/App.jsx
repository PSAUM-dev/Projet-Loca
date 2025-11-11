import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/sections/Navbar.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Pharmacies from "./pages/Pharmacies.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";

function App() {


  return (
    
    <BrowserRouter>
    
      <header className="fixed top-0 left-0 md:static z-9999">
        <Navbar />
      </header>

      <main className="mt-16 md:mt-0">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/pharmacies" element={<Pharmacies />} />
          <Route path="/services"   element={<Services />} />
          <Route path="/about"      element={<About />} />
        </Routes>
      </main>

    </BrowserRouter>

  )
}

export default App
