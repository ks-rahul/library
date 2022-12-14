import { Routes, Route, Navigate } from "react-router-dom";

// import BeforeLoginComponent from "../pages/Home";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      {/* <Route path="contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default RoutesComponent;
