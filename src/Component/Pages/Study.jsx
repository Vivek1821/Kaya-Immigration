import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Why Canada?",
    subpoints: [
      "Canada has emerged as one of the most sought-after destinations for international students, including those from India. Renowned for its top-tier universities, cutting-edge research facilities, and diverse cultural experiences, Canada offers a truly enriching educational environment. As an Indian student, studying in Canada opens up a world of opportunities for personal and professional growth. From exceptional academic programs to vibrant campus life, Canada has it all. Whether you aspire to pursue engineering, business, arts, or any other field, Canada provides a wide range of courses to suit your interests.",
      "At KAYA Immigration, we understand that the process of applying for a student visa can be daunting. Our expert team is well-versed in the Canadian student visa application process, and we provide comprehensive guidance and support at every step. From assisting you with document preparation to preparing you for interviews, we ensure a smooth and hassle-free experience. Our goal is to maximize your chances of securing a student visa and fulfilling your dreams of studying in Canada.",
    ],
  },
  {
    id: 2,
    title: "Why Australia?",
    subpoints: [
      "Australia, known for its excellent education system and high living standards, is another top destination for Indian students seeking a world-class education. With its internationally recognized universities and cutting-edge research facilities, Australia offers a diverse range of courses across various disciplines. Whether you’re interested in technology, healthcare, arts, or any other field, Australia provides numerous opportunities to nurture your talents and expand your horizons.",
      "Navigating the Australian student visa application process can be overwhelming, but you don’t have to do it alone. At KAYA Immigration, we have extensive experience in assisting Indian students with their Australian student visa applications. Our dedicated team will guide you through the entire process, ensuring that all necessary documents are prepared accurately and efficiently. We provide personalized attention to your case, keeping you informed and empowered throughout the journey. With our transparent and fast service, we strive to make your study abroad dreams a reality.",
    ],
  },
  {
    id: 3,
    title: "Why Choose KAYA Immigration?",
    subpoints: [
      "Transparency: We believe in honest and open communication with our clients. We provide clear guidance on the application process, requirements, and costs, ensuring you have a complete understanding of every step involved.",
      "Fast Service: Time is of the essence when it comes to studying abroad. We value your aspirations and work diligently to expedite the application process, minimizing delays and maximizing your chances of securing a student visa.",
    ],
  },
  // Add more main points as needed
];

const Study = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].id); // Initialize with the ID of the first main point

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevPoint) => (prevPoint === pointId ? null : pointId));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-red-500">
        STUDY ABROAD: CANADA AND AUSTRALIA FOR INDIAN STUDENTS
      </h1>
      <h3 className="text-lg font-semibold mb-4">
        Welcome to KAYA Immigration, your gateway to world-class education and
        exciting opportunities abroad. Are you an Indian student dreaming of
        pursuing your higher education in Canada or Australia? Look no further!
        At KAYA Immigration, we specialize in assisting Indian students like you
        in navigating the complexities of studying overseas. Our transparent and
        fast services, coupled with a high acceptance ratio, make us your ideal
        partner in achieving your study abroad goals.
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
        Embark on your study abroad journey with confidence and let KAYA
        Immigration be your trusted companion. We are here to make your dreams
        of studying in Canada or Australia a reality. Contact us today to learn
      </p>
    </div>
  );
};

export default Study;
