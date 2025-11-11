import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Servizi from "./pages/Servizi";
import Camere from "./pages/Camere";
import ChiSiamo from "./pages/ChiSiamo";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/camere" element={<Camere />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
