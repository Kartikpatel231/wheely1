import React from 'react';

const LondonPage = () => {
  return (
     <div className="max-w-7xl h-100 mx-auto px-4 py-12 border-b-2 border-gray-200">
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-serif font-bold  text-gray-800 mb-4">London</h1>
        <p className="text-2xl text-black-600 max-w-4xl mx-auto my-20">
          The location of our global headquarters, London is a key part of our DNA. Every experience we design at Wheely is built around British prestige hospitality and its promise of exquisite comfort and exceptional service.
        </p>
      </div>
    

      {/* Vehicle Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
        {[
          { title: 'BUSINESS', desc: 'Mercedes-Benz E-Class, EQE, EQS or BMW 5-Series', icon: '4', bag: '1–3' },
          { title: 'FIRST', desc: 'Mercedes-Benz S-Class W223', icon: '4', bag: '1–3' },
          { title: 'XL', desc: 'Mercedes-Benz V-Class and EQV', icon: '6', bag: '5–12' },
          { title: 'CONCIERGE', desc: 'Members only\nHave a trusted chauffeur handle your errands', icon: '', bag: '' },
          { title: 'KIDS', desc: 'Mercedes-Benz V-Class and EQV', icon: '6', bag: '5–10' },
          { title: 'SUV', desc: 'Members only\nRange Rover LWB', icon: '4', bag: '1–4' },
        ].map((item, index) => (
          <div key={index} className="border-b py-4 flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm whitespace-pre-line">{item.desc}</p>
              {item.icon && (
                <p className="text-sm mt-1">
                  👤 {item.icon} &nbsp;&nbsp;🧳 {item.bag}
                </p>
              )}
            </div>
            <div className="text-xl">{'>'}</div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-10 px-6 max-w-5xl mx-auto">
        <iframe
          className="w-full h-96 rounded-lg border"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.626474312877!2d-0.1448305!3d51.5072172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3337ae7d35%3A0x27ceaa8bc6f8457d!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1628601608974!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p className="text-sm mt-4 text-center">
          Whilst the shortest wait times are in the city centre, you may book a Wheely pickup anywhere within the marked area, for a dropoff anywhere in the country.
        </p>
      </div>

      {/* Info Sections */}
      <div className="mt-12 space-y-10 text-center px-6 max-w-4xl mx-auto">
        <div>
          <h3 className="font-semibold text-lg mb-1">VEHICLES & CHAUFFEURS</h3>
          <p className="text-sm">
            Chauffeurs maintain their vehicles in perfect condition. Daily quality spot checks. Discreet colours with no signage. Trusted, expert Chauffeurs successfully deliver standards learnt at the Chauffeur Academy.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">PERSONALITY & PRIVACY</h3>
          <p className="text-sm">
            We prioritise passenger privacy. Chauffeurs follow our strict confidentiality policy. Personalised journeys to ensure your journey meets your needs.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">AMENITIES & SERVICE</h3>
          <p className="text-sm">
            Umbrella, phone chargers, and amenities provided as standard. Meet and greet airport service with our complimentary waiting time.
          </p>
        </div>
      </div>

      {/* Airport Pickup Section */}
      <div className="mt-16 bg-gray-100 px-6 py-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h3 className="font-semibold text-lg mb-2">EXPERIENCE WHEELY’S PERFECT AIRPORT PICKUP</h3>
          <p className="text-sm mb-4">
            End the perfect trip or holiday with the perfect journey home. Just input your flight number and we’ll ensure a leisurely exit, no matter when you land.
          </p>
          <button className="text-sm text-blue-600 font-semibold hover:underline">LEARN MORE →</button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/airport-pickup.jpg"
            alt="Airport Pickup"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LondonPage;
