import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import siteIcon from '../asset/image/site icon.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md p-2 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex'>
          <img className='w-12 h-12' src={siteIcon} alt="" />
          <a href="/" className="text-black text-lg font-bold pt-2 font-custom">K-Links Travel & Tour</a>
        </div>
        <div className="hidden md:flex space-x-6 items-center px-2">
          <a href="/" className="">Home</a>
          <HashLink to='/#aboutus'>
            <a href='' className="">Who We Are</a>
          </HashLink>

          <HashLink to='/#services'>
            <a href='' className="">What We Do </a>
          </HashLink>

          <HashLink to='/#testimonials'>
            <a href='' className="">Testimonials</a>
          </HashLink>

          <HashLink to='/#footer'>
            <a href='' className="">Contact</a>
          </HashLink>
        </div>

        <div className="md:hidden flex items-center space-x-4">

          <button className="text-red-600" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white mt-2 p-4 space-y-2">
          <a href="/" className="block  p-2">Home</a>
          <a href="/#aboutus" className="block  p-2">Who We Are</a>

          <a href='/#services' className="block  p-2">What We Do </a>
          <a href='/#testimonials' className="block  p-2">Testimonials</a>

          <a href="/#footer" className="block  p-2">Contact</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
