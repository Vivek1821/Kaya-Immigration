import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Canada Permanent Residency",
    subpoints: [
      "Canada is the most welcoming country for Migration and Canada offers more immigration programs than any other country which are easy to qualify.",
      "Canada Permanent Residency is the most popular Immigration program in the world",
      "Canada PR visas are issued for five years and can be renewed.",
      "After living in Canada as a permanent resident for a minimum of three years out of five years – that is, 1095 days – you can apply to take up Canadian citizenship.",
    ],
  },
  {
    id: 2,
    title: "Different Pathways for Canada PR",
    subpoints: [
      "Federal Skilled Worker Program (FSW)",
      "Canadian Experience Class (CEC)",
      {
        subtitle: "Provincial Nominee Programs (PNPs)",
        subsubpoints: [
          "Alberta",
          "Ontario",
          "British Columbia",
          "Saskatchewan",
          "Manitoba",
          "Nova Scotia",
          "Prince Edward Island",
          "New Brunswick",
          "Quebec",
          "Yukon",
          // Add more PNP subsubpoints as needed
        ],
      },
    ],
  },
  // Add more main points as needed
];

const CanadaPermanentVisa = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].id);

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevPoint) => (prevPoint === pointId ? null : pointId));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-red-500">
        Canada Permanent Residency
      </h1>

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
                    {typeof subpoint === "string" ? (
                      subpoint
                    ) : (
                      <div>
                        <p className="font-bold">{subpoint.subtitle}</p>
                        <ul>
                          {subpoint.subsubpoints.map((subsubpoint, i) => (
                            <li key={i}>{subsubpoint}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <p className="mt-8 font-medium">
        There are more than 80+ such pathways to migrate to Canada and settle
        there.
      </p>
      <p className="mt-3 font-medium">Schedule a free consultation with us.</p>
    </div>
  );
};

export default CanadaPermanentVisa;
