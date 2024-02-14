import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Eligibility:",
    subpoints: [
      "You must have a valid passport.",
      "You should be in good health and willing to undergo a medical examination if required.",
      "You must demonstrate that you have sufficient funds to support yourself during your stay in Canada.",
      "You must provide evidence of ties to your home country, such as a job, property, or family, to show that 5. you have reasons to return after your visit.",
      "You should not have any criminal convictions or pose a security risk.",
    ],
  },
  {
    id: 2,
    title: "Application Process:",
    subpoints: [
      "Determine the type of visitor visa you need: There are different categories, including a single-entry visa, multiple-entry visa, or transit visa. Choose the one that suits your travel plans.",
      "Complete the application form: Fill out the appropriate application form accurately and honestly.",
      "Gather supporting documents: This may include your passport, photographs, proof of financial means, travel itinerary, invitation letter (if applicable), and any other documents requested by the Canadian authorities.",
      "Pay the application fee: Check the current fee and make the payment as instructed.",
      "Submit your application: Depending on your country of residence, you may need to submit your application online or at a visa application center or embassy.",
      "Wait for processing: The processing time varies, so it’s advisable to apply well in advance of your intended travel date.",
      "Attend an interview (if required): In some cases, you may be asked to attend an interview at the Canadian embassy or consulate.",
      "Wait for processing: The processing time varies, so it’s advisable to apply well in advance of your intended travel date.",
      "Attend an interview (if required): In some cases, you may be asked to attend an interview at the Canadian embassy or consulate.",
    ],
  },
  {
    id: 3,
    title: "Biometrics Requirement:",
    subpoints: [
      "As part of the application process, you may need to provide your biometric information (fingerprints and photograph) at a Visa Application Center.",
    ],
  },
  {
    id: 4,
    title: "Visa Decision:",
    subpoints: [
      "Once your application is reviewed, you will receive a decision on your visa application.",
      "If approved, your visa will be stamped in your passport.",
      "If refused, the reasons for refusal will be provided, and you may have the option to appeal the decision.",
    ],
  },
  {
    id: 5,
    title: "Entry into Canada:",
    subpoints: [
      "Upon arrival, a border services officer will determine if you meet the requirements to enter Canada.",
      "You may be asked to present your passport, visa, and other supporting documents.",
      "Ensure you have a valid travel insurance policy covering your stay in Canada. It’s essential to note that the visitor visa is not a work permit. If you plan to work in Canada, you will need to explore the appropriate work permit options.",
    ],
  },

  // Add more main points as needed
];

const CanadaTemporaryVisa = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].id); // Initialize with the ID of the first main point

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevPoint) => (prevPoint === pointId ? null : pointId));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-red-500">
        Canada Visitor Visa/Temporary Residence
      </h1>
      <h3 className="text-lg font-semibold mb-4">
        If you’re planning a visit to Canada, you’ll likely need a visitor visa,
        also known as a temporary resident visa. This visa allows you to enter
        and stay in Canada for a specific period, depending on the type of visa
        you apply for and the decision made by the Canadian immigration
        authorities.
      </h3>
      <h4 className="text-base font-medium mb-4">
        To help you understand the process and requirements for obtaining a
        visitor visa, we’ve compiled the following information:
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
      <p className="font-semibold mt-4">
        For the most up-to-date and detailed information on visitor visas,
        including application forms and fee schedules, we recommend visiting the
        official website of Immigration, Refugees, and Citizenship Canada (IRCC)
        at www.canada.ca/immigration.
      </p>
    </div>
  );
};

export default CanadaTemporaryVisa;
