import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import supabase from "../SupabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [occupation, setOccupation] = useState(""); // New state for occupation
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState();
  const captcha = useRef();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !email ||
      !password ||
      password.length < 6 ||
      password !== confirmPassword ||
      !occupation
    ) {
      setError(
        "Please fill in all fields and ensure passwords match (minimum 6 characters for password)."
      );
      return;
    }

    // Check if the email contains '@'
    if (!email.includes("@")) {
      setError("Invalid email format. Please enter a valid email address.");
      return;
    }

    supabase.auth
      .signUp({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        data: { occupation: occupation }, // Include occupation in the data object
        options: { captchaToken },
      })
      .then(() => {
        captcha.current.resetCaptcha();
        // Simulating a successful sign-up
        setTimeout(() => {
          setSuccessMessage("Sign-up successful!");
          navigate("/signin");
        }, 1000);

        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setOccupation("");
        setError("");
      })
      .catch((error) => {
        setError(error.message); // Set error message based on Supabase error
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover">
      <div className="bg-white p-8 rounded-md shadow-md w-96 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your password (min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border rounded w-full py-2 px-3"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="occupation"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Occupation
            </label>
            <select
              id="occupation"
              className="border rounded w-full py-2 px-3"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value="">Select Occupation</option>
              <option value="student">Student</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <HCaptcha
            ref={captcha}
            sitekey="5803d199-7050-436e-86f2-fdc26e302e1e"
            onVerify={(token) => {
              setCaptchaToken(token);
            }}
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
