import React, { useState, useEffect } from 'react';
import hero1 from "../asset/image/hero1.jpg";
import hero2 from "../asset/image/hero2.jpg";
import hero3 from "../asset/image/hero3.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      url: hero1,
      text: 'Travel and Work at Ease!',
      sub: "Get connected to decent and well paying job offers across the globe. ",
    },
    {
      url: hero3,
      text: 'Travel and Work at Ease!',
      sub: "Get connected to decent and well paying job offers across the globe. ",
    },
    {
      url: hero2,
      text: 'Travel and Work at Ease!',
      sub: "Get connected to decent and well paying job offers across the globe. ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-[500px] md:h-[590px]">
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.url} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute w-full text-center">
            <h1 className="text-4xl font-bold md:text-7xl">{slide.text}</h1>
            <h2 className="text-2xl mt-2">{slide.sub}</h2>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 p-8 px-4 md:px-32 left-0 w-full flex flex-col items-center">
        <a
          href="https://bit.ly/4aQrK1D" // Replace 'yourphonenumber' with the actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white py-2 px-4 rounded-full text-lg mb-4 transition-transform transform hover:rotate-y-180 flip-button"
        >
          
        </a>
        <div className="flex justify-center mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 focus:outline-none ${currentSlide === index ? 'opacity-100' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
