import React from 'react';
import logo1 from "../../components/asset/image/logo1.png";
import logo2 from "../../components/asset/image/logo2.png";
import logo3 from "../../components/asset/image/logo3.png";

const AffiliatedLogos = () => {
  const logos = [logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3]; 

  return (
    <div className="overflow-hidden py-4 relative">
      <p className="text-center text-3xl mb-4 text-red-600 font-bold">Our Affiliated Partners</p>
      <div className="slide-track flex py-2">
        {logos.map((logo, index) => (
          <div key={index} className="slide">
            <img loading="lazy" className="h-24 w-auto mx-4" src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliatedLogos;
