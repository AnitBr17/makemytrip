import React, { useState } from 'react';
import Title from '../Title';
import { assets, userBookingsDummyData } from '../../assets/assets';

const MyBooking = () => {
  const [userBookings, setUserBookings] = useState(userBookingsDummyData);

  const handlePayNow = (bookingId) => {
    setUserBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking._id === bookingId ? { ...booking, isPaid: true } : booking
      )
    );
  };

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title 
        title="My Booking" 
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks." 
      />

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        
        {/* Table Header (Desktop Only) */}
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {/* User Bookings List */}
        {userBookings.map((booking) => (
          <div key={booking._id} className='flex flex-col md:grid md:grid-cols-[3fr_2fr_1fr] justify-between py-4 border-b border-gray-200 gap-6'>

            {/* Hotel Details */}
            <div className='flex gap-4'>
              <img 
                src={booking.room.images[0]} 
                alt="Hotel" 
                className='w-36 h-24 object-cover rounded shadow'
              />
              <div className='flex flex-col gap-1'>
                <p className='font-playfair text-xl'>
                  {booking.hotel.name}
                  <span className='font-inter text-sm text-gray-500'> ({booking.room.roomType})</span>
                </p>
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img src={assets.locationIcon} alt="Location icon" className='h-4 w-4' />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img src={assets.guestsIcon} alt="Guests icon" className='h-4 w-4' />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className='text-base font-medium'>Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date & Timings */}
            <div className='flex flex-col justify-center gap-2 text-sm'>
              <div>
                <p className='font-medium'>Check-In:</p>
                <p className='text-gray-500'>{new Date(booking.checkInDate).toDateString()}</p>
              </div>
              <div>
                <p className='font-medium'>Check-Out:</p>
                <p className='text-gray-500'>{new Date(booking.checkOutDate).toDateString()}</p>
              </div>
            </div>

            {/* Payment Status */}
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center gap-2'>
                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`} />
                <p className={`text-sm font-medium ${booking.isPaid ? 'text-green-600' : 'text-red-600'}`}>
                  {booking.isPaid ? 'Paid' : 'Unpaid'}
                </p>
              </div>
              {!booking.isPaid && (
                <button 
                  className='px-4 py-1.5 mt-4 text-xs border border-gray-400
                  rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer'
                  onClick={() => handlePayNow(booking._id)}
                >
                  Pay Now
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;