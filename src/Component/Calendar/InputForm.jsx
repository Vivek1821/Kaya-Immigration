import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const InputForm = () => {
  const location = useLocation();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });

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
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Input Form</h2>
        <h3 className="text-lg text-center text-gray-700 mb-4">
          Selected Time Slot: {selectedTimeSlot}
        </h3>
        <form onSubmit={handleSubmit}>
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
              className="form-input w-full border-1 border-black"
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
              className="form-input w-full border-1 border-black"
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
              className="form-input w-full border-1 border-black"
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
