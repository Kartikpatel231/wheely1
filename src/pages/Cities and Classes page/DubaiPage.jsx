import React from 'react'
import VehicleClasses from './vehicleClasses'

function DubaiPage() {
  return (
   <>
     <div className="max-w-7xl h-80 mx-auto px-4 py-12 ">
      <div className="text-center mb-10">
        <h1 className="text-6xl mt-5 md:text-5xl font-serif font-bold  text-gray-800 mb-4">Dubai</h1>
        <p className="text-2xl text-black-600 max-w-4xl mx-auto my-20">
         The most requested destination by our loyal users. To celebrate our expansion into The City of Gold, we have designed three fittingly exquisite experiences — including the next generation of business class, New Business Class.
        </p>
      </div>
    </div>
    <VehicleClasses/>
   
   </>
  )
}

export default DubaiPage