import React from "react";

function Page1(){
  return (
    <>
   
    <div className="max-w-7xl h-100 mx-auto px-4 py-12 border-b-2 border-gray-200">
      <div className="text-center mb-10">
        <h1 className="text-6xl md:text-5xl font-serif font-bold  text-gray-800 mb-4">Cities &amp; Classes</h1>
        <p className="text-2xl text-black-600 max-w-5xl mx-auto my-20">
          Wheely chauffeurs exclusively drive premium vehicles, each unmarked and discreet for your privacy. Each Wheely fare class provides exquisite comfort, allowing you to relax and focus on what matters to you.
        </p>
      </div>
    </div>

<div className="max-w-7xl mx-auto px-4 py-12 border-b-2 border-gray-200">
  <div className="flex flex-col md:flex-row items-start justify-between gap-8">
    {/* Left Section - Heading (centered) */}
    <div className="md:w-1/2 flex items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold my-20 text-gray-900 uppercase">
        Cities
      </h2>
    </div>

    {/* Right Section - Text and City List */}
    <div className="md:w-1/2">
      <p className="text-gray-700 mb-6 text-lg  ">
        Wheely is thoughtfully expanding. Enjoy the same high standards and exceptional service in every city Wheely operates in.
      </p>
      <div className="bottom-0 left-0 w-113 h-px bg-gray-300"></div>

      <ul className="space-y-4">
        {[
          { name: "LONDON", link: "/cities/london" },
          { name: "PARIS", link: "/cities/paris" },
          { name: "DUBAI", link: "/cities/dubai" }
        ].map((city) => (
          <li key={city.name} className="group">
            <div className="relative w-3/4">
              <a 
                href={city.link}
                className="py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                <span>{city.name}</span>
                <span className="text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
                  &gt;
                </span>
              </a>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>



<div className="max-w-7xl mx-auto px-6 py-16  border-b border-gray-200">
  <div className="flex flex-col md:flex-row gap-8">
    {/* Left side - Heading */}
    <div className="md:w-1/2">
      <h2 className="text-3xl mx-44 my-20 font-semibold md:text-4xl font-serif  text-gray-900 uppercase">
        Core Classes
      </h2>
    </div>

    {/* Right side - Description and Class List */}
    <div className="md:w-1/2">
      <p className="text-gray-700 mb-6 text-lg">
        Wheely is here to serve you whenever and wherever you need a professional chauffeur. Our core classes deliver elevated and timely service across all our locations.
      </p>

      <ul className="space-y-4">
        {[
          {
            name: "BUSINESS",
            description: "Mercedes-Benz E-Class, EQE, EQS or BMW 5-Series",
            passengers: "4",
            luggage: "1–3"
          },
          {
            name: "NEW BUSINESS",
            description: "BMW 5 Series G60",
            passengers: "4",
            luggage: "1–3"
          },
          {
            name: "FIRST",
            description: "Mercedes-Benz S-Class W223",
            passengers: "4",
            luggage: "1–3"
          },
          {
            name: "XL",
            description: "Mercedes-Benz V-Class and EQV",
            passengers: "6",
            luggage: "5–12"
          }
        ].map((item, index) => (
          <li key={index} className="group">
            <div className="relative">
              <a href="#" className="block w-110">
                <div className="flex justify-between items-start pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex gap-4 text-sm text-gray-600 mt-2">
                      <span>👤 {item.passengers}</span>
                      <span>🧳 {item.luggage}</span>
                    </div>
                  </div>
                  <span className="text-xl text-gray-400 group-hover:text-black">›</span>
                </div>
                <div className="absolute bottom-0 left-0 w-3/4 h-px bg-gray-200 group-hover:bg-gray-300 transition-colors"></div>
            
              </a>
              
            </div>
          </li>
          
        ))}
      </ul>
    </div>
    
  </div>
</div>



<div className="max-w-7xl mx-auto px-6 py-16 ">
  <div className="flex flex-col md:flex-row gap-8">
    {/* Left side - Heading */}
    <div className="md:w-1/2">
      <h2 className="text-3xl mx-44 my-20 md:text-4xl font-serif font-semibold text-gray-900 uppercase">
        Special Classes
      </h2>
    </div>

    {/* Right side - Description and Class List */}
    <div className="md:w-1/2">
      <p className="text-gray-700 mb-6 text-lg">
        We offer unparalleled flexibility for those looking for more comfort, more peace of mind, or more time in their day.
        Our special services are designed to suit all your needs.
      </p>

      <ul className="space-y-1">
        {[
          {
            name: "LUXE",
            tag: "(Members only)",
            description: "Mercedes Maybach S-Class",
            passengers: "3",
            luggage: "1–3"
          },
          {
            name: "CONCIERGE",
            tag: "(Members only)",
            description: "Have a trusted chauffeur handle your errands",
            passengers: "",
            luggage: ""
          },
          {
            name: "KIDS",
            tag: "",
            description: "Mercedes-Benz V-Class and EQV",
            passengers: "6",
            luggage: "5–10"
          },
          {
            name: "SUV",
            tag: "(Members only)",
            description: "Range Rover LWB",
            passengers: "4",
            luggage: "1–4"
          },
          {
            name: "BUSINESS SUV",
            tag: "",
            description: "GMC Yukon",
            passengers: "6",
            luggage: "1–4"
          }
        ].map((item, index) => (
          <li key={index} className="relative group">
            <a href="#" className="flex justify-between items-start py-6 px-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-[85%] border-b border-gray-200 pb-6 group-hover:border-gray-300">
                <h3 className="text-lg font-semibold">
                  {item.name} {item.tag && <span className="text-amber-700 font-normal">{item.tag}</span>}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.passengers && (
                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <span>👤 {item.passengers}</span>
                    <span>🧳 {item.luggage}</span>
                  </div>
                )}
              </div>
              <span className="absolute right-4 bottom-6 text-xl text-gray-400 group-hover:text-black">›</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

 </>
  );
};

export default Page1;