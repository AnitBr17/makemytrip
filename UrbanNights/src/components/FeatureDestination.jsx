import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title';
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 px-[10%]"> 
    <Title title="Featured Destinations" subTitle="Uncover a selection of exclusive properties from around the world, each offering exceptional comfort, refined luxury, and remarkable experiences."/>
      <div className="flex flex-wrap gap-6 justify-start">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <div className="flex justify-center">
  <button
    onClick={() => {
      navigate('/rooms');
      window.scrollTo(0, 2);
    }}
    className="my-16 px-4 py-2 text-sm font-medium border border-gray-300
    rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
  >
    View all Destinations
  </button>
</div>

    </div>
  )
}

export default FeatureDestination
