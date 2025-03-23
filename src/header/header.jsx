import React, { useState } from "react";
import { Menu, X, Home, Boxes, Tag, Phone } from "lucide-react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); 
  return (
    <header className="bg-[#010066] fixed top-0 left-0 w-full text-white py-4 px-6 flex items-center justify-between shadow-lg z-50 transition-all duration-300">
      
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.jpg"
          alt="Company Logo"
          className="w-[110px] h-[60px] rounded-full lg:ml-[80px] "
        />
      </div>

      
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      
      <nav
        className={`absolute md:relative top-16 left-0 md:top-auto md:left-auto bg-[#010066] md:bg-transparent w-full md:w-auto p-6 md:p-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 items-center w-full">
  
  <li className="w-full md:w-auto text-center">
    <a
      href="#home"
      onClick={() => setActiveTab("home")}
      className={`flex items-center space-x-2 py-2 md:py-0 hover:text-gray-300 transition justify-center ${
        activeTab === "home" ? "border-b-2 border-green-500" : "border-b-2 border-white"
      }`}
    >
      <Home className="w-6 h-6 p-1 border-2 border-white rounded-md opacity-75 brightness-75 mb-2" />
      <span>Home</span>
    </a>
  </li>

  
  <li className="w-full md:w-auto text-center">
    <a
      href="#collections"
      onClick={() => setActiveTab("collections")}
      className={`flex items-center space-x-2 py-2 md:py-0 hover:text-gray-300 transition justify-center  ${
        activeTab === "collections" ? "border-b-2 border-green-500" : "border-b-2 border-white "
      }`}
    >
      <Boxes className="w-6 h-6 p-1 border-2 border-white rounded-md opacity-75 brightness-75 mb-2" />
      <span>Collections</span>
    </a>
  </li>

  
  <li className="w-full md:w-auto text-center">
    <a
      href="#offers"
      onClick={() => setActiveTab("offers")}
      className={`flex items-center space-x-2 py-2 md:py-0 hover:text-gray-300 transition justify-center ${
        activeTab === "offers" ? "border-b-2 border-green-500" : "border-b-2 border-white"
      }`}
    >
      <Tag className="w-6 h-6 p-1 border-2 border-white rounded-md opacity-75 brightness-75 mb-2" />
      <span>Offers</span>
    </a>
    
  </li>
  
</ul>

      </nav>

      
      <div className="hidden md:flex flex-col items-center">
    
        <div className="flex items-center gap-1">
          
          <a
            href="https://wa.me/919999000123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition flex items-center"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-4 h-4 p-1 border-2 border-white rounded-md opacity-75 brightness-75 text-green-500"
            />
          </a>
          <div className="brightness-75">|</div>
          
          <a href="tel:+919999000123" className="hover:text-gray-300 transition flex items-center">
            <Phone className="w-6 h-6 p-1 border-2 border-white rounded-md opacity-75 brightness-75" />
            <span className="ml-2">+91-9999000123</span>
          </a>
        </div>

        
        <p className="brightness-75 text-sm ml-[70px] mt-[-10px] text-center">Call us to Book now</p>
      </div>
    </header>
  );
};

export default Header;
