import React, { useState, useRef } from 'react';
import AscotChauffeurImage from '../../assets/ascot-chauffeur.webp';
import AirportTransfersVideo from '../../assets/perfect-airport-transfers.mp4';

const AscotRacecourse = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });
  const paginationRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!paginationRef.current || !videoRef.current) return;

    const rect = paginationRef.current.getBoundingClientRect();
    const videoRect = videoRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

   
    const maxX = rect.width - videoRect.width;
    const maxY = rect.height - videoRect.height;
    const newX = Math.max(0, Math.min(mouseX - videoRect.width / 2, maxX));
    const newY = Math.max(0, Math.min(mouseY - videoRect.height / 2, maxY));

    setVideoPosition({ x: newX, y: newY });
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
     
      <section className="flex flex-col items-center py-6">
        <div className="max-w-6xl w-full px-4 text-center">
          <h1 className="text-[40px] md:text-5xl font-medium mb-4 leading-tight">Official Chauffeur of Ascot</h1>
          <p className="text-xl font-medium mb-2 leading-6">Ascot Racecourse</p>
          <p className="mt-10 text-xl leading-7 max-w-2xl mx-auto">
            Ascot Racecourse, rich in history and Britain’s royal heritage, is a premier destination for horse racing and social events. Whether you are headed to Ascot for a raceday, to enjoy fine dining, or to attend a private function, enhance your experience with chauffeured journeys from Wheely, the Official Chauffeur of Ascot.
          </p>
        </div>
      </section>

      
      <section className="w-full">
        <img src={AscotChauffeurImage} alt="Ascot Chauffeur" className="w-[97%] h-auto object-cover m-4" />
      </section>

      
      <section className="flex flex-col items-center py-6">
        <div className="max-w-4xl w-full px-4">
          <p className="text-[24px] leading-[30px] font-[350] text-center py-6">
            Distinguished fare classes are available for every occasion and group size. Chauffeurs graduated from the Wheely Chauffeur Academy deliver the highest standards of service in a discreet manner.
          </p>

          
          <h2 className="text-[28px] font-medium mt-8 mb-4 leading-8">Perfect Convenience</h2>
          <div className="text-[17px] leading-6 py-6">
            <p>
              Ascot Racecourse hosts 21 racedays outside of Royal Ascot each year. Most of the racedays feature two enclosures: King Edward VII and Queen Anne.
            </p>
            <p className="mt-4">
              For your convenience, you may select your preferred car park from an in-app list as the drop-off or pick-up location whilst booking your journey in the Wheely app by entering “Ascot Racecourse”. Car Park 3 is located closest to all enclosures. Car Park 2 is exclusively for owners and trainers.
            </p>
            <p className="mt-4">
              During Dubai Duty Free Shergar Cup (Sunday 10th August), you may request our chauffeurs to pick you up at Car Park 1, the nearest car park to post-race concert.
            </p>
          </div>

          {/* For All Occasions Section */}
          <h2 className="text-[28px] font-medium mt-8 mb-4 leading-8">For All Occasions</h2>
          <div className="text-[17px] leading-6 py-6">
            <p>
              All journeys to and from Ascot may be booked on demand or in advance through the Wheely app, with full flexibility to add stops and additional passengers while en route. Direct journeys to and from London are priced at special fixed rates:
            </p>
          </div>

         
          <div className="py-6">
            <table className="w-full text-[17px] leading-6">
              <tbody>
                <tr className="font-light uppercase border-b border-gray-300">
                  <td className="p-2">Business Class & Concierge</td>
                  <td className="p-2">First Class</td>
                  <td className="p-2">XL & Kids Classes</td>
                  <td className="p-2">SUV</td>
                </tr>
                <tr>
                  <td className="p-2 pb-6">
                    £160<br />
                    <span className="italic">Includes all standard Wheely privileges and amenities</span>
                  </td>
                  <td className="p-2 pb-6">
                    £240<br />
                    <span className="italic">For a more elevated experience</span>
                  </td>
                  <td className="p-2 pb-6">
                    £225<br />
                    <span className="italic">For spacious group or family travel</span>
                  </td>
                  <td className="p-2 pb-6">
                    £300<br />
                    <span className="italic">Our most refined class to date</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[17px] leading-6 py-6">
            <p>
              Our Business, First and SUV Classes can seat three passengers comfortably, or four with the armrest raised. XL and Kids Classes can seat up to six. Our Kids Class provides a certified KidFix safety seat, perfect for family racedays.
            </p>
          </div>

          
          <h2 className="text-[28px] font-medium mt-8 mb-4 leading-8">Group and Extended Bookings</h2>
          <div className="text-[17px] leading-6 py-6">
            <p>
              You may also book journeys for guests not travelling in the same vehicle using our “Book for Another Person” feature. By providing your guest’s name and phone number in the app, you and your guest will receive the journey details. You may do this concurrently with your own journey booking.
            </p>
            <p className="mt-4">
              Wheely members may also reserve their chauffeur for up to an entire day at a convenient hourly rate:
            </p>
          </div>

        
          <div className="py-6">
            <table className="w-full text-[17px] leading-6">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-2"></td>
                  <td className="p-2">Business Class</td>
                  <td className="p-2">XL & Kids Classes</td>
                  <td className="p-2">First</td>
                  <td className="p-2">SUV</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-2 pb-6">Full day (6+ hours)</td>
                  <td className="p-2 pb-6">£55/hour</td>
                  <td className="p-2 pb-6">£75/hour</td>
                  <td className="p-2 pb-6">£70/hour</td>
                  <td className="p-2 pb-6">£90/hour</td>
                </tr>
                <tr>
                  <td className="p-2 pb-6">Half-day (3–6 hours)</td>
                  <td className="p-2 pb-6">£60/hour</td>
                  <td className="p-2 pb-6">£80/hour</td>
                  <td className="p-2 pb-6">£80/hour</td>
                  <td className="p-2 pb-6">£100/hour</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[15px] leading-5 py-6 flex items-start gap-2">
            <span className="text-[15px] leading-5">🛈</span>
            <p>
              Each hour includes 10 free miles, with any additional miles charged at standard fares. Wheely members may book this service by selecting “Chauffeur For a Day” in the app.
            </p>
          </div>
        </div>
      </section>

      
      <section className="flex flex-col items-center py-6">
        <div className="max-w-4xl w-full px-4">
          <h2 className="text-[28px] font-medium mb-4 leading-8">Questions & Answers</h2>
          <div className="text-[17px] leading-6">
            {[
              {
                question:
                  "Can I enjoy fixed-rate journeys if I have any stops between London and Ascot Racecourse?",
                answer:
                  "The fixed rate only applies to non-stop journeys. If a journey includes any stops, the total cost will be calculated according to our standard fares.",
              },
              {
                question: "Can I keep my chauffeur on standby during my day at Ascot Racecourse?",
                answer:
                  "Wheely members are able to retain their chauffeurs for up to a full day at a convenient hourly rate. Simply select our “Chauffeur for a Day” service when making your booking through the Wheely app.",
              },
              {
                question:
                  "Do I need my guests to download the Wheely app if I book a journey for them through my account?",
                answer:
                  "You can make separate concurrent bookings for your guests using the “Book for Another Person” feature in the Wheely app. If your guests do not have the app, they will still receive a text message with a link allowing them to view the journey details. Though we encourage guests to download the Wheely app themselves for more seamless interactions such as communicating with their chauffeur via the in-app chat if needed.",
              },
              {
                question: "What do you provide with each Kids Class journey?",
                answer:
                  "If you are attending with your family, our Kids Class includes one KidFix certified child safety seat. The child seat is suitable for a child who is aged from about 9 months to 12 years, weighing between 9 and 36 kg. Please select “Kids Class” when booking the journey.",
              },
              {
                question: "How do I contact Wheely with additional questions or assistance?",
                answer:
                  "Our support team is conveniently available by phone and chat 24/7 through the Wheely app.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="py-2 border-b border-gray-300 first:border-t first:border-gray-300 group"
              >
                <summary className="cursor-pointer flex justify-between items-center text-left list-none">
                  <span>{item.question}</span>
                  <span className="transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
      <section className="flex justify-end py-12 mx-20">
         <a
                href="/essentials/perfect-airport-transfers"
                
              >
        <div className="max-w-4xl w-full px-4">
          <div
            className="relative rounded-lg p-6 group"
            ref={paginationRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            <div className="flex flex-col items-end text-right">
             <div className="flex items-center gap-1 text-[15px] leading-5">
                <span>NEXT</span>
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
              </div>
              <h2 className="text-[24px] md:text-[28px] font-medium leading-8 mt-4">
                PERFECT AIRPORT TRANSFERS
              </h2>
              <span className="text-[15px] leading-5 text-gray-700 mt-2 max-w-md">
                We focus on the details so that you can focus on what matters to you.
              </span>
            </div>

            {isHovered && (
              <div
                ref={videoRef}
                className="absolute z-20 rounded shadow-lg overflow-hidden"
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
                  src={AirportTransfersVideo}
                />
              </div>
            )}
          </div>
        </div>
        </a>
      </section>
    </div>
  );
};

export default AscotRacecourse;