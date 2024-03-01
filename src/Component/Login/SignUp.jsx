import React, { useState, useEffect, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import supabase from "../SupabaseClient";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    immigration_type: "",
    immigration_service: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState();
  const [services, setServices] = useState([]);
  const [types, setTypes] = useState([]);
  const captcha = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/services"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    const fetchTypes = async () => {
      try {
        const response = await fetch(
          "https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/add-immigration"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch types");
        }
        const data = await response.json();
        setTypes(data);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };

    fetchServices();
    fetchTypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.immigration_type ||
      !formData.immigration_service ||
      !formData.password
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // Check if the email contains '@'
    if (!formData.email.includes("@")) {
      setError("Invalid email format. Please enter a valid email address.");
      return;
    }

    supabase.auth
      .signUp({
        email: formData.email,
        password: formData.password,
        options: { captchaToken },
      })
      .then(() => {
        captcha.current.resetCaptcha();
      });

    try {
      const response = await fetch(
        "https://65e09bb8d3db23f76249b70d.mockapi.io/userinfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again later.");
      }

      // Reset the form and captcha
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        immigration_type: "",
        immigration_service: "",
        password: "",
      });
      setCaptchaToken(null);
      captcha.current.resetCaptcha();
      setSuccessMessage("Sign-up successful!");
      navigate("/signin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center bg-cover mt-8">
      <div className="bg-white p-8 rounded-md shadow-md w-3/5 transition-transform border-[1px] border-black">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          {/* Similar inputs for last name, email, and password */}
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
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
              name="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="immigration_type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Immigration Type
            </label>
            <select
              id="immigration_type"
              name="immigration_type"
              className="border rounded w-full py-2 px-3"
              value={formData.immigration_type}
              onChange={handleChange}
            >
              <option value="">Select Immigration Type</option>
              {types.map((type) => (
                <option key={type.id} value={type.titles}>
                  {type.titles}
                </option>
              ))}
            </select>
          </div>
          {/* Input for immigration service */}
          <div className="mb-4">
            <label
              htmlFor="immigration_service"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Immigration Service
            </label>
            <select
              id="immigration_service"
              name="immigration_service"
              className="border rounded w-full py-2 px-3"
              value={formData.immigration_service}
              onChange={handleChange}
            >
              <option value="">Select Immigration Service</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
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
