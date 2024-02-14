// Cards.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";
import Home4 from "../../Assets/Home-4.jpg";

import { Fade } from "react-reveal";

const Cards = () => {
  const points = [
    "Permanent Immigration",
    "Study Immigration",
    "Work Immigration.",
  ];

  return (
    <Fade delay={1500}>
      <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden h-[500px]">
        {/* Left side with image */}
        <div className="flex-shrink-0 w-2/3  relative overflow-hidden mb-5">
          <img
            src={Home4}
            alt="Content"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Right side with content */}
        <div className="flex-grow p-6">
          {/* Headline */}
          <h2 className="text-3xl font-bold mb-4 text-black">
            Your Reliable Partners!{" "}
          </h2>

          {/* Paragraph */}
          <p className="text-black mb-4">
            Once you have decided that you are comfortable with our assessment,
            we will provide you with a complete breakdown of all service fees
            from beginning to end with no hidden fees! We also offer flexible
            payment plans and you don’t pay anything more.
          </p>

          {/* Points with checkmark icons */}
          <ul className="list-disc list-inside">
            {points.map((point, index) => (
              <li key={index} className="flex items-center mb-2 text-black">
                <FaCheck className="text-green-500 mr-2" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default Cards;
