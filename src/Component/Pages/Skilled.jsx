import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Immigrating as a Skilled Worker    ",
    subpoints: [
      "Canada and Australia are renowned for their robust economies and excellent work environments, making them top choices for skilled workers seeking new horizons. Whether you’re an IT professional, engineer, healthcare practitioner, or have expertise in other fields, immigrating as a skilled worker opens up a world of possibilities.      ",
    ],
  },
  {
    id: 2,
    title: "Work Visa and LMIA: Unlocking Your Career Potential    ",
    subpoints: [
      "At KAYA Immigration, we understand the complexities involved in the immigration process. Our comprehensive services cater specifically to workers who wish to obtain work visas and Labor Market Impact Assessments (LMIAs). These documents are crucial in ensuring that your skills are in demand and that you can contribute to the workforce in Canada or Australia.",
      "A work visa is an essential requirement for individuals who want to live and work in a foreign country. It grants you the legal authorization to pursue employment opportunities in your chosen destination. Meanwhile, an LMIA is a document issued by the government that verifies the need for a foreign worker to fill a specific job role. It helps employers demonstrate that there is a genuine shortage of qualified workers in the local labor market.",
    ],
  },
  {
    id: 3,
    title: "Your Advantage with KAYA Immigration    ",
    subpoints: [
      "Choosing KAYA Immigration as your trusted immigration partner comes with several advantages. Our commitment to providing fast-track application processing sets us apart from the competition. We understand the importance of time in your immigration journey, and our streamlined processes ensure that you receive prompt attention, reducing waiting times significantly.",
      "Moreover, our team of dedicated professionals is here to offer you comprehensive customer support throughout the entire process. We understand that immigration can be a daunting experience, and we strive to make it as smooth and stress-free as possible. From assisting you in completing the necessary paperwork to providing guidance on interview preparations, we are with you every step of the way.  ",
    ],
  },

  // Add more main points as needed
];

const Skilled = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].id); // Initialize with the ID of the first main point

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevPoint) => (prevPoint === pointId ? null : pointId));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-red-500">
        Skilled Immigration Services by KAYA Immigration: Your Pathway to Canada
        and Australia
      </h1>
      <h3 className="text-lg font-semibold mb-4">
        Welcome to KAYA Immigration, your trusted partner in skilled immigration
        services to Canada and Australia. If you’re looking to make a fresh
        start and explore exciting work opportunities in these countries, our
        team of experienced professionals is here to guide you every step of the
        way.
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
        Contact KAYA Immigration today to take the first step towards your dream
        career in Canada or Australia. Let us be your trusted partner in
        realizing your skilled immigration aspirations.
      </p>
    </div>
  );
};

export default Skilled;
