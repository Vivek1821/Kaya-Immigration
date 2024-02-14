// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Artboard.jpg";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-800 text-white">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />

      {/* Brand Name */}
      <h1 className="text-2xl font-bold ">KAYA Immigration</h1>

      {/* Navigation Links */}
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/immigration">Immigration</Link>
        <Link to="/contactUs">Contact Us</Link>

        {/* Sign In and Sign Up buttons */}
        <Link
          to="/signin"
          className="border rounded px-3 py-1 text-white border-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="border rounded px-3 py-1 text-white border-green-500 hover:bg-green-500 hover:text-white"
        >
          Sign Up
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
