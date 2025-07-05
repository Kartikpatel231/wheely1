import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
   <>  {/*Image one*/}


   <div className="max-h-screen max-w-screen ">
      {/* Image Container */}
      <div className="relative min-h-[800px] min-w-[375px]  shadow-lg mx-26">
        {/* Background Image */}
        <img 
          src="/1images.jpg" 
          alt="Business SUV in Dubai" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Text Overlay Container - Positioned at Bottom */}
        <div className="absolute bottom-13 left-70 right-0 flex flex-col justify-end p-8 text-white">
          {/* Middle Section - Main Text */}
          <div className="space-y-4">
            <h1 className="text-2xl font-[500]">INTRODUCING BUSINESS SUV IN DUBAI</h1>
            <p className="text-25px max-w-[100%]">
              Featuring the generous GMC Yukon, perfect for both intercity <br />
            <p className='mx-30'>transfers and city commutes.</p>
            </p>
          </div>
          
          {/* Bottom Section - CTA */}
           <div className="flex flex-col mx-30      space-y-2 mt-4  ">
            {/* <a  
              href="https://wheely.com/en/classes/business-surv" 
              className="text-2xl font-bold underline "
            >
              DISCOVER MORE &gt;
            </a> */}
            <p className="text-2xl font-bold underline ">
              <Link to="/classes/suv"> DISCOVER MORE &gt;</Link>
            </p>
          </div>

        </div>
      </div>
    </div>


 {/*Image TWO*/}
  <div className=" pt-58 max-h-screen max-w-screen">
      {/* Image Container */}
      <div className="relative min-h-[800px] min-w-[375px]  shadow-lg mx-26">
        {/* Background Image */}
        <img 
          src="\Image2.png" 
          alt="Business SUV in Dubai" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Text Overlay Container - Positioned at Bottom */}
        <div className="absolute bottom-13 left-70 right-0 flex flex-col justify-end p-8 text-white">
          {/* Middle Section - Main Text */}
          <div className="space-y-4">
            <h1 className="text-2xl pl-30 font-[500]">MEET WHEElY LUXE</h1>
            <p className="text-25px max-w-[100%]"> Now available in Paris And  Dubai,featuring the latest-generation Mercedes-Maybach  .
               <br />

            <p className='mx-30'>S-Class. Exclusively Memebers.</p>
            </p>
          </div>
          
          {/* Bottom Section - CTA */}
          <div className="flex flex-col mx-30      space-y-2 mt-4  ">
            {/* <a  
              href="https://wheely.com/en/classes/business-surv" 
              className="text-2xl font-bold underline "
            >
              DISCOVER MORE &gt;
            </a> */}
             <p className="text-2xl font-bold underline ">
              <Link to="/classes/first"> DISCOVER MORE &gt;</Link>
            </p>
          </div>
        </div>
      </div>
    </div>


     {/*Image THREEE*/}

      <div className=" pt-115 max-h-screen max-w-screen">
      {/* Image Container */}
      <div className="relative min-h-[800px] min-w-[375px]  shadow-lg mx-26">
        {/* Background Image */}
        <img 
          src="\IMAGE3.png" 
          alt="Business SUV in Dubai" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Text Overlay Container - Positioned at Bottom */}
        <div className="absolute bottom-13 left-70 right-0 flex flex-col justify-end p-8 text-white">
          {/* Middle Section - Main Text */}
          <div className="space-y-4">
            <h1 className="text-2xl pl-45 font-[500]">WHEELY SUV</h1>
            <p className="text-25px font-[500] max-w-[100%]"> Exclusive to Members, experience Wheely's most refined class to date,featuring the latest
               <br />

            <p className='mx-30 font-[500]'>generation Range Rover Long Wheelbase 4×4</p>
            </p>
          </div>
          
          {/* Bottom Section - CTA */}
          <div className="flex flex-col mx-30      space-y-2 mt-4  ">
            {/* <a  
              href="https://wheely.com/en/classes/business-surv" 
              className="text-2xl font-bold underline "
            >
              DISCOVER MORE &gt;
            </a> */}
             <p className="text-2xl font-bold underline ">
              <Link to="/classes/suv"> DISCOVER MORE &gt;</Link>
            </p>
          </div>
        </div>
      </div>
    </div>

     {/*Image Four*/}

      <div className=" pt-173 max-h-screen max-w-screen">
      {/* Image Container */}
      <div className="relative min-h-[800px] min-w-[375px]  shadow-lg mx-26">
        {/* Background Image */}
        <img 
          src="\Image4.png" 
          alt="Business SUV in Dubai" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Text Overlay Container - Positioned at Bottom */}
        <div className="absolute bottom-13 left-70 right-0 flex flex-col justify-end p-8 text-white">
          {/* Middle Section - Main Text */}
          <div className="space-y-4">
            <h1 className="text-2xl pl-30 font-[500]">OFFICIAL CHAUFFEUR OF ASCOT</h1>
            <p className="text-25px max-w-[100%]"> Elevate your race experience with seamless journeys to and from Ascot.
               

      
            </p>
          </div>
          
          {/* Bottom Section - CTA */}
          <div className="flex flex-col mx-30      space-y-2 mt-4  ">
            <a  
              href="https://wheely.com/en/classes/business-surv" 
              className="text-2xl font-bold underline "
            >
              DISCOVER MORE &gt;
            </a>
          </div>
        </div>
      </div>
    </div>


     {/*Image Five*/}

      <div className=" pt-205 max-h-screen max-w-screen">
      {/* Image Container */}
      <div className="relative min-h-[800px] min-w-[375px]  shadow-lg mx-26">
        {/* Background Image */}
        <img 
          src="\Images5.png" 
          alt="Business SUV in Dubai" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Text Overlay Container - Positioned at Bottom */}
        <div className="absolute bottom-13 left-70 right-0 flex flex-col justify-end p-8 text-white">
          {/* Middle Section - Main Text */}
          <div className="space-y-4">
            <h1 className="text-2xl pl-30 font-[500]">NEW BUSINESS CLASS</h1>
            <p className="text-25px max-w-[100%]"> A Transition to the BMW 5 Series G60, and a consistent experience for our global customers.
               

      
            </p>
          </div>
          
          {/* Bottom Section - CTA */}
          <div className="flex flex-col mx-30      space-y-2 mt-4  ">
            {/* <a  
              href="https://wheely.com/en/classes/business-surv" 
              className="text-2xl font-bold underline "
            >
              DISCOVER MORE &gt;
            </a> */}
             <p className="text-2xl font-bold underline ">
              <Link to="/classes/business"> DISCOVER MORE &gt;</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='h-[130vh]'></div>
  



   </>
  )
}

export default Home