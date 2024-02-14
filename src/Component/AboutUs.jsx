// AboutUsPage.jsx

import React from "react";
import aboutUsImage from "../Assets/Home-3.jpg"; // Replace with the actual path to your image

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h2>
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full h-48 object-cover mb-6 rounded-md shadow-md hover:opacity-80 transition-opacity duration-300"
        />
        <div className="text-gray-700 text-lg leading-relaxed">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              About Our Company
            </h2>
            <p>
              Welcome to Kaya Immigration! We provide unbiased immigration
              advice to help our clients discover the best country for them. Our
              immigration counselors work with you to identify the most
              ideally-suited countries with the best prospects for successful
              migration. We stay up-to-date with the latest immigration laws and
              policies to offer you timely, accurate advice for the right
              immigration decision.
            </p>
          </div>
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-4 text-center transition-opacity hover:opacity-80 duration-300">
              <div className="border border-gray-300 p-4 rounded-md">
                <p className="text-3xl font-bold">2000</p>
                <p className="text-sm">Cases Completed</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-md">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Profile Assessments</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-md">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Our Mission
            </h2>
            <p>
              We assist you with various services, including immigration advice
              and information based on current laws, IELTS preparation, visa
              application preparation, and more. Our mission is to guide you
              through the immigration process and provide valuable support at
              every step.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 w-screen">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Visit Us
        </h2>
        {/* Embedded Google Map */}
        <iframe
          title="Kaya Immigration Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1927721587413!2d73.91418951529415!3d18.567251387379725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f0a34a69d1%3A0x9c8f24d635b4f2ee!2sRegus%2C%20Mhada%20Colony%2C%20Viman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1673040549122!5m2!1sen!2sin
"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUsPage;
