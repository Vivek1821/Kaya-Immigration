import React from "react";
import { Link } from "react-router-dom";

const Service = ({ icon, title, details }) => {
  // Convert the title to a URL-friendly format
  const formattedTitle = title.toLowerCase();

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 rounded-lg overflow-hidden bg-white p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl">
          {icon}
        </div>
        <h4 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{details}</p>
        <Link
          to={`/services/${formattedTitle}`}
          className="mt-4 block text-primary hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Our Services
        </h2>
        <h3 className="mb-5">
          Kaya Immigration provides consultation on various ways of temporary
          and permanent settlement abroad. Few of them are as follows.
        </h3>
        <div className="-mx-4 flex flex-wrap">
          <Service
            title="CanadaPermanentVisa"
            details="We create modern, responsive, and scalable web applications using the latest technologies."
            icon="🚀"
          />
          <Service
            title="CanadaTemporaryVisa"
            details="Our creative team crafts beautiful and user-friendly interfaces for a seamless user experience."
            icon="✨"
          />
          <Service
            title="AustraliaPermanentVisa"
            details="Build cross-platform mobile apps that run smoothly on iOS and Android devices."
            icon="📱"
          />
          {/* Add more Service components for additional services */}
        </div>
      </div>
    </section>
  );
};

export default Services;
