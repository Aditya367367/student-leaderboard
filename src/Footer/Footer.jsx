import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full font-maven">
      
      <div className="bg-[#010066]  py-6 text-center">
        <h3 className="text-lg  font-medium">Save time, save money!</h3>
        <p className=" font-light">Sign up and we'll send the best deals to you</p>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-[2px] text-gray-900 outline-none"
          />
          <button className="bg-[#006CE3] px-4 py-2 rounded-[2px] hover:bg-blue-500 ml-1">
            Subscribe
          </button>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
        
        <div>
          <h4 className="font-semibold text-lg">Important Links</h4>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/company-profile" className="hover:underline">Company Profile</a></li>
            <li><a href="/services" className="hover:underline">Our Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/blog" className="hover:underline">Read Blog</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold text-lg">Global Update News</h4>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li><a href="/news/1" className="hover:underline">100 Crore Resort New Zone</a></li>
            <li><a href="/news/2" className="hover:underline">The Fresh House Child</a></li>
            <li><a href="/news/3" className="hover:underline">Great Partners in Education</a></li>
            <li><a href="/news/4" className="hover:underline">What Happens When We Live?</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold text-lg">Photo Gallery</h4>
          <div className="mt-4 grid grid-cols-3 gap-2">
          <img src="https://t4.ftcdn.net/jpg/03/16/45/77/360_F_316457746_jcEMNJy3LRoH8XwmQ4bozIOlCdji9uSi.jpg" alt="Gallery 1" className="w-20 h-20 rounded-md"/>
        <img src="https://t4.ftcdn.net/jpg/03/16/45/77/360_F_316457746_jcEMNJy3LRoH8XwmQ4bozIOlCdji9uSi.jpg" alt="Gallery 2" className="w-20 h-20 rounded-md"/>
        <img src="https://t4.ftcdn.net/jpg/03/16/45/77/360_F_316457746_jcEMNJy3LRoH8XwmQ4bozIOlCdji9uSi.jpg" alt="Gallery 3" className="w-20 h-20 rounded-md"/>
          </div>
        </div>

        
        <div>
  <h4 className="font-semibold text-lg">Travel Packages</h4>
  <p className="mt-4 flex items-center gap-2 mt-2">
    <span className="border border-white p-2 rounded-full">
      <MapPin size={10} className="text-white" />
    </span>
    Antony Street, 21/42, Building 15, ALS
  </p>

  <p className="flex items-center gap-2 mt-2">
    <span className="border border-white p-2 rounded-full">
      <Phone size={10} className="text-white" />
    </span>
    +177 (989) 987065
  </p>

  <p className="flex items-center gap-2 mt-2">
    <span className="border border-white p-2 rounded-md">
      <Mail size={10} className="text-white" />
    </span>
    <a href="mailto:support@smarttravepages.com" className="hover:underline">
      support@smarttravepages.com
    </a>
  </p>
</div>
      </div>

      
      <div className="border-t border-gray-700 py-4 text-center">
        <div className="flex justify-center space-x-6">
          <a href={process.env.REACT_APP_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={process.env.REACT_APP_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2025 All Rights Reserved | Designed and Developed by SmartTravelPages</p>
      </div>
    </footer>
  );
};

export default Footer;
