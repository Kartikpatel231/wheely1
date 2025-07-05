import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaSuitcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const vehicleClasses = [
  {
    title: 'NEW BUSINESS',
    subtitle: 'BMW 5 Series G60',
    people: 4,
    luggage: '1–3',
    memberOnly: false,
    image: '/New_Business_class.jpeg',
    video: '',
    path: '/classes/new-business' // Added path
  },
  {
    title: 'FIRST',
    subtitle: 'Mercedes-Benz S-Class W223',
    people: 4,
    luggage: '1–3',
    memberOnly: false,
    image: '/first_class.jpeg',
    video: '',
    path: '/classes/first' // Added path
  },
  {
    title: 'XL',
    subtitle: 'Mercedes-Benz V-Class and EQV',
    people: 6,
    luggage: '5–12',
    memberOnly: false,
    image: '/Classes_XL.jpeg',
    video: '',
    path: '/classes/xl' // Added path
  },
  {
    title: 'LUXE',
    subtitle: 'Mercedes Maybach S-Class',
    people: 3,
    luggage: '1–3',
    memberOnly: true,
    image: '/LUXE.jpeg',
    path: '/luxe' // Added path
  },
  {
    title: 'BUSINESS SUV',
    subtitle: 'GMC Yukon',
    people: 6,
    luggage: '1–4',
    memberOnly: false,
    image: '/Business_SUV.jpeg',
    path: '/classes/suv' // Added path
  },
];

const VehicleClasses = () => {
      const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const previewRef = useRef(null);


  const handleVehicleClick = (vehicle) => {
    navigate(vehicle.path);
  };

  
  // Handle mouse movement to position preview
  const handleMouseMove = (e) => {
    if (!previewRef.current) return;
    
    const previewWidth = 220;
    const previewHeight = 150;
    const padding = 16;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const maxX = window.innerWidth - previewWidth - padding;
    const maxY = window.innerHeight - previewHeight - padding;
    const minX = padding;
    const minY = padding;

    const newX = Math.max(minX, Math.min(mouseX + 20, maxX));
    const newY = Math.max(minY, Math.min(mouseY + 20, maxY));

    setPreviewPosition({ x: newX, y: newY });
  };

  // Handle hover events with delay for smoother experience
  const handleMouseEnter = (index) => {
    setIsVisible(false);
    setTimeout(() => {
      setHoveredService(index);
      setIsVisible(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setTimeout(() => {
      setHoveredService(null);
    }, 200);
  };

  return (
    <div className="min-h-screen  py-16 px-4">
      
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 p-6 max-w-5xl mx-auto bg-white ">
            {vehicleClasses.map((vehicle, index) => (
      <div
        key={index}
        className="flex justify-between items-start pb-4 cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:pl-3 rounded-lg"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => handleVehicleClick(vehicle)} // Now using the path property
      >
                <div className="w-5/6">
                  <div className="flex  border-t-1 border-gray-500 items-center gap-3">
                    <h2 className="text-xl font-[400]  uppercase text-gray-900">{vehicle.title}</h2>
                    {vehicle.memberOnly && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Members only
                      </span>
                    )}
                  </div>
                  <p className="text-sm mt-1 text-gray-900">{vehicle.subtitle}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                    <span className="flex items-center gap-1">
                      <FaUser className="text-gray-400" /> {vehicle.people}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaSuitcase className="text-gray-400" /> {vehicle.luggage}
                    </span>
                  </div>
                </div>
                <div className="text-2xl text-gray-500">{'>'}</div>
              </div>
            ))}
          </div>

          {/* Preview Overlay */}
          {hoveredService !== null && (
            <div
              ref={previewRef}
              className={`fixed bg-white shadow-xl rounded-lg overflow-hidden z-20 w-64 h-48 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                left: `${previewPosition.x}px`,
                top: `${previewPosition.y}px`,
                pointerEvents: 'none',
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transition: 'transform 0.3s ease, opacity 0.3s ease'
              }}
            >
              {vehicleClasses[hoveredService].video ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  className="w-full h-full object-cover"
                >
                  <source 
                    src={vehicleClasses[hoveredService].video} 
                    type="video/mp4" 
                  />
                </video>
              ) : (
                <img 
                  src={vehicleClasses[hoveredService].image} 
                  alt={vehicleClasses[hoveredService].title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white font-medium">{vehicleClasses[hoveredService].title}</h3>
                <p className="text-xs text-white/80">{vehicleClasses[hoveredService].subtitle}</p>
              </div>
            </div>
          )}
        </div>




        {/* Map Section with iframe */}
      <section className="city-map flex justify-center my-12">
       <iframe
  title="Dubai Service Area Map"
  src="https://www.openstreetmap.org/export/embed.html?bbox=55.0%2C24.9%2C55.7%2C25.5&amp;layer=mapnik"
  className="rounded-lg shadow max-w-4xl w-full h-180 border-0"
  allowFullScreen=""
  loading="lazy"
></iframe>
      </section>
      <div className=" ml-40 max-w-3xl  mb-12">
        <p>Whilst the shortest wait times are in the city centre, you may book a Wheely pickup anywhere within the marked area, for a dropoff anywhere in the country.</p>
      </div>

      {/* Vehicles & Chauffeurs */}
      <section className="py-12 border-t border-gray-200 text-center">
        <h2 className="text-2xl mb-4">VEHICLES & CHAUFFEURS</h2>
        <p className="max-w-2xl mx-auto mb-8 font-md">Chauffeurs maintain their vehicles in perfect condition. Daily quality spot checks. Discreet colours with no signage. Trusted, expert Chauffeurs successfully deliver standards learnt at the Chauffeur Academy.</p>
      </section>

      {/* Personality & Privacy */}
      <section className="py-12 border-t border-gray-200 text-center">
        <h2 className="text-2xl mb-4">PERSONALITY & PRIVACY</h2>
        <p className="max-w-2xl mx-auto font-md mb-8">We prioritise passenger privacy. Chauffeurs follow our strict confidentiality policy. Personalised journeys to ensure your journey meets your needs.</p>
      </section>

      {/* Amenities & Service - Two Column Centered */}
      


      <div className="min-h-100 flex items-center justify-center bg-white ml-15">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl">
        {/* Left Section */}
        <div className="bg-gray-100 flex flex-col justify-center p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            EXPERIENCE WHEELY’S PERFECT <br /> AIRPORT PICKUP
          </h2>
          <p className="text-gray-700 text-base mb-6">
            End the perfect trip or holiday with the perfect journey home. Just input your flight number and we’ll ensure a leisurely exit, no matter when you land.
          </p>
          <a href="#" className="text-black font-semibold hover:underline flex items-center gap-2">
            LEARN MORE <span>&#8250;</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full h-full">
          <img 
            src="/Airport_pickup.jpeg" 
            alt="Airport Pickup" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
        
      </div>
    
  );
};

export default VehicleClasses;