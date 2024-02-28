import React, { useState, useEffect } from "react";
import Card from "./Card";
import Home1 from "../../Assets/Home-1.jpg";
import Home6 from "../../Assets/Home-6.jpg";
import Home7 from "../../Assets/Home-7.jpg";
import Home8 from "../../Assets/Home-8.jpg";

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
            <Card
              title="Business Immigration"
              image={Home6}
              details={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              ]}
              path="/immigration/business"
            />
            <Card
              title="Family Immigration"
              image={Home7}
              details={[
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ]}
              path="/immigration/family"
            />
            <Card
              title="Skilled Immigration"
              image={Home8}
              details={[
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ]}
              path="/immigration/skilled"
            />
            <Card
              title="Study Immigration"
              image={Home1}
              details={[
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ]}
              path="/immigration/study"
            />
            {/* Add more Card components for additional immigration categories */}
            {apiData.map((cardData, index) => (
              <Card
                key={index}
                title={cardData.title}
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
