import React from 'react'
import { assets } from '../assets/assets'

function StarRating({rating =4}) {
  return (
    <div className='flex flex'>
     {Array(5).fill('').map((_, index) => (
        <img src={rating>index ? assets.starIconFilled:
            assets.starIconOutlined
        } className="w-4 h-4"  /> 
    ))}
    </div>
  )
}

export default StarRating
