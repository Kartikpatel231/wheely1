import React from "react";

const featureItems = [
  {
    img: "\callout_artwork_1.png", // Replace with your actual path
    title: "WHEELY CHAUFFEURS",
    desc: `Every chauffeur is a proud graduate of our exclusive CPD-certified Chauffeur Academy. Rigorous testing for safe driving, language skills, and fine etiquette ensures only the top chauffeurs qualify.`,
    linkText: "Learn More",
    linkHref: "/essentials/the-chauffeurs", // Replace with actual URL if available
  },
  {
    img: "\callout_artwork_2.png",
    title: "EXCEPTIONAL VEHICLES",
    desc: `Ranging from Business to First, every class offers the newest and most luxurious vehicles, including thoughtful amenities for passenger enjoyment, safety, and comfort.`,
  },
  {
    img: "\callout_artwork_3.png",
    title: "CHAUFFEUR ACADEMY",
    desc: `We provide in-house professional training to ensure our chauffeurs are always ahead with best-in-class skills and manners.`,
  },
  {
    img: "\callout_artwork_4.png",
    title: "PERFECT AIRPORT PICKUP",
    desc: `Meet & Greet service, flight tracking, and pickup with signage to ensure a seamless experience for your executives.`,
  },
];

function ChauffeurGridSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-13">
        {featureItems.map((item, idx) => (
          <div key={idx} className="flex flex-col  ">
            <img
              src={item.img}
              alt={item.title}
              className="w-40 h-25 object-cover rounded-sm mb-4 shadow-md"
            />
            <h3 className="text-lg font-semibold mt-8 text-black mb-2">
              {item.title}
            </h3>
            <p className="text-black-700   text-base max-w-sm">
              {item.desc}
              {item.linkText && (
                <>
                  {" "}
                  <a
                    href={item.linkHref}
                    className="text-black underline hover:text-gray-800"
                  >
                    {item.linkText} &rsaquo;
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChauffeurGridSection;
