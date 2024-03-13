import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/Artboard.jpg";
import supabase from "../Component/SupabaseClient";

const Navbar = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  console.log(session);

  useEffect(() => {
    // Fetch the current user session when the component mounts
    const fetchSession = async () => {
      const userSession = supabase.auth.getSession();
      setSession(userSession);
    };

    fetchSession();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      // Redirect or perform any other action after sign-out
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  };

  return (
    <div className="flex justify-between items-center p-3 bg-gray-800 text-white">
      {/* Logo */}
      <div className="flex gap-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />

        {/* Brand Name */}
        <h1
          className="text-2xl font-bold text-start cursor-pointer"
          onClick={() => navigate("/")}
        >
          KAYA Immigration
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-4 flex">
        <Link to="/">Home</Link>
        <Link to="/aboutUs">About Us</Link>

        <Link to="/contactUs">Contact Us</Link>
        {session === null ? (
          <div className="flex gap-2">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        ) : (
          <>
            <div className="flex gap-2">
              <Link to="/services">Services</Link>
              <Link to="/immigration">Immigration</Link>
            </div>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
