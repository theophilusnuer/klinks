import React from 'react';
import vid1 from "../asset/video/vid1.mp4";
import vid2 from "../asset/video/vid2.mp4";
import test1 from "../asset/image/test1.jpeg";
import test2 from "../asset/image/test2.jpeg";
import test4 from "../asset/image/test4.jpg";
import test3 from "../asset/image/test33.jpg";
import test5 from "../asset/image/test5.jpg";
import test6 from "../asset/image/test6.jpg";


const Testimonials = () => {
  return (
    <div className="container mx-auto py-8" id='testimonials'>
           <h2 className="text-5xl text-red-600 font-bold text-center mb-8">Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <video src={vid1} alt="" className="w-full h-48 object-cover" controls controlsList="nodownload" />
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <video src={vid2} alt="" className="w-full h-48 object-cover" controls controlsList="nodownload" />
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <img src={test1} alt="" className="w-full h-48 object-cover"/>
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <img src={test2} alt="" className="w-full h-48 object-cover"/>
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <img src={test3} alt="" className="w-full h-48 object-cover"/>
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <img src={test4} alt="" className="w-full h-48 object-cover"/>
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <img src={test5} alt="" className="w-full h-48 object-cover"/>
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden m-2 md:m-0 w-72 mx-auto transform transition-transform duration-300 hover:scale-105">
          <img src={test6} alt="" className="w-full h-48 object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
