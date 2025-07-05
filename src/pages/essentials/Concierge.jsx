
import errands from "../../assets/errands-chauffeur.webp"

import AirportTransfersVideo from '../../assets/perfect-airport-transfers.mp4';
import ChauffeurForDayVideo  from '../../assets/ChauffeurForDayVideo .mp4';
import { useRef,useState } from "react";
const Concierge = () => {
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

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <section className="flex flex-col items-center py-6">
        <div className="max-w-6xl w-full px-4 text-center">
          <h1 className="text-[40px] md:text-6xl font-medium mb-4 leading-tight mt-10">
           Concierge
          </h1>
          <p className="text-sm font-light mb-2 leading-6">Members only · London, Paris</p>
          <p className="font-semibold text-xl mt-15">
            Select patrons may use Wheely’s chauffeurs as assistants to handle diverse errands and free up precious time. As a special service for our most loyal passengers, Wheely chauffeurs can fetch your belongings, handle your shopping, and make personal deliveries in appropriate style. 
          </p>
         
        </div>
      </section>
<img
src={errands}
className="w-[97%] object-cover m-4"/>
<section className="px-6 lg:px-12 py-12 max-w-4xl mx-auto text-black bg-white">
  <h2 className="text-xl lg:text-2xl font-normal leading-snug mb-8">
    Save your focus and time for what matters. Let a trusted Wheely chauffeur handle
    tasks on your behalf with the utmost care and attention. This exclusive service
    is available both on demand and for any pre-scheduled time — directly through the
    Wheely app.
  </h2>

  <div className="space-y-10">
    <div>
      <h3 className="uppercase text-sm font-medium mb-2 tracking-wide">
        White-Glove Service
      </h3>
      <p className="text-base leading-relaxed">
        We built this service for errands where trust, taste, and touch matter —
        whether that’s picking up the perfect wine pairing for dinner, couriering
        sensitive documents, or hand-delivering a surprise gift. Your chauffeur can
        also wait in queues for coveted items that can’t be reserved.
      </p>
    </div>

    <div>
      <h3 className="uppercase text-sm font-semibold mb-2 tracking-wide">
        Direct, Private Communication
      </h3>
      <p className="text-base leading-relaxed">
        Add detailed notes, choose between options, and collaborate on
        personalisation touches directly with your chauffeur — all inside the Wheely
        app. The chat window won’t reveal your phone number, and will only close upon
        the errand’s completion.
      </p>
    </div>

    <div>
      <h3 className="uppercase text-sm font-semibold mb-2 tracking-wide">
        Employee-like Attitude
      </h3>
      <p className="text-base leading-relaxed">
       Even if a store is unexpectedly closed, an item is out of stock, or a delivery recipient is unavailable, your Wheely chauffeur — like any good personal assistant — will thoughtfully communicate with you and find a way to see the task through.
      </p>
    </div>
  </div>
</section>

     

    
      
   
  

  

 

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
    </div>

   
  )
}

export default Concierge