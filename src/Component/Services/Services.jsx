import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Service = ({ icon, title, details }) => {
  // Convert the title to a URL-friendly format
  const formattedTitle = title.replace(/\s/g, "").toLowerCase();

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 rounded-lg overflow-hidden bg-white p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-sky-300 text-white text-2xl">
          {icon.startsWith("http") ? (
            <img src={icon} alt="icon" className="h-8 w-8" />
          ) : (
            <span>{icon}</span>
          )}
        </div>
        <h4 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{details}</p>
        <Link
          to={`/services/${formattedTitle}`}
          className="mt-4 block text-primary hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from API
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        "https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/services"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data from API when component mounts
    fetchDataFromApi();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Our Services
        </h2>
        <h3 className="mb-5">
          Kaya Immigration provides consultation on various ways of temporary
          and permanent settlement abroad. Few of them are as follows.
        </h3>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="-mx-4 flex flex-wrap">
            {/* Add more Service components for additional services */}
            {apiData.map((serviceData, index) => (
              <Service
                key={index}
                title={serviceData.title}
                details={serviceData.details}
                icon={serviceData.icon}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
