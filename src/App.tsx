// App.js

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar/navBar.tsx";
import Catalogo from "./pages/Catalogo/catalogo.tsx";
import AboutUs from "./pages/AboutUs/aboutUs.tsx";
import ContactUs from "./pages/ContactUs/contactUs.tsx";
import Home from "./pages/Home/Home.tsx";
import TopBar from "../components/TopBar/topBar.tsx";
import React from "react";
import PopUp from "../components/PopUp/PopUp.tsx";

const App = () => {
  

  return (
    <Router>
      <PopUp/>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
     
    </Router>
  );
};

export default App;
