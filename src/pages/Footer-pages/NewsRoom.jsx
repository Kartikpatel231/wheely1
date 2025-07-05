import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsRoom = () => {
  const navigate = useNavigate(); // Initialize React Router navigation

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
      path: '/news/wheely-valentines-spa'
    },
    {
    id: 'wheely-valentines-spa',
    date: '14 Feb 2025',
    title: "Celebrate Valentine's Day with Wheely and the Peninsula London's Exclusive Spa Experience",
    source: 'Wheely',
    path: '/news/wheely-valentines-spa'
  },
  {
    id: 'wheely-suv-class',
    date: '19 Nov 2024',
    title: 'Wheely introduces exclusive SUV Class featuring iconic Range Rover: a new benchmark in luxury travel',
    source: 'Wheely',
    path: '/news/wheely-suv-class'
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
    path: '/news/wheely-royal-ascot-2024'
  },
  {
    id: 'wheely-bouquet-delivery',
    date: '31 May 2024',
    title: "Limited-Edition Bespoke Bouquet delivery for International Women's Day and Mother's Day 2024",
    source: 'Wheely',
    path: '/news/wheely-bouquet-delivery'
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
    // ... other items remain the same
  ];

  return (
    <div className="text-gray-800 px-6 md:px-16 py-12 space-y-16">
      {/* ...About and Mission... */}
      
      <section className="w-full px-6 py-8">
        <h2 className="text-[25px] font-semibold mb-3 ml-25">NEWS AND FEATURES</h2>
        <ul className="space-y-0">
          {newsItems.map((item, idx) => (
            <li
              key={idx}
              className="w-full hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => navigate(item.path)}
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
