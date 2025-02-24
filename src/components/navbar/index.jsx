import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import siteIcon from '../asset/image/site icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full p-2 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-12 h-12" src={siteIcon} alt="Site Icon" />
          <a
            href="/"
            className={`text-lg font-bold pt-2 font-custom ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            K-Links Travel & Tour
          </a>
        </div>

        <div className={`hidden md:flex space-x-6 items-center px-2 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <a href="/" className="">Home</a>
          <HashLink to="/#aboutus" className="">Who We Are</HashLink>
          <HashLink to="/#services" className="">What We Do</HashLink>
          <HashLink to="/#testimonials" className="">Testimonials</HashLink>
          <HashLink to="/#footer" className="">Contact</HashLink>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button className={`${isScrolled ? 'text-black' : 'text-white'}`} onClick={toggleMenu}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white mt-2 p-4 space-y-2">
          <a href="/" className="block p-2 text-black">Home</a>
          <a href="/#aboutus" className="block p-2 text-black">Who We Are</a>
          <a href="/#services" className="block p-2 text-black">What We Do</a>
          <a href="/#testimonials" className="block p-2 text-black">Testimonials</a>
          <a href="/#footer" className="block p-2 text-black">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
