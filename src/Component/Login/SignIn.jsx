import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce } from "react-reveal";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { login, register } = useKindeAuth();

  useEffect(() => {
    // Generate captcha when the component mounts
    setCaptcha(generateCaptcha());
  }, []);

  const generateCaptcha = () => {
    const characters = "123abc";
    let result = "";
    const length = 6;
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !email ||
      !password ||
      password.length < 6 ||
      password !== confirmPassword ||
      !captchaInput
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

    // Check captcha
    if (captchaInput.toLowerCase() !== captcha.toLowerCase()) {
      setError("Captcha verification failed. Please try again.");
      setCaptchaInput("");
      setCaptcha(generateCaptcha());
      return;
    }

    // Simulating a successful sign-up
    setTimeout(() => {
      setSuccessMessage("Sign-in successful!");
      navigate("/");
    }, 1000);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCaptchaInput("");
    setError("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover">
      <div className="bg-white p-8 rounded-md shadow-md w-96 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
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
              htmlFor="captchaInput"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Captcha
            </label>
            <Bounce>
              <div className="rounded-md p-3 border border-green-500 mb-4">
                <div id="captcha" className="text-center text-lg font-bold">
                  {captcha}
                </div>
              </div>
            </Bounce>
            <input
              type="text"
              id="captchaInput"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter the captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
