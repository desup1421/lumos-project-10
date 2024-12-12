import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <main className="tracking-wide">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
