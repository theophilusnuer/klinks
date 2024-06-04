
import React from 'react';
import { FaFacebookF, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gradient-to-t from-red-600 to-red-400 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2 font-custom">K-LINKS TRAVEL & TOUR</h3>
            <p className="text-center">Travel the World, Work your Passion. Connecting Dreams to Destinations</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-center">Airport SNNIT Building</p>
            <p className="text-center">Accra-Ghana</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-center">+233 55 228 2547</p>
            <p className="text-center">+233 50 678 4085</p>
            <p className="text-center">klinksgroup1@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">Socials</h3>
            <div className="flex space-x-4">
              <a target='_blank'  rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100094615173345&mibextid=ZbWKwL" aria-label="Facebook" className="text-2xl hover:text-gray-300">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} K-Links. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
