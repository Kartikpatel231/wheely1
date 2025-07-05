import React, { useState, useRef } from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import AirportTransfersVideo from '../../assets/perfect-airport-transfers.mp4';
import ChauffeurForDayVideo  from '../../assets/ChauffeurForDayVideo .mp4';

// Add preview media for each service
const services = [
  {
    title: "WHEELY LUXE",
    location: "Members only",
    description: "Discover the latest-generation Mercedes-Maybach S-Class, delivering the smoothest and most elegant journeys, available in Dubai and Paris.",
    preview: "/Academy2.png", // Add image path
  },
  {
    title: "WHEELY SUV",
    location: "Members only",
    description: "Experience Wheely's most refined class to date, featuring the latest generation Range Rover Long Wheelbase 4×4, available exclusively in London.",
    preview: "/IMAGE3.png", // Add image path
  },
  {
    title: "WHEELY CONCIERGE",
    location: "Members only",
    description: "Members may task a trusted chauffeur with personal errands — including white-glove deliveries and seamless purchasing on their behalf.",
    preview: "/Image2.png", // Add video path
  },
  {
    title: "CHAUFFEUR FOR A DAY",
    location: "Members only",
    description: "Members may reserve a chauffeur for up to an entire day, at a convenient flat hourly rate.",
    preview: "/Images5.png", // Add video path
  },
];

function Membership() {
  const [hoveredService, setHoveredService] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const previewRef = useRef(null);

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

    const newX = Math.max(minX, Math.min(mouseX, maxX));
    const newY = Math.max(minY, Math.min(mouseY, maxY));

    setPreviewPosition({ x: newX, y: newY });
  };

  return (
    <>
      {/* Preview container */}
      {hoveredService && (
        <div
          ref={previewRef}
          className="fixed z-50 rounded-lg shadow-xl overflow-hidden pointer-events-none"
          style={{
            width: '250px',
            height: '200px',
            left: `${previewPosition.x}px`,
            top: `${previewPosition.y}px`,
            transition: 'left 0.1s, top 0.1s'
          }}
        >
          {hoveredService.preview.endsWith('.mp4') ? (
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover"
            >
              <source src={hoveredService.preview} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={hoveredService.preview} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}

       <div className='container mx-auto justify-center flex items-center w-screen mt-25'>

        <p className='text-6xl'>Membership</p>
      </div>
    
      <div className='container mx-auto justify-center flex flex-col items-center w-full mt-25 max-w-[800px] text-center'>

        <p className='text-2xl'>
          Wheely Membership rewards loyal passengers with global access to refined privileges 
          crafted for exquisite comfort and convenience. Membership is currently limited 
          to those who have taken 15 journeys over the past six months, or who have been 
          invited by another member.
        </p>
      </div>
      
      <div className='container mx-auto justify-center flex items-center w-screen max-w-[230px] space-x-0 mt-8'>
        <a href="#" className="text-sm sm:text-base md:text-lg text-black mt-10 ml-0">
          Available in the APP
        </a>
        <a href="https://your-app-link.com">
          <img src="/logo.svg" alt="App Logo" className="w-12 h-6 mt-9 ml-2 mr-0 object-contain" />
        </a>
      </div>
      
      <div className="container mx-auto flex justify-center mt-10">
        <img src="/abc.png" alt="Membership Artwork" className="w-[920px] h-auto mx-auto" />
      </div>

      {/* Existing content */}
      <div className='container mx-auto justify-center flex items-center w-screen mt-25'>
        <p className='text-6xl'>Membership</p>
      </div>
      
      {/* ... rest of your component ... */}
      
      {/* Updated grid with hover effects */}
      <div className="container mx-auto mt-15 px-0 py-0 max-w-5xl border-t border-gray-200">
        <div className="space-y-0">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 ${index !== services.length - 1 ? 'border-b border-gray-200 pb-0 mt-0' : 'pb-6'}`}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
              onMouseMove={handleMouseMove}
            >
              <div className="col-span-1 pl-14">
                <a href='#'>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </a>
                <a href='#'>
                  <p className="text-xs text-[#a86014] mt-2">{service.location}</p>
                </a>
              </div>
              <div className="col-span-1 max-w-1">
                <p></p>
              </div>
              <div className="col-span-2 max-w-110 text-left align-right pb-12 pl-4">
                <a href='#'>
                  <p className="text-lg">{service.description}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ... rest of your component ... */}
      <QuestionsAndAnswers/>
    </>
  );
}

export default Membership;