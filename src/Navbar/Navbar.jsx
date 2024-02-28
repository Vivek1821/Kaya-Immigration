// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Artboard.jpg";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navbar = () => {
  const { login, register, logout, isAuthenticated } = useKindeAuth();

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
        {/* <Link
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
        </Link> */}
        {!isAuthenticated && (
          <>
            <button onClick={register} type="button">
              Register
            </button>
            <button onClick={login} type="button">
              Log In
            </button>
          </>
        )}
        {isAuthenticated && (
          <>
            <button onClick={logout} type="button">
              Logout
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
