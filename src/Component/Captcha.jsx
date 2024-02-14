import React, { useState, useEffect } from "react";
import { Bounce } from "react-reveal";

function SignUp() {
  const [user, setUser] = useState({
    captchaInput: "",
  });

  const characters = "123abc";
  const [captcha, setCaptcha] = useState(generateString(6));

  useEffect(() => {
    // Update captcha when the component mounts or captcha changes
    setCaptcha(generateString(6));
  }, [captcha]);

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (user.captchaInput.trim() === "") {
      alert("Please fill in the captcha.");
      return;
    }

    if (user.captchaInput.toLowerCase() !== captcha.toLowerCase()) {
      alert("Captcha verification failed. Please try again.");
      setUser({
        ...user,
        captchaInput: "",
      });
      return;
    }

    // If all validations pass, you can perform your sign-up logic here

    // Reset form fields
    setUser({
      ...user,
      captchaInput: "",
    });

    alert("Sign-up successful!");
  };

  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={onSubmit} className="max-w-md mx-auto">
        <Bounce>
          <div className="rounded-md p-3 border border-green-500 mb-4">
            <div id="captcha" className="text-center text-lg font-bold">
              {captcha}
            </div>
          </div>
        </Bounce>
        <div className="mb-4">
          <label
            htmlFor="captchaInput"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter Captcha
          </label>
          <input
            type="text"
            id="captchaInput"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter the captcha"
            name="captchaInput"
            value={user.captchaInput}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
