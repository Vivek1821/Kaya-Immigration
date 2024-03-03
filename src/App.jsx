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
          path="/services/canadapermanentresidency"
          element={<CanadaPermanentVisa />}
        />
        <Route
          path="/services/canadavisitorvisa"
          element={<CanadaTemporaryVisa />}
        />
        <Route
          path="/services/australiapermanentresidentvisa"
          element={<AustraliaPermanentVisa />}
        />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/immigration/businessimmigration" element={<Business />} />
        <Route path="/immigration/studyabroad" element={<Study />} />
        <Route path="/immigration/familyimmigration" element={<Family />} />
        <Route path="/immigration/skilledimmigration" element={<Skilled />} />
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
