import React from 'react';
import mainImage from '../asset/image/who.jpg';

const WhoWeAre = () => {
  return (
    <div id='aboutus' className="py-6 mx-4 lg:mx-12 flex flex-col lg:flex-row items-start lg:items-center">
      {/* Main Image Section */}
      <div className="relative p-4 rounded-full  shadow-xl bg-white mb-6 lg:mb-0 lg:mr-8  w-full lg:w-1/4 h-96">
        <img src={mainImage} alt="Main" className='w-full h-full object-cover rounded-full' />
      </div>

     {/* Text Sections */}
     <div className="flex flex-col my-4 lg:flex-row space-y-8 lg:space-y-0 lg:space-x-2 w-full lg:w-3/4">
        {/* About Us Section */}
        <div className="group flex flex-col items-center w-full lg:w-1/3 lg:border-r border-gray-300 p-2">
          <div className="ml-4  text-center lg:text-left transition-opacity duration-700 delay-300 group-hover:opacity-100">
            <h2 className="text-3xl text-red-600 font-bold mb-4">About Us</h2>
            <p className="text-gray-700">Kwacha Links Travel and Tour is a fast growing man power recruitment agency located in Ghana. Kwacha Links Travel and Tour is one of the few comprehensive solution providers for travel and work opportunities. Since 2016, we have connected the right and best human resource talents and skills to employers all around the globe. We are unique in our commitment to provide quality, transparent and responsive recruitment services to our clients for trusted international companies.</p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="group flex flex-col items-center w-full lg:w-1/3 lg:border-r border-gray-300 p-2">
          <div className="ml-4  text-center lg:text-left transition-opacity duration-700 delay-300 group-hover:opacity-100">
            <h2 className="text-3xl text-red-600 font-bold mb-4">Vision</h2>
            <p className="text-gray-700">Our vision is to be the leading global provider of opportunities, enabling individuals to achieve their dreams and organizations to reach their full potential.</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="group flex flex-col items-center w-full lg:w-1/3 p-2">
          <div className="ml-4  text-center lg:text-left transition-opacity duration-700 delay-300 group-hover:opacity-100">
            <h2 className="text-3xl text-red-600 font-bold mb-4">Mission</h2>
            <p className="text-gray-700">Our mission is to provide exceptional service and support, ensuring that our clients achieve their goals through innovative solutions and dedicated partnership.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;