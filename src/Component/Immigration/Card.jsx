import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ titles, image, details }) => {
  const formattedTitle = titles.replace(/\s/g, "").toLowerCase();

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const renderDetails = () => {
    if (typeof details === "string") {
      return <p className="text-gray-600">{details}</p>;
    } else if (Array.isArray(details)) {
      return details.map((paragraph, index) => (
        <p key={index} className="text-gray-600 mb-2">
          {paragraph}
        </p>
      ));
    } else {
      return <p className="text-gray-600">{details.toString()}</p>;
    }
  };

  return (
    <div
      className={`mb-10 overflow-hidden bg-white rounded-lg shadow-lg ${
        showDetails ? "h-auto" : "h-60"
      }`}
    >
      <div className="relative h-60 overflow-hidden">
        <img src={image} alt={titles} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-end p-6">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDetails}
            >
              <FaAngleDown
                className={`text-primary transform ${
                  showDetails ? "rotate-180" : "rotate-0"
                } transition-transform duration-300 ease-in-out`}
              />
              <h4 className="ml-2 text-sm font-semibold">{titles}</h4>
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="p-6 flex flex-col">
          {renderDetails()}
          <Link
            to={`/immigration/${formattedTitle}`}
            className="mt-4 block text-center py-2 bg-primary text-black font-semibold rounded-full"
          >
            Read More
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
