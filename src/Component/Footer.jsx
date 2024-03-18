import React from 'react';
import { FaInstagramSquare , FaTwitterSquare } from "react-icons/fa";
import logo from "../Assets/Artboard.jpg";
import { useNavigate } from 'react-router-dom';


const Footer = () => {

  const navigatae = useNavigate()

  return (
    <footer className="bg-gray-900 py-4 flex">
      <div className="container mx-auto flex items-center justify-between relative bottom-0">
      <div className="flex gap-2">
        <img src={logo} alt="Logo" className="h-8 w-8"/>
      </div>
        <div className="footer__middle text-white">
          <p>@2024  Kaya Immigration</p>
        </div>
        <div className="footer__right flex gap-2">
          <a href="https://www.twitter.com" className="text-white mr-4"><FaTwitterSquare /></a>
          <a href="https://www.instagram.com" className="text-white"><FaInstagramSquare /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer