import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Fade } from "react-reveal";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      point: "Initial Eligibility assessment",
    },
    {
      number: 2,
      point: "Register with us",
    },
    {
      number: 3,
      point: "Apply for the program",
    },
  ];

  const [activeNumber, setActiveNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNumber((prevNumber) =>
        prevNumber === steps.length ? 1 : prevNumber + 1
      );
    }, 3000); // Change content every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <Fade>
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
      </Fade>

      <div className="max-w-4xl mx-auto">
        <Fade delay={500}>
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    activeNumber === step.number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-12 h-0.5 bg-gray-500 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Fade>

        {steps.map((step, index) => (
          <Fade key={index} delay={500 + index * 200}>
            {activeNumber === step.number && (
              <div className="flex items-center justify-center mt-8">
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">{step.point}</h2>
                </div>
              </div>
            )}
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
