import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../StarRating';

const AllRooms = () => {
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const popularFilters = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
  const priceOptions = [
    { label: '0 to 500', min: 0, max: 500 },
    { label: '500 to 1000', min: 500, max: 1000 },
    { label: '1000 to 2000', min: 1000, max: 2000 },
    { label: '2000 to 3000', min: 2000, max: 3000 },
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const togglePriceRange = (range) => {
    setPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const handleSortChange = (e) => setSortBy(e.target.value);

  const handleClear = () => {
    setSelectedFilters([]);
    setPriceRanges([]);
    setSortBy('');
  };

  let filteredRooms = roomsDummyData.filter((room) => {
    const matchesFilter =
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) => room.category?.toLowerCase().includes(filter.toLowerCase()));

    const matchesPrice =
      priceRanges.length === 0 ||
      priceRanges.some((rangeLabel) => {
        const range = priceOptions.find((opt) => opt.label === rangeLabel);
        return room.pricePerNight >= range.min && room.pricePerNight <= range.max;
      });

    return matchesFilter && matchesPrice;
  });

  if (sortBy === 'low') {
    filteredRooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (sortBy === 'high') {
    filteredRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
  }

  return (
    <div className='pt-28 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div className='mb-12 max-w-4xl'>
        <h1 className='font-playfair text-4xl md:text-5xl mb-2'>Hotel Rooms</h1>
        <p className='text-gray-600'>
          Take advantage of our limited-time offers and special packages to enhance your stay.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Rooms List */}
        <div className='flex-1'>
          {filteredRooms.map((room) => (
            <div
              key={room._id}
              onClick={() => navigate(`/rooms/${room._id}`)}
              className='cursor-pointer flex flex-col md:flex-row items-start gap-6 mb-12 border-b pb-8 hover:shadow transition duration-200 rounded-xl'
            >
              <img
                src={room.images?.[0]}
                alt='hotel-img'
                title='View Room Details'
                className='w-full md:w-[380px] h-[250px] object-cover rounded-xl shadow'
              />

              <div className='flex-1'>
                <p className='text-sm text-gray-500'>{room.hotel?.city}</p>
                <h2 className='text-2xl font-semibold'>{room.hotel?.name}</h2>
                <div className='flex items-center mt-1 gap-2'>
                  <StarRating rating={room.rating} />
                  <span className='text-sm text-gray-600'>200+ reviews</span>
                </div>
                <div className='flex items-center mt-2 text-gray-500'>
                  <img src={assets.locationIcon} alt='location' className='w-4 h-4 mr-1' />
                  {room.hotel.address}
                </div>

                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {room.amenities.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'
                    >
                      <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                      <p className='text-xs'>{item}</p>
                    </div>
                  ))}
                </div>

                <div className='mt-4 flex items-center justify-between'>
                  <div>
                    <span className='text-xl font-bold text-gray-800'>${room.pricePerNight}</span>
                    <span className='text-sm text-gray-500'> /night</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className='w-full lg:w-[300px]'>
          <div className='border rounded-xl p-5 shadow-sm'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>FILTERS</h3>
              <button onClick={handleClear} className='text-sm text-blue-600 hover:underline'>
                CLEAR
              </button>
            </div>

            {/* Popular Filters */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-gray-700 mb-2'>Popular filters</h4>
              {popularFilters.map((filter, idx) => (
                <label key={idx} className='block text-sm text-gray-600 mb-1'>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(filter)}
                    onChange={() => toggleFilter(filter)}
                    className='mr-2'
                  />
                  {filter}
                </label>
              ))}
            </div>

            {/* Price Filters */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-gray-700 mb-2'>Price Range</h4>
              {priceOptions.map((option, idx) => (
                <label key={idx} className='block text-sm text-gray-600 mb-1'>
                  <input
                    type='checkbox'
                    checked={priceRanges.includes(option.label)}
                    onChange={() => togglePriceRange(option.label)}
                    className='mr-2'
                  />
                  ${option.label}
                </label>
              ))}
            </div>

            {/* Sort */}
            <div>
              <h4 className='text-sm font-medium text-gray-700 mb-2'>Sort By</h4>
              {[
                { label: 'Price Low to High', value: 'low' },
                { label: 'Price High to Low', value: 'high' },
              ].map((option, idx) => (
                <label key={idx} className='block text-sm text-gray-600 mb-1'>
                  <input
                    type='radio'
                    name='sort'
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={handleSortChange}
                    className='mr-2'
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
