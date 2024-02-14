import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Family-Centric Immigration Policies:",
    subpoints: [
      "Both Canada and Australia prioritize family reunification and offer pathways specifically designed to facilitate the immigration of immediate family members.",
      "These programs enable individuals to sponsor their spouses, children, parents, and in some cases, grandparents, providing an opportunity for families to stay together and build a future in a new country.",
    ],
  },
  {
    id: 2,
    title: " Strong Job Markets",
    subpoints: [
      " Canada and Australia offer robust job markets with diverse employment opportunities.",
      "These countries actively seek skilled professionals to contribute to their growing economies. Once you obtain permanent residency, you and your family members can work and pursue fulfilling careers in various industries.",
    ],
  },

  // Add more main points as needed
];

const Family = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].id); // Initialize with the ID of the first main point

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevPoint) => (prevPoint === pointId ? null : pointId));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-red-500">
        Canada and Australia: Convenient Permanent Residency Options for Family
        Immigration 🌍
      </h1>
      <h3 className="text-lg font-semibold mb-4">
        Are you considering a move to a new country with your family? Canada and
        Australia have emerged as highly desirable destinations for individuals
        seeking permanent residency and a better quality of life. These
        countries offer numerous benefits and pathways for family immigration,
        making the process more convenient and welcoming. Let’s explore why
        Canada and Australia are popular choices for families looking to settle
        abroad
      </h3>
      <div className="flex items-start w-full">
        <div className="">
          <ul className="list-disc pl-4 ">
            {data.map((point) => (
              <li
                key={point.id}
                onClick={() => handlePointClick(point.id)}
                className={`cursor-pointer ${
                  selectedPoint === point.id
                    ? "text-blue-500"
                    : "text-black mr-20"
                }`}
              >
                {point.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 pl-5 ">
          {selectedPoint && (
            <div className="grid grid-cols-1 gap-3">
              {data
                .find((point) => point.id === selectedPoint)
                .subpoints.map((subpoint, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-md shadow-md mb-2"
                  >
                    {subpoint}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <p className="mt-3 font-medium">
        With their family-centric immigration policies, inclusive societies,
        excellent education and healthcare systems, strong job markets, and
        exceptional quality of life, these countries offer a promising future
        for families looking to embark on a new adventure together.
      </p>
    </div>
  );
};

export default Family;
