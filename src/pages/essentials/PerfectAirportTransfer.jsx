import PerfectairportTransfer from "../../assets/perfect-airport-transfers.mp4"
import image5 from "../../assets/business/image5.webp"
import FirstClass from "../../assets/FirstClass/image3.webp"
import Suv from "../../assets/Suv/image1.webp"
import Xl from "../../assets/XlClass/transfer_xl_desktop_a6997d4135.jpg"
import AscotChauffeurImage from '../../assets/ascot-chauffeur.webp';
const PerfectAirportTransfer = () => {
   const scrollLeft = () => {
    const container = document.getElementById("image-scroll-container");
    container.scrollBy({ left: -424, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.getElementById("image-scroll-container");
    container.scrollBy({ left: 424, behavior: "smooth" });
  };
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <section className="flex flex-col items-center py-6">
        <div className="max-w-6xl w-full px-4 text-center">
          <h1 className="text-[40px] md:text-6xl font-medium mb-4 leading-tight mt-10">
            Perfect Airport Transfers
          </h1>
          <p className="text-sm font-light mb-2 leading-6">London, Paris, Dubai</p>
          <p className="font-semibold text-xl mt-15">
            We focus on the details so that you can focus on what matters to you.
          </p>
          <p className="mt-10 text-xl leading-7 max-w-2xl mx-auto">
            Wheely’s luxury airport transfer service provides refined journeys to and from all local airports. Every aspect of our operations has been finely crafted to ensure your perfect comfort, from the rigorous certification process at our Chauffeur Academy to our 106 point vehicle inspection checklist.
          </p>
        </div>
      </section>

     

      <section className="w-full h-screen">
        <video
          className="w-[97%] h-full object-cover m-4"
          playsInline
          autoPlay
          loop
          muted
          preload="auto"
          src={PerfectairportTransfer}
        />
      </section>
       {/* New Section Added Here */}
      <section className="flex flex-wrap justify-center gap-6 py-6 px-4">
        <div className="grid grid-cols-2 gap-6 max-w-6xl w-full">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">MEET & GREET IN ARRIVALS</h2>
            <p>
              When you book an airport transfer, you never need to find your Wheely chauffeur. They will always be there with a name board at the correct Arrivals exit, ready to whisk you and your luggage to an impeccable vehicle.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">NO NEED TO UPDATE DETAILS</h2>
            <p>
              Whether your flight arrives early or late, your chauffeur will be waiting for you. We use our best-in-class flight tracking technology to automatically adjust your pickup window to any schedule changes.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">COMPLIMENTARY 60 MINUTES</h2>
            <p>
              Extended waits at luggage reclaim or border control are not a concern. Our private airport transfer service includes an hour of complimentary waiting time. You can also see your chauffeur’s location and communicate with them via private in-app chat at any time.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">BOOK ON-DEMAND OR IN ADVANCE</h2>
            <p>
              We are here for you at your leisure. Schedule a journey up to 3 months in advance, or request an immediate pick-up. We have vehicles on standby in major London airports for your convenience.
            </p>
          </div>
        </div>
      </section>
      <section>
          <h2 className="text-black bg-white tracking-[0px] uppercase font-[350] text-[25px] leading-[30px] text-center align-baseline m-0 border-0">
  OUR CLASSES FOR AIRPORT TRANSFERS
</h2>
<p className="text-black bg-white tracking-[0px] font-[350] text-[17px] leading-[24px] text-center align-baseline m-0 border-0">  Wheely is here to serve you whenever and wherever you need a professional  chauffeur. Our core classes deliver an elevated and top-notch service in all  locations.</p>

      </section>
     <section className="relative mt-12 px-4">
  
  {/* Scroll Buttons */}
  <button
    onClick={scrollLeft}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
  >
    &lt;
  </button>
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
  >
    &gt;
  </button>

  {/* Scrollable Container */}
  <div
    id="image-scroll-container"
    className="flex overflow-x-hidden scroll-smooth space-x-6 py-4 no-scrollbar"
  >
    {/* Card 1 */}
    <div className="ml-50 min-w-[600px] bg-white  rounded shadow-md flex-shrink-0">
      <img
        src={Xl}
        alt="XL Class"
        className="w-full h-64 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">XL</h3>
        <p className="text-sm text-gray-600 mb-2">Mercedes-Benz V-Class and EQV</p>
        <p className="text-sm text-gray-800">Passengers: Up to 6 people</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="min-w-[600px] bg-white rounded shadow-md flex-shrink-0">
      <img
        src={Suv}
        alt="SUV Class"
        className="w-full h-64 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">SUV</h3>
        <p className="text-sm text-gray-600 mb-2">Range Rover Long Wheelbase 4x4</p>
        <p className="text-sm text-gray-800">Passengers: Up to 4 people</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="min-w-[600px] bg-white rounded shadow-md flex-shrink-0">
      <img
        src={image5}
        alt="Business Class"
        className="w-full h-64 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">Business</h3>
        <p className="text-sm text-gray-600 mb-2">Mercedes-Benz E-Class or BMW 5-Series</p>
        <p className="text-sm text-gray-800">Passengers: Up to 4 people</p>
      </div>
    </div>

    {/* Card 4 (Hidden initially via overflow) */}
    <div className="min-w-[600px] bg-white rounded shadow-md flex-shrink-0">
      <img
        src={FirstClass}
        alt="First Class"
        className="w-full h-64 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">First Class</h3>
        <p className="text-sm text-gray-600 mb-2">Mercedes-Benz S-Class or BMW 7-Series</p>
        <p className="text-sm text-gray-800">Passengers: Up to 3 people</p>
      </div>
    </div>
  </div>
</section>
<section className="mt-15">
  <h2 className="text-2xl uppercase justify-center text-center">Book For Others</h2>
  <p className="text-normal justify-center text-center m-15">Seamlessly book an airport transfer for your loved ones via our “Book for Another Person” feature. They will instantly receive a link to track their chauffeur’s location (also visible in your app). If they have the Wheely app installed they will also get courtesy updates as their chauffeur approaches, along with a private in-app chat window.</p>
  <img loading="lazy" src="https://cd.wheely.com/transfer_push_desktop_ef59284628.jpg" alt="Notification in the Wheely mobile app about an airport transfer booking for another person" decoding="async" className="flex-auto h-full object-cover object-[initial] w-full text-transparent text-[100%] align-baseline border-0" />    
</section>
<section className="mt-15">
  <h2 className="text-2xl uppercase justify-center text-center">COMMERCIAL OR PRIVATE AIRPORTS</h2>
  <p className="text-normal  justify-center text-center m-12">Wheely’s airport chauffeur service may be scheduled for all commercial and private airports in or near London, Paris, and Dubai, from any location within local city limits. See all available fixed fares in the Wheely app. Available fare classes all feature immaculate Mercedes-Benz and BMW models.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto text-left">
  {/* London */}
  <div>
    <h3 className="font-semibold mb-2">LONDON</h3>
    <ul className="space-y-4">
      <li>Gatwick (LGW)</li>
      <li>Heathrow (LHR)</li>
      <li>London City Airport (LCY)</li>
      <li>Luton (LTN)</li>
      <li>RAF Northolt (NHT)</li>
      <li>Stansted (STN)</li>
      <li>Biggin Hill (BQH)</li>
      <li>Farnborough (FAB)</li>
    </ul>
  </div>

  {/* Paris */}
  <div>
    <h3 className="font-semibold mb-2">PARIS</h3>
    <ul className="space-y-4">
      <li>Beauvais Airport (BVA)</li>
      <li>Le Bourget (LBG)</li>
      <li>Charles de Gaulle (CDG)</li>
      <li>Orly (ORY)</li>
    </ul>
  </div>

  {/* Dubai */}
  <div>
    <h3 className="font-semibold mb-2">DUBAI</h3>
    <ul className="space-y-4">
      <li>Al Maktoum International Airport (DWC)</li>
      <li>Dubai International Airport (DXB)</li>
    </ul>
  </div>
</div>
</section>
 <section className="flex flex-col items-center py-15">
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
<div className="text-black bg-white flex flex-col lg:flex-row justify-between items-stretch px-6 py-6 gap-6">
  {/* Previous Link */}
  <div className="relative group w-full lg:w-1/2">
    <a
      href="/en/essentials/ascot-racecourse"
      className="flex flex-col gap-3 no-underline hover:underline"
    >
      <div className="flex items-center transition-colors duration-200">
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 pb-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.61087 1.61115L3.61087 5.61115L3.22196 6.00006L3.61087 6.38897L7.61087 10.389L8.38868 9.61115L4.77759 6.00006L8.38868 2.38897L7.61087 1.61115Z"
          />
        </svg>
        <span className="text-xs uppercase">Previous</span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="uppercase text-xl font-medium">Official Chauffeur of Ascot</h2>
        <span className="text-sm max-w-xs">
          Seamless journeys between London and Ascot.
        </span>
      </div>
    </a>

    {/* Hover Image */}
    <div className="absolute hidden group-hover:block  w-64 shadow-lg  rounded overflow-hidden z-10">
      <img
        src={AscotChauffeurImage}
        alt="Ascot Preview"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  
  <div className="h-px w-full bg-gray-200 lg:hidden" />

  <div className="relative  group w-full lg:w-1/2 text-left lg:text-right">
    <a
      href="/en/essentials/concierge"
      className="flex flex-col gap-3 no-underline hover:underline items-start lg:items-end"
    >
      <div className="flex items-center justify-start lg:justify-end transition-colors duration-200">
        <span className="text-xs uppercase">Next</span>
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 pb-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.38868 10.389L8.38868 6.38897L8.77759 6.00006L8.38868 5.61115L4.38868 1.61115L3.61087 2.38897L7.22196 6.00006L3.61087 9.61115L4.38868 10.389Z"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-1 lg:items-end">
        <h2 className="uppercase text-xl font-medium">Concierge</h2>
        <span className="text-sm max-w-xs">
          Select patrons may use Wheely’s chauffeurs as assistants to handle diverse
          errands and free up precious time.
        </span>
      </div>
    </a>

    {/* Hover Image */}
    <div className="absolute hidden group-hover:block top-full mt-2 right-0 w-64 shadow-lg border rounded overflow-hidden z-10">
      <img
        src="/path-to-your-image/concierge.jpg"
        alt="Concierge Preview"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>

</div>

   
  )
}

export default PerfectAirportTransfer