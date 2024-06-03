import React from 'react';

const AboutUs = () => {
  return (
    <section >
      <h1 className="text-center font-bold text-2xl">Who are We?</h1>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ">
        <div className="bg-white shadow-sm shadow-red-600 rounded-xl p-6 mx-auto w-full max-w-xs md:max-w-none transform transition-transform duration-300 hover:scale-105 ">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-700">Kwacha Links Travel and Tour is a fast growing man power recruitment agency located in Ghana. Kwacha Links Travel and Tour is one of the few comprehensive solution providers for travel and work opportunities. Since 2016, we have connected the right and best human resource talents and skills to employers all around the globe. We are unique in our commitment to provide quality, transparent and responsive recruitment services to our clients for trusted international companies. </p>
        </div>
        <div className="bg-white shadow-sm shadow-red-600 rounded-xl p-6 mx-auto w-full max-w-xs md:max-w-none transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700">Our mission is to provide exceptional service to give an exceptional information on available hospital service delivery in and around the country</p>
        </div>
        <div className="bg-white shadow-sm shadow-red-600 rounded-xl p-6 mx-auto w-full max-w-xs md:max-w-none transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700">To be the lead and trusted agency in providing high quality outsourced employment and human resources</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
