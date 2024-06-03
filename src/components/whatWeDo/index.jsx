import React from 'react';
import visa from '../asset/image/visa.png';
import flight from '../asset/image/flight.jpg';
import group from '../asset/image/group.png';
import oversea from '../asset/image/oversea.png';

const services = [
  {
    title: 'Visa Application',
    description: 'We assist with visa applications for various countries, ensuring a smooth process.',
    imageUrl: visa,
  },
  {
    title: 'Overseas Recruitment',
    description: 'We specialize in recruiting skilled professionals for overseas opportunities.',
    imageUrl: oversea,
  },
  {
    title: 'Flight Ticketing',
    description: 'We offer competitive prices for flight tickets to destinations worldwide.',
    imageUrl: flight,
  },
  {
    title: 'Group Travel Management',
    description: 'We manage group travel arrangements, making your group trips hassle-free.',
    imageUrl: group,
  },
];

const WhatWeDo = () => {
  return (
    <section id='services' className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
