import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import siteIcon from '../asset/image/site icon.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md p-2 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div  className='flex'>
        <img className='w-12 h-12' src={siteIcon} alt="" />
        <a href="/" className="text-black text-lg font-bold pt-2">K-Links Travel & Tour</a>
        </div>
        <div className="hidden md:flex space-x-6 items-center px-2">
          <a href="/" className="">Home</a>
          <HashLink to='/#aboutus'>
            <p className="">About Us</p>
          </HashLink>
          <HashLink to='/#services'>
            <a href='' className="">Our Services</a>
            </HashLink>
            <a href='' className="">Testimonials</a>
           
          <HashLink to='/#footer'>
            <p className="">Contact</p>
          </HashLink>
          
        </div>
        <div className="md:hidden flex items-center space-x-4">
         
          <button className="text-gray-800" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white mt-2 p-4 space-y-2">
          <a href="/" className="block  p-2">Home</a>
          <a href="#aboutus" className="block  p-2">About Us</a>
          
            <a href='#services' className="block  p-2">Our services  </a>
            <a href='' className="block  p-2">Testimonials</a>
       
          <a href="/#footer" className="block  p-2">Contact</a>
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
