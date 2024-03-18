import React, { useState, useEffect } from "react";
import { useLocation ,useNavigate } from "react-router-dom";

const InputForm = () => {
  const location = useLocation();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const slot = searchParams.get("slot");
    setSelectedTimeSlot(slot);
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const postData = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      selectedTimeSlot: selectedTimeSlot,
    };

    // POST the data to your API
    fetch("https://65e40f7388c4088649f63c58.mockapi.io/kayaadmin/calendar-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data successfully posted to API:", data);
        setSubmitSuccess(true); 
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
        });
        navigate("/")
      })
      .catch((error) => {
        console.error("Error posting data to API:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Input Form</h2>
        <h3 className="text-lg text-center text-gray-700 mb-4">
          Selected Time Slot: {selectedTimeSlot}
        </h3>
        {submitSuccess && (
          <p className="text-green-500 text-center mb-4">
            Form submitted successfully!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          {/* Form inputs */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input w-full border-1 border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input w-full border-1 border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 font-bold mb-2 "
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="form-input w-full border-1 border-black rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
