import React from 'react';
import { assets, exclusiveOffers } from '../assets/assets';
import Title from './Title'; 


const ExclusiveOffers = () => {
  
  return (
    <div className="py-12 px-4 md:px-20 mt-20 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your
           stay and create unforgettable memories."
        />
        
        <button  
         className="group flex items-center gap-2 text-sm font-medium border-gray-300 rounded px-5 py-2 
         bg-white hover:bg-gray-50 transition-all">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all duration-200"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="relative group h-[250px] rounded-2xl overflow-hidden shadow-lg bg-cover 
            bg-center transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundImage: `url(${item.image})` }}
          >
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

            <span className="absolute top-4 left-4 z-10 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
              {item.priceOff}% OFF
            </span>

            <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="text-xs">Expires {item.expiryDate}</p>

              <button className="mt-2 flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
                View Offers
                <img
                  src={assets.arrowIcon}
                  alt="arrow-icon"
                  className="w-4 h-4 transition-all duration-200 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
