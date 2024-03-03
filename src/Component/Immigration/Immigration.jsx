import React, { useState, useEffect } from "react";
import Card from "./Card";

const Immigration = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from API
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        "https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/add-immigration"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      // Ensure each item has a title before modifying path
      const updatedData = data.map((item) => {
        if (!item.titles) {
          throw new Error("Title is missing in API data");
        }
        return {
          ...item,
          path: `/immigration/${item.titles
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
        };
      });
      setApiData(updatedData);
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
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Discover Immigration Services
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Add more Card components for additional immigration categories */}
            {apiData.map((cardData, index) => (
              <Card
                key={index}
                titles={cardData.titles}
                image={cardData.image}
                details={cardData.details}
                path={cardData.path}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Immigration;
