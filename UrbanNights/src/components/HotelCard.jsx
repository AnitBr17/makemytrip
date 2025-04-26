import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const HotelCard = ({ room, index }) => {
    if (!room || !room._id || !room.images || !room.hotel) return null;
  
    return (
      <div className="w-full sm:w-[48%] md:w-[23%] mb-6">
        <Link
          to={`/rooms/${room._id}`}
          onClick={() => scrollTo(0, 0)}
          className="block w-full"
        >
          <div className="rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-lg transition-shadow hover:shadow-xl">
            <div className="relative">
              <img
                src={room.images[0]}
                alt={room.name || 'room'}
                className="w-full h-48 object-cover"
              />
  
              {index % 2 === 0 && (
                <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
                  Best Seller
                </p>
              )}
            </div>
  
            <div className="p-4 pt-5">
              {/* hotel name and rating */}
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">{room.hotel.name}</p>
                <div className="flex items-center gap-1 text-sm">
                <img src={assets.starIconFilled} alt="star icon" className="w-4 h-4" />
                  <span>{room.rating || '4.5'}</span>
                </div>
              </div>
  
              {/* location */}
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <img src={assets.locationIcon} alt="location icon" className="w-4 h-4" />
                <span>{room.hotel.address}</span>
              </div>
  
              {/* price and button */}
              <div className="flex items-center justify-between mt-4">
                <p>
                  <span className="text-xl text-gray-800 font-semibold">${room.pricePerNight}</span>
                  <span className="text-sm text-gray-500"> /night</span>
                </p>
                <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  

export default HotelCard;
