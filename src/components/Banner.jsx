import React from 'react';
import Arrow from '../assets/Arrow';



function Banner() {
  return (
    <div className="pt-16">
      <div>
        <div className="flex py-2 px-4">
          <div className="mr-4 font-bold">
            <span>ALL CATEGORIES</span>
            <Arrow />
          </div>
          <div className="flex space-x-4">
            <span className="py-2">Cars</span>
            <span className="py-2">Motorcy...</span>
            <span className="py-2">Mobile Ph...</span>
            <span className="py-2">For Sale:Houses & Apart...</span>
            <span className="py-2">Scoot...</span>
            <span className="py-2">Commercial & Other Ve...</span>
            <span className="py-2">For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="relative w-screen">
          <img
            className="w-screen"
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;