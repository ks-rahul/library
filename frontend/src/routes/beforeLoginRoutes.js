import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/auth/Login";

function BeforeLoginRoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default BeforeLoginRoutesComponent;
