import React from 'react';
import chauffeurImage from '../assets/chauffeur-image2.webp'
import AirportTransfersVideo from '../assets/perfect-airport-transfers.mp4';
import { useRef,useState } from "react";
import ChauffeurForDayVideo  from '../assets/ChauffeurForDayVideo .mp4';
function TheChauffers() {
    const [hoveredLink, setHoveredLink] = useState(null);
         const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });
         const paginationRef = useRef(null);
         const videoRef = useRef(null);
         const handleMouseMove = (e) => {
      const videoWidth = 220;
      const videoHeight = 150;
      const padding = 16;
    
      const mouseX = e.clientX;
      const mouseY = e.clientY;
    
      const maxX = window.innerWidth - videoWidth - padding;
      const maxY = window.innerHeight - videoHeight - padding;
      const minX = padding;
      const minY = padding;
    
      const newX = Math.max(minX, Math.min(mouseX, maxX));
      const newY = Math.max(minY, Math.min(mouseY, maxY));
    
      setVideoPosition({ x: newX, y: newY });
    };
    
       
         const videoSources = {
           previous: AirportTransfersVideo,
           next: ChauffeurForDayVideo,
         };
       
  return (<>
    <div>
      <div className='container mx-auto justify-center flex items-center w-screen mt-25'>

        <p className='text-6xl'>The Chauffeurs  </p>
      </div>
      <div className='container mx-auto justify-center  items-center w-full mt-5 max-w-[800px] text-center text-gray-500'> 
    <a href='#' className=''>London,</a>
    <a href='#'>Paris,</a>
    <a href='#'>Dubai</a>
      </div>
    </div>
    <div className='container mx-auto justify-center flex flex-col items-center w-full mt-25 max-w-[800px] text-center'>

        <p className='text-2xl'>
          When you book a chauffeur, you expect more than just a driver. With the title comes a set of expectations.
        </p>
      </div>
    <div className='container mx-auto justify-center flex items-center w-screen max-w-[230px] space-x-0 mt-8'>
            <a href="#" className="text-sm sm:text-base md:text-lg text-black mt-10 ml-0">
              Available in the APP
            </a>
            <a href="https://your-app-link.com">
              <img src="\logo.svg" alt="App Logo" className="w-12 h-6 mt-9 ml-2 mr-0 object-contain" />
            </a>
           
          </div>
          
           <div className='container mx-auto justify-center  items-center w-full mt-0 max-w-[300px] text-center text-gray-500 font-serif'> 
    <a href='#' className=''>Downlaod For IOS and Android</a>
   
      </div>
      <div className='mt-23 ml-6 mr-6'>
        <img src={chauffeurImage} alt="Chauffeurs" className='w-full h- mt- ml-0 mr-0 ' />
      </div>
      <div className='ml-75 mr-75 mt-20'>
        <div>
            <p className='mb-5'>Service Oriented</p>
            <p className='mb-15'>Wheely chauffeurs are never inconvenienced. If a work call delays you 15 minutes at pickup, they’ll wait without interrupting you. If you need to add an unscheduled stop, they’ll quickly find the best route. If you request to be met with a fresh cortado and a fruit selection after a long flight, they’ll shop for the highest quality. True chauffeurs don’t just drive–they assist, happily.

</p>
        </div>
        <div>
            <p className='mb-5'> Higher Standards</p>
            <p className='mb-15'>When you’re conveying your loved ones, trust matters. It’s not just about the tailored suits and opened doors. It’s about knowing they take that trust seriously. This is why we hire elite chauffeurs and put them through three days of training verified by The CPD Certification Service, including etiquette and First Aid.

</p>
        </div>
        <div>
            <p className='mb-5'>CHAUFFEURS UNDER NDAs</p>
            <p className='mb-15'> Busy people want to work and take calls during their commutes without worrying about what they’re saying or who’s listening. They also want to know that who they travel with, where they go, and where they live or work remains private. All Wheely Chauffeurs are subject to NDAs and enhanced privacy training.
</p>
        </div>
      </div>
       <div className='flex justify-center mt- bg-gray-100 py-10 w-full h-140 ml-'>
            <div className='container ml-77 mx-auto  justify-center  items-center w-1/2 mt-25 max-w-[400px] text-center border-r-2 border-gray-200 '>
            
              <h2 className='text-2xl'>
                Discover Perfect Journeys with Wheely</h2>
                <p className='max-w-100 container mx-auto justify-center  items-center mt-5 mr-26' >Exquisite chauffeured services on demand or in advance via the Wheely app. Available for iOS and Android.
                  <a href="#" className="text-sm sm:text-base md:text-lg text-black mt-10 ml-0 "><img src="/logo.svg" alt="App Logo" className="w-15 h-15 mt-9 ml-40 mr-13  object-contain" /></a>
                  <a href="#" className="text-sm sm:text-base md:text-lg text-black mt- ml-0 "><p className="w-50 h-15 mt-6 ml-26 mr-13  object-contain">Discover in the App &gt;</p></a>
                  </p>
                  <p className='text-gray-500'>Download for iOS and Android</p>
                </div>
                
            <div className='container mr-70 mb-30  mx-auto justify-left  items-left w-screen mt-1 max-w-[400px] text-left '>
              <img src="/xyz.png" alt="First" className="w-76 h-130 mt- ml-0 mr-10 mb-10 object-center " /></div>
            </div>
            <section className="flex justify-between py-12 mx-20" ref={paginationRef}>
      {['previous', 'next'].map((type) => {
        const isPrev = type === 'previous';
        const href = isPrev
          ? '/essentials/perfect-airport-transfers'
          : '/essentials/chauffeur-for-a-day';
        const title = isPrev
          ? 'PERFECT AIRPORT TRANSFERS'
          : 'CHAUFFEUR FOR A DAY';
        const label = isPrev ? 'PREVIOUS' : 'NEXT';
        const description = isPrev
          ? 'We focus on the details so that you can focus on what matters to you.'
          : 'A new essential: select patrons may now reserve their chauffeur for up to an entire day.';

        return (
          <a
            href={href}
            key={type}
            onMouseEnter={() => setHoveredLink(type)}
            onMouseLeave={() => setHoveredLink(null)}
            onMouseMove={handleMouseMove}
            className="max-w-xl w-full px-4"
          >
            <div className="relative rounded-lg p-6 group text-left">
              <div className={isPrev ? 'items-start text-left' : 'items-end text-right'}>
                <div className="flex items-center gap-1 text-[15px] leading-5">
                  {isPrev ? (
                    <>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.61132 1.61115L3.61132 5.61115L3.22241 6.00006L3.61132 6.38897L7.61132 10.389L8.38913 9.61115L4.77804 6.00006L8.38913 2.38897L7.61132 1.61115Z"
                        />
                      </svg>
                      <span>{label}</span>
                    </>
                  ) : (
                    <>
                      <span>{label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.38868 10.389L8.38868 6.38897L8.77759 6.00006L8.38868 5.61115L4.38868 1.61115L3.61087 2.38897L7.22196 6.00006L3.61087 9.61115L4.38868 10.389Z"
                        />
                      </svg>
                    </>
                  )}
                </div>
                <h2 className="text-[24px] md:text-[28px] font-medium leading-8 mt-4">{title}</h2>
                <span className="text-[15px] leading-5 text-gray-700 mt-2 max-w-md block">
                  {description}
                </span>
              </div>

              {hoveredLink === type && (
                <div
  ref={videoRef}
  className="fixed z-50 rounded shadow-lg overflow-hidden pointer-events-none"
  style={{
    width: '220px',
    height: '150px',
    left: `${videoPosition.x}px`,
    top: `${videoPosition.y}px`,
  }}
>
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    src={videoSources[type]}
                  />
                </div>
              )}
            </div>
          </a>
        );
      })}
    </section>
    
</>
  )
}

export default TheChauffers;