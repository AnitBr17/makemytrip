import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData,facilityIcons } from '../../assets/assets';
import StarRating from '../StarRating';

const RoomDetails = () => {
    const {id} = useParams();
    const [room,setRoom] = useState(null);
    const [mainImage,setMainImage] = useState(null);
    useEffect(()=>{
       const room = roomsDummyData.find(room=>room._id===id);
       room && setRoom(room);
       room && setMainImage(room.images[0])
    },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32' >
     
     <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}
            <span className='font-inter text-sm'>{room.popularFilters}</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500
        rounded-full'>20% OFF</p>
     </div>
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ reviews</p>
        </div>
        {/* Room Address */}
        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt='location-icon'/>
            <span>{room.hotel.address}</span>

        </div>
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="Room Image"
                 className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length>1 && room.images.map((image,index)=>(
                    <img key={index} src={image} alt="Room Image"
                     className={`w-full rounded-xl shadow-lg object-cover 
                        ${mainImage === image && "outline-3 outline-orange-500"}`}
                     onClick={()=>setMainImage(image)}
                    />
                ))}
            </div>
        </div>
        
        <div className='flex flex-col lg:flex-row md:justify-between mt-10'>       
                <div>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                    <div className='flex flex-wrap gap-2'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                            <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                            <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-4 flex items-center justify-between'>
                  <div>
                    <span className='text-xl font-bold text-gray-800'>${room.pricePerNight}</span>
                    <span className='text-sm text-gray-500'> /night</span>
                  </div>
                </div>
        </div>
        {/* CheckIn Checkout Form */}
       
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
  <div className='flex flex-col md:flex-row items-start md:items-center gap-6 text-gray-700 w-full'>

    {/* Check-In Date */}
    <div className='flex flex-col w-full md:w-auto'>
      <label htmlFor='checkInDate' className='font-semibold mb-1'>Check-In</label>
      <input
        type='date'
        id='checkInDate'
        className='rounded-md border border-gray-300 px-4 py-2 outline-none w-full'
        required
      />
    </div>

    {/* Check-Out Date */}
    <div className='flex flex-col w-full md:w-auto'>
      <label htmlFor='checkOutDate' className='font-semibold mb-1'>Check-Out</label>
      <input
        type='date'
        id='checkOutDate'
        className='rounded-md border border-gray-300 px-4 py-2 outline-none w-full'
        required
      />
    </div>

    {/* Guests Input */}
    <div className='flex flex-col w-full md:w-auto'>
      <label htmlFor='guests' className='font-semibold mb-1'>Guests</label>
      <input
        type='number'
        id='guests'
        min='1'
        defaultValue='1'
        className='rounded-md border border-gray-300 px-4 py-2 outline-none w-24'
        required
      />
    </div>
  </div>

  {/* Check Availability Button */}
  <button
  type='submit'
  className='bg-blue-600 hover:bg-blue-700 text-white rounded-md
    py-3 text-base font-medium text-center min-w-[180px]'
>
   Check Availability 
</button>

</form>


      
    </div>
  )
}

export default RoomDetails
