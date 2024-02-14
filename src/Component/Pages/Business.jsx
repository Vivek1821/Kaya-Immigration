import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Simplified Process",
    subpoints: [
      "The SUV program simplifies the visa application process, eliminating many of the bureaucratic hurdles associated with traditional immigration routes. KAYA Immigration will guide you through each step, ensuring you meet all the requirements and submit a compelling application.",
    ],
  },
  {
    id: 2,
    title: "Access to New Markets:",
    subpoints: [
      "By establishing your business through the SUV program, you gain access to a new market with vast potential. You can tap into the local economy, connect with investors, and leverage the unique opportunities that the host country offers.",
    ],
  },
  {
    id: 3,
    title: "Supportive Ecosystem:",
    subpoints: [
      "The SUV program provides entrepreneurs with a supportive ecosystem that fosters innovation and growth. You’ll have access to mentorship programs, networking events, and incubators that can help propel your business forward.",
    ],
  },
  {
    id: 4,
    title: "Permanent Residency Pathway:",
    subpoints: [
      "Many SUV programs offer a pathway to permanent residency, allowing you to settle and build your future in the host country. KAYA Immigration will help you understand the long-term prospects and guide you toward achieving your immigration goals.",
    ],
  },

  // Add more main points as needed
];

const data2 = [
  {
    id: 1,
    title: "Program Eligibility Assessment:",
    subpoints: [
      "Our team will assess your business idea, qualifications, and eligibility for the SUV program, ensuring that you meet the criteria set by the host country.",
    ],
  },
  {
    id: 2,
    title: "Application Preparation:",
    subpoints: [
      "We will guide you through the entire application process, helping you prepare the necessary documents, business plans, and financial statements required for a successful application.",
    ],
  },
  {
    id: 3,
    title: "Legal Support:",
    subpoints: [
      " Our experienced immigration lawyers will provide expert legal advice, ensuring compliance with immigration laws and regulations. We will also represent you during the application process, liaising with relevant authorities on your behalf.",
    ],
  },
  {
    id: 4,
    title: "Business Support:",
    subpoints: [
      "KAYA Immigration understands the unique challenges faced by entrepreneurs. We offer tailored business support, connecting you with local resources, mentorship programs, and networking opportunities to help you thrive in your new business environment.",
    ],
  },
];

const Business = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].id); // Initialize with the ID of the first main point

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevPoint) => (prevPoint === pointId ? null : pointId));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-red-500">
        Welcome to KAYA Immigration: Your Gateway to Business Immigration
      </h1>
      <h3 className="text-lg font-semibold mb-4">
        About KAYA Immigration: KAYA Immigration is a leading brand in the field
        of business immigration, committed to assisting entrepreneurs and
        businesses in achieving their international mobility goals. Our
        dedicated team of immigration experts is passionate about helping you
        navigate the complex world of immigration, ensuring a smooth and
        hassle-free experience. With our in-depth knowledge and personalized
        approach, we strive to make your business immigration journey seamless
        and successful.
      </h3>
      <h5 className="mb-3">
        Start-up Visa Program: Unlocking Opportunities for Entrepreneurs Are you
        an aspiring entrepreneur seeking international mobility? Look no further
        than the Start-up Visa (SUV) program, a remarkable opportunity for
        visionary individuals to establish their businesses in a foreign
        country. KAYA Immigration is here to guide you through the SUV program
        and help you take advantage of this amazing opportunity.
      </h5>
      <h5 className="mb-3">
        What is the Start-up Visa Program? The Start-up Visa program is designed
        to attract talented entrepreneurs with innovative business ideas to set
        up their ventures in a foreign country. This program offers a
        streamlined pathway for aspiring entrepreneurs to obtain a visa,
        allowing them to establish and grow their businesses in a vibrant and
        supportive environment.
      </h5>
      <h4 className="mb-2">
        Why Choose the Start-up Visa Program? The SUV program stands out as one
        of the most convenient ways for entrepreneurs to achieve international
        mobility. Here’s why:
      </h4>
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
      <h4>
        How KAYA Immigration Can Assist You: At KAYA Immigration, we specialize
        in assisting entrepreneurs in navigating the Start-up Visa program. Our
        comprehensive services include:
      </h4>
      <div className="flex items-start w-full">
        <div className="">
          <ul className="list-disc pl-4 ">
            {data2.map((point) => (
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
    </div>
  );
};
export default Business;
