import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Visa Categories:",
    subpoints: [
      "There are several visa options available for permanent residency, including skilled visas, family visas, business visas, and humanitarian visas.",
      "The most common pathway to permanent residency is through skilled migration, where your skills and qualifications are assessed against Australia’s needs.",
    ],
  },
  {
    id: 2,
    title: "Skilled Migration:",
    subpoints: [
      "Skilled Migration programs, such as the General Skilled Migration (GSM) program, offer pathways for individuals with specific skills and qualifications.",
      "The GSM program includes visas like the Skilled Independent visa (subclass 189), Skilled Nominated visa (subclass 190), and Skilled Work Regional (Provisional) visa (subclass 491).",
      "To qualify, you typically need to meet certain criteria, including age, English language proficiency, skills assessment, and minimum points based on factors like education, work experience, and language proficiency.",
    ],
  },
  {
    id: 3,
    title: "Employer-Sponsored Visas:",
    subpoints: [
      "Employer-sponsored visas, such as the Employer Nomination Scheme (subclass 186) and Regional Sponsored Migration Scheme (subclass 187), allow Australian employers to sponsor skilled workers for permanent residency.",
      "These visas require a job offer from an eligible employer and may have additional requirements, including skills assessments and minimum work experience.",
    ],
  },
  {
    id: 4,
    title: "Family Visas:",
    subpoints: [
      "Australian citizens, permanent residents, or eligible New Zealand citizens can sponsor their eligible family members for permanent residency.",
      "Family visas include options like Partner visas, Parent visas, and Child visas, each with specific requirements and waiting periods.",
    ],
  },
  {
    id: 5,
    title: "Business and Investment Visas:",
    subpoints: [
      "Business and investment visas are available for individuals who wish to establish or invest in a business in Australia.",
      "These visas, such as the Business Innovation and Investment visas, require meeting certain business or investment criteria.",
    ],
  },
  {
    id: 6,
    title: "Application Process:",
    subpoints: [
      "Each permanent resident visa category has its own specific application process and requirements.",
      "Generally, you’ll need to submit an expression of interest or visa application, provide supporting documents, pay the application fee, and undergo health and character assessments.",
      "Some visa categories may require sponsorship, nomination, or invitation to apply.",
    ],
  },
  {
    id: 7,
    title: "Processing Times:",
    subpoints: [
      "Processing times for permanent resident visas can vary depending on the visa category, individual circumstances, and demand.",
      "You can check estimated processing times on the Department of Home Affairs website.",
    ],
  },
  {
    id: 8,
    title: "Consultation and Professional Advice:",
    subpoints: [
      "Navigating the permanent resident visa process can be complex, and it’s advisable to seek advice from a registered migration agent or immigration lawyer.",
      "They can assess your eligibility, guide you through the application process, and provide valuable insights tailored to your specific circumstances.",
    ],
  },

  // Add more main points as needed
];

const AustraliaPermanentVisa = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].id); // Initialize with the ID of the first main point

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevPoint) => (prevPoint === pointId ? null : pointId));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-red-500">
        If you’re considering making Australia your long-term home, obtaining a
        permanent resident visa is a significant step towards achieving that
        goal.
      </h1>
      <h3 className="text-lg font-semibold mb-4">
        A permanent resident visa grants you the right to live, work, and study
        in Australia indefinitely. Here’s what you need to know about applying
        for an Australian permanent resident visa:
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
      <p className="mt-8 font-medium">
        It’s important to visit the Department of Home Affairs’ website or
        consult with a qualified migration agent for the most accurate and
        up-to-date information on permanent resident visas, including specific
        requirements, application forms, and processing times.
      </p>
      <p className="mt-3 font-medium">
        Acquiring permanent residency in Australia opens up a world of
        opportunities, including access to healthcare, social security benefits,
        and potential pathways to Australian citizenship. Enjoy the
        multicultural experiences, quality of life, and diverse opportunities
        that Australia has to offer as a permanent resident.
      </p>
    </div>
  );
};

export default AustraliaPermanentVisa;
