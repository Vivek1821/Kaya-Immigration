import React, { useState } from "react";
import Home1 from "../../Assets/Home-1.jpg";
import Home4 from "../../Assets/Home-4.jpg";
import Home6 from "../../Assets/Home-6.jpg";
import Home7 from "../../Assets/Home-7.jpg";
import Home8 from "../../Assets/Home-8.jpg";
import "./NewsAndTips.css";

// Import the necessary styles for the animation

const NewsAndTips = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [hoveredItem, setHoveredItem] = useState(null);

  const tabData = {
    news: [
      {
        id: 1,
        title: "Explore 5 Reasons a Work Visa to Europe May be Denied.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Home1,
      },
      {
        id: 2,
        title: "Dreaming of Work in Another Country? Here Are 5 Ways.",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Home6,
      },
      {
        id: 3,
        title: "New Immigration Opportunities for Graduates through Ontario",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        image: Home7,
      },
    ],
    events: [
      {
        id: 4,
        title: "The Importance of Learning the Language in a New Country",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: Home8,
      },
      {
        id: 5,
        title: "Everything You Need to Know About the Student Visa",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: Home1,
      },
      {
        id: 6,
        title: "Immigration And Marriage: What Happens If You Marry Or Divorce",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: Home8,
      },
      // ... (similar data for other events)
    ],
    tips: [
      {
        id: 7,
        title: "What Are The Best Countries to Immigrate With The Family?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Home4,
      },
      {
        id: 8,
        title: "Required Documents for Family Immigration Visas",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Home7,
      },
      {
        id: 9,
        title: "Seven Reasons People Decide to Move to Another Country",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Home1,
      },
      // ... (similar data for other tips)
    ],
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-5">News and Tips</h1>

      <div className="flex justify-around mb-4">
        {["news", "events", "tips"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all "
            } focus:outline-none`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex justify-around flex-wrap">
        {tabData[activeTab].map((item) => (
          <div
            key={item.id}
            className="news-item flex-1 p-4 rounded-lg mb-4 bg-white transition-transform shadow-md hover:shadow-lg hover:bg-gray-200 relative"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            {hoveredItem === item.id && (
              <div className="content fade-in">
                <h3 className="text-lg font-bold mb-2 mt-2">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndTips;
