import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsRoom = () => {
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 'wheely-royal-ascot-2025',
      date: '17 Jun 2025',
      title: 'On-demand Chauffeur Company Wheely To Return To Royal Ascot',
      source: 'Wheely',
      path: '/Footer/Newsroom/OnDemand'
    },
    {
      id: 'wheely-henley-regatta-2025',
      date: '17 Jun 2025',
      title: 'Wheely Announced as Official Chauffeur of Henley Royal Regatta',
      source: 'Wheely',
      path: '/Footer/Newsroom/Announced'
    },
    {
      id: 'wheely-luxe-class-paris',
      date: '3 Mar 2025',
      title: 'Wheely unveils Luxe Class to redefine on-demand travel in Paris, featuring iconic Mercedes-Benz Maybach S-Class',
      source: 'Wheely',
      path: '/Footer/Newsroom/Unveils'
    },
    {
      id: 'wheely-valentines-spa',
      date: '14 Feb 2025',
      title: "Celebrate Valentine's Day with Wheely and the Peninsula London's Exclusive Spa Experience",
      source: 'Wheely',
      path: '/Footer/Newsroom/Valentine'
    },
    {
      id: 'wheely-suv-class',
      date: '19 Nov 2024',
      title: 'Wheely introduces exclusive SUV Class featuring iconic Range Rover: a new benchmark in luxury travel',
      source: 'Wheely',
      path: '/Footer/Newsroom/Rangerover'
    },
    {
      id: 'wheely-dp-world-tour',
      date: '14 Nov 2024',
      title: 'Wheely joins the DP World Tour Championship as Official Spectator Chauffeur',
      source: 'Wheely',
      path: '/news/wheely-dp-world-tour'
    },
    {
      id: 'wheely-royal-ascot-2024',
      date: '13 Jun 2024',
      title: 'Luxury Services Company Wheely Announces as Official Chauffeur of Ascot and Royal Ascot',
      source: 'Wheely',
      path: '/Footer/Newsroom/Luxury'
    },
    {
      id: 'wheely-bouquet-delivery',
      date: '31 May 2024',
      title: "Limited-Edition Bespoke Bouquet delivery for International Women's Day and Mother's Day 2024",
      source: 'Wheely',
      path: '/Footer/Newsroom/LimitedEdition'
    },
    {
      id: 'wheely-dubai-expansion',
      date: '7 Feb 2024',
      title: 'Wheely expands to Dubai with launch of New Business Class, New First Class, XL, Perfect Airport Pickup and Chauffeur for a Day',
      source: 'Wheely',
      path: '/news/wheely-dubai-expansion'
    },
    {
      id: 'wheely-membership-program',
      date: '21 Sept 2023',
      title: 'Introducing Exclusive Membership Programme and Unveiling New First Class Product',
      source: 'Wheely',
      path: '/news/wheely-membership-program'
    },
    {
      id: 'wheely-visual-identity',
      date: '8 Jun 2023',
      title: 'Introducing the new Wheely Visual Identity',
      source: 'Wheely',
      path: '/news/wheely-visual-identity'
    },
    {
      id: 'wheely-womens-day-2023',
      date: '1 Mar 2023',
      title: "Bespoke Bouquets for International Women's Day 2023",
      source: 'Wheely',
      path: '/news/wheely-womens-day-2023'
    },
    {
      id: 'wheely-chauffeur-for-day',
      date: '21 Dec 2022',
      title: 'Introducing Chauffeur for a Day',
      source: 'Wheely',
      path: '/news/wheely-chauffeur-for-day'
    },
    {
      id: 'wheely-london-academy',
      date: '16 Jun 2022',
      title: "Wheely's London Academy: The Art Of Luxury Chauffeuring",
      source: 'Wheely',
      path: '/news/wheely-london-academy'
    },
    {
      id: 'wheely-mothers-day-2022',
      date: '23 Mar 2022',
      title: "Wheely launches hand-delivered bouquets in London for Mother's day 2022",
      source: 'Wheely',
      path: '/news/wheely-mothers-day-2022'
    },
    {
      id: 'wheely-armed-forces-day',
      date: '26 Jun 2021',
      title: 'Armed Forces Day: From training soldiers to chauffeurs',
      source: 'BBC',
      path: '/news/wheely-armed-forces-day'
    }
  ];

  return (
    <div className="text-gray-800 px-6 md:px-16 py-12 space-y-16">

      {/* Title */}
      <div className="max-w-7xl h-100 mx-auto px-4 py-12 border-b-1 border-gray-200">
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-5xl font-serif font-bold  text-gray-800 mb-4">Newsroom</h1>
          <p className="text-2xl text-black-600 max-w-4xl mx-auto my-20">
            Wheely’s online home for background info, press kits, and links to recent news releases
            and feature coverage stories. Press enquiries reviewed promptly at{' '}
            <a href="mailto:press@wheely.com" className=" underline">press@wheely.com</a>.
          </p>
        </div>
      </div>

      {/* About and Mission */}
      <section className="grid md:grid-cols-2 gap-10 ml-25 mr-25 mt-30">
        <div>
          <h2 className="text-2xl font-semibold mb-2">ABOUT WHEELY</h2>
          <p className="mb-3 space-x-1 text-[17px] text-[#000429] mt-7">Wheely is a Swiss-founded British luxury services company headquartered in London, operating in London and other main cities such as Paris and Dubai.</p>
          <p className="mb-3 space-x-1 text-[17px] text-[#000429]">Going beyond transportation, our product is a combination of the finest in-car experience, concierge services and chauffeurs who have graduated from the Wheely Chauffeur Academy.</p>
          <p className="text-[#000429] text-[17px] space-x-1">Through modern engineering and design, paired with our commitment to excellence and attention to the finest details, we strive to set the industry standard for service, safety, etiquette and discretion.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">OUR MISSION</h2>
          <p className="mb-3 space-x-1 mt-7 text-[17px] text-[#000429]">We are in the business of protecting our clients’ time. Our core belief is that time is our most precious asset in life—the ultimate luxury.</p>
          <p className="text-[#000429] text-[17px] space-x-1">From chauffeuring and concierge services to our best-in-class app, we exist to help our clients use their time effectively by connecting them to the places and people that matter.</p>
        </div>
      </section>

      <div className='px-6 py-4 border-b border-gray-200'></div>

      {/* About CEO */}
      <section className="max-w-5xl ml-25 mr-25 mt-18 px-6 py-12">
        <h2 className="text-[25px] font-semibold mb-3">ABOUT ANTON CHIRKUNOV, FOUNDER AND CEO</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[17px]">Anton founded Wheely in 2010 after graduating from the University of St. Gallen, originally as an online booking platform for taxis and minicabs. This initial experience taught him that most ride-hailing platforms were commodity products that could never replace cars for the affluent, which was both a pain point for them and an important environmental problem.</p>
            <p className="text-[17px] mt-5">In 2018, Anton pivoted Wheely to focus on the luxury market in the world's megacities. Wheely now employs more than 200 staff, hosts 3,500 chauffeurs, has created the gold standard Chauffeur Academy, and is about to begin a multi-city global expansion.</p>
          </div>
          <div>
            <img
              src="/CEO_Photo.jpg"
              alt="Anton Chirkunov in car"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className='px-6 py-2 border-b border-gray-200'></div>

      {/* News List */}
      <section className="w-full px-6 py-8">
        <h2 className="text-[25px] font-semibold mb-3 ml-25">NEWS AND FEATURES</h2>
        <ul className="space-y-0">
          {newsItems.map((item, idx) => (
            <li
              key={idx}
              className="w-full hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                navigate(item.path);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // ← SCROLL TO TOP ON CLICK
              }}
            >
              <div className={`max-w-full ml-25 py-4 ${idx !== newsItems.length - 1 ? 'border-b-1 border-gray-200' : ''}`}>
                <div className="text-[17px] font-[450] text-[#000429] leading-snug">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {item.date}
                  <span className="text-gray-400 ml-2">{item.source || 'Wheely'}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NewsRoom;
