import React from 'react'
import map from "../../assets/header/map.png"

const LocationMap = () => {
  return (
    <div className='bg-red-800'>
      <img className='object-cover object-center h-full w-full' src={map} alt="" />
    </div>
  )
}

export default LocationMap
