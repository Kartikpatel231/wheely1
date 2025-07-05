import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TeamTestimonials from "./TeamTestimonials";


const newsItems = [
  {
    id: 1,
    title: "On-demand Chauffeur Company Wheely To Return To Royal Ascot",
    date: "17 Jun 2025",
    image: "/NewImage.jpg"
  },
  {
    id: 2,
    title: "Wheely Announced as Official Chauffeur of Henley Royal Regatta",
    date: "17 Jun 2025",
    image: '/News2.jpg',
  },
  {
    id: 3,
    title: "Wheely unveils Luxe Class to redefine on-demand travel in Paris, featuring iconic Mercedes-Benz Maybach S-Class",
    date: "3 Mar 2025",
    image: "/news3.jpg"
  }
];

function WorkAtWheely() {



  return (
    <>
      <div className="text-gray-800 px-6 md:px-16 py-12 space-y-5">
        {/* Title */}
        <div className="max-w-4xl h-100 mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="ml-40 text-[40px] md:text-[45px] max-w-xl font-[400] mt-10 space-x-0 text-[#000429] leading-[1]">
              Creating Technology <br /> to Protect Our Users' Time
            </h1>
            <p className="text-[24px] text-black max-w-4xl mx-auto my-10 leading-7">
              Wheely is not a traditional ride-hailing company. We are building
              a platform with user privacy at its core while successfully
              scaling a five-star service to millions of rides across multiple
              cities. We're looking for extraordinary people to solve complex
              problems and thrive as part of an ambitious team.
            </p>
            <p>
              <Link
                to="/Footer/jobRoles"
                className="inline-flex text-[22px] font-[400] items-center gap-2 text-black  hover:text-gray-600 transition-colors"
              >
                See Open Roles
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </Link>
            </p>
          </div>
        </div>
      </div>
      <TeamTestimonials />

      <div className="text-gray-800">
        {/* Hero with text on image */}
        <div className="relative w-full h-[600px]">
          <img
            src="/OfficeImage.jpeg"
            alt="How We Work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 left-25  bg-opacity-50 flex flex-col justify-end p-10">
            <div className="absolute top-6 left-10 text-white">
              <h2 className="text-white text-xl font-semibold mb-4">
                HOW WE WORK
              </h2>
            </div>
            <div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="text-white text-xl space-y-1">
                  <p className=" font-medium">PUTTING CUSTOMERS FIRST •</p>
                  <p className=" font-medium">FINE WORK AND CRAFTSMANSHIP •</p>
                  <p className=" font-medium">PRIVACY •</p>
                  <p className=" font-medium">MISSION-FIRST</p>
                </div>
                <div>
                  <p className="text-xl font-[500]   text-white max-w-2xl">
                    Focused on our mission to protect customers' time, we don't
                    compromise when it comes to customer comfort, privacy and
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-10 ml-25 px-4 md:px-20 py-12 w-5xl mb-10 ">
          <div className="ml-[25px] ">
            <h3 className="text-2xl font-[400] mb-4">BENEFITS</h3>
            <p className="mb-8 text-2xl font-[400] max-w-4xl">
              As well as competitive salaries, we offer a wide range of perks
              and benefits to support our team members’ wellbeing.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-lg font-[400]">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <p className="font-[400]">RELOCATION ✓</p>
                  <p>
                    We provide a relocation allowance to help employees move to
                    a new city. We provide visa sponsorship and assistance.
                  </p>
                </div>
                <div>
                  <p className="font-[400]">TRAVEL ✓</p>
                  <p>
                    Team members can travel in comfort and experience our
                    service firsthand as participants in the Wheely mystery
                    shopper programme and enjoy exclusive discounted rates for
                    other journeys.
                  </p>
                </div>
                <div>
                  <p className="font-[400]">MEALS ✓</p>
                  <p>
                    Our employees receive a daily allowance or fresh meals in
                    the office, depending on location.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <p className="font-[400]">HEALTH ✓</p>
                  <p>We provide private medical and dental insurance.</p>
                </div>
                <div className="mt-20"> 
                  <p className="font-[400]">PROFESSIONAL DEVELOPMENT ✓</p>
                  <p>
                    We give an annual stipend for a range of uses such as
                    continuing education courses, programmes, conferences and
                    certifications.
                  </p>
                </div>
                <div className="mt-20">
                  <p className="font-[400]">PARENTAL LEAVE ✓</p>
                  <p>New parents benefit from enhanced parental leave.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="px-4 md:px-20">
          <div className="relative w-full h-[900px]">
            <img
              src="/OfficeImage.jpeg"
              alt="London Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-10 text-white">
              <h3 className="text-3xl font-semibold">
                LONDON · UK{" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-red-600"
                />
              </h3>
            </div>

            <div className="absolute bottom-0 left-20 border-t-1 border-gray-200 right-6 p-6 text-white  text-lg to-transparent">
              <p className="max-w-2xl">
                London is our largest market and home to a range of teams
                including <br /> operations, strategy, and some data science and
                engineering roles.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-50 mt-10 space-y-16">
  {/* NICOSIA · CYPRUS */}
  <div className="grid md:grid-cols-2 gap-8 items-center ml">
    <div>
      <h4 className="text-xl font-semibold">NICOSIA · CYPRUS <span className="inline-block"> <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-red-600"
                /></span></h4>
      <p className="text-gray-500 text-lg font-medium mt-1">R&D Hub</p>
      <p className="text-base mt-4">
        The home of our engineering team who help to drive growth by developing new products and overseeing our existing technology.
      </p>
    </div>
    <img
      src="/officeImg.jpeg"
      alt="Cyprus Office"
      className="w-[350px] h-[250px] rounded-lg object-cover"
    />
  </div>

  {/* DUBAI · UAE */}
  <div className="grid md:grid-cols-2 gap-8 items-center mb-15">
    <div className="">
      <h4 className="text-xl font-semibold">DUBAI · UAE <span className="inline-block"> <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-red-600"
                /></span></h4>
      <p className="text-gray-500 text-lg font-medium mt-1">CS Hub</p>
      <p className="text-base mt-4">
        Our EMEA customer service hub is in Dubai Internet City. It is also home to our Middle East business development and operations teams.
      </p>
    </div>
    <img
      src="/officeImg2.jpeg"
      alt="Dubai Office"
      className="w-[350px] h-[250px] rounded-lg object-cover"
    />
    
  </div>
  <div className="border-1  border-gray-200 mr-25"></div>
</div>

      </div>

      {/* CTA */}
      <div className="text-center py-12 px-4">
        <h3 className="text-2xl font-[500] mb-2">EXPLORE CURRENT OPPORTUNITIES</h3>
        <p className="text-md mb-4 max-w-4xl leading-6 mx-auto">
          At Wheely, you’ll become part of a forward-thinking team building success for the long term, combining expertise in a wide range of industries.
        </p>
        <p className="text-md mb-4 max-w-4xl leading-6 mx-auto" >Interested in joining us?</p>
        <button className="mt-4 px-6 py-2 bg-[#efedf3] hover:bg-white hover:black transition">
          SEE OPEN ROLES
        </button>
      </div>

      {/* News Section */}
    



       <div className="max-w-5xl text-gray-700 mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold mb-6">LATEST NEWS</h2>

      {/* Top Featured News */}
      <div className="md:flex rounded-xl overflow-hidden shadow-sm mb-8">
        <div className="md:w-1/2 overflow-hidden group">
          <img
            src={newsItems[0].image}
            alt={newsItems[0].title}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 bg-gray-50 p-6">
          <h3 className="text-lg font-medium mb-2 leading-snug">
            {newsItems[0].title} <span className="ml-1">›</span>
          </h3>
          <p className="text-sm text-gray-500">{newsItems[0].date}</p>
        </div>
      </div>

      {/* Sub News Items */}
      <div className="divide-y">
        {newsItems.slice(1).map((item) => (
          <div key={item.id} className="flex justify-between items-center py-4">
            <div className="pr-4">
              <h4 className="text-sm font-medium mb-1 cursor-pointer leading-snug">
                {item.title} <span className="ml-1">›</span>
              </h4>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
            <div className="w-24 h-16 rounded overflow-hidden group cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* More Link */}
      <div className="mt-6">
        <a href="#" className="text-lg font-medium hover:underline">MORE IN NEWSROOM ›</a>
      </div>
    </div>
    </>
  );
}

export default WorkAtWheely;
