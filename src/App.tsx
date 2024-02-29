import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar/navBar";
import Catalogo from "./pages/Catalogo/catalogo";
import AboutUs from "./pages/AboutUs/aboutUs";
import ContactUs from "./pages/ContactUs/contactUs";
import Home from "./pages/Home/Home";
import TopBar from "../components/TopBar/topBar";
import { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import { PhoneLink } from "./pages/Home/HomeComponents";
import {StyledPopup} from "../components/StyledPopup"


const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);
  return (
    <Router>
      <div>
      <StyledPopup
      open={showPopup}
      onClose={() => setShowPopup(false)}
    >
          <div style={{ marginBottom: "45px" }}>
            <PhoneLink to="https://api.whatsapp.com/message/SXGUDW4HN3U4J1?autoload=1&app_absent=0">
              <strong>Precisa ligar com urgência?</strong>
              <p>Ligué já</p>
              <img src="whatsapp1.png" alt="Ícone de telefone" />
            </PhoneLink>
          </div>
        </StyledPopup>

        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
