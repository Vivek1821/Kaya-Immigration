// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Services from "./Component/Services/Services";
import Immigration from "./Component/Immigration/Immigration";
import Navbar from "./Navbar/Navbar";
import SignIn from "./Component/Login/SignIn";
import SignUp from "./Component/Login/SignUp";
import "./App.css";
import AustraliaPermanentVisa from "./Component/Pages/AustraliaPermanentVisa";
import CanadaPermanentVisa from "./Component/Pages/CanadaPermanentVisa";
import CanadaTemporaryVisa from "./Component/Pages/CanadaTemporaryVisa";
import Business from "./Component/Pages/Business";
import Study from "./Component/Pages/Study";
import Family from "./Component/Pages/Family";
import Skilled from "./Component/Pages/Skilled";
import Calendar from "./Component/Calendar/Calendar";
import InputForm from "./Component/Calendar/InputForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/australiapermanentvisa"
          element={<AustraliaPermanentVisa />}
        />
        <Route
          path="/services/canadapermanentvisa"
          element={<CanadaPermanentVisa />}
        />
        <Route
          path="/services/canadatemporaryvisa"
          element={<CanadaTemporaryVisa />}
        />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/immigration/business" element={<Business />} />
        <Route path="/immigration/study" element={<Study />} />
        <Route path="/immigration/family" element={<Family />} />
        <Route path="/immigration/skilled" element={<Skilled />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/inputform" element={<InputForm />} />
      </Routes>
    </>
  );
}

export default App;
