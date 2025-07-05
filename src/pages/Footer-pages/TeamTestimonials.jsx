import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TeamTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ricky",
      position: "Wheely Chaffeur Academy, Lead Chauffeur Trainer",
      quote: "As a lead trainer in a tech-driven company, I take pride in shaping professional, safety-conscious chauffeurs who deliver exceptional service. It's not just about driving—it's about precision, efficiency and creating a seamless experience for our clients. Seeing our team grow and excel is the most rewarding part of my job.",
      image: "/RickyImage.jpeg"
    },
    {
      name: "Lewis",
      position: "Sales, Senior Account Executive",
      quote: "I started as an intern in the operations team and after six months moved to our sales team. I had incredible mentors and progressed quickly, owning my part of the sales function, but also working across partnerships, events, operations, marketing and product. For talented and hardworking people, there are a lot of opportunities at Wheely.",
      image: "/Lewis.jpeg"
    },
    {
      name: "Eve",
      position: "Marketing, Manager",
      quote: "I joined Wheely in operations and have grown both professionally and personally—now I lead marketing in our French office. I’m challenged with meaningful work, encouraged to think creatively and strategically, and find it rewarding to see real impact—from collaborating with renowned brands to launching new products, working with a talented team.",
      image: "/Eve.jpeg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl ml-25  text-start mb-8">HEAR FROM OUR TEAM</h1>
      
      <p className="text-start ml-25 mb-8 max-w-3xl mx-auto">
        We are a team which combines passion, determination and expertise across a range of industries, 
        from engineering and product design to marketing and operations. We hire smart people who succeed 
        and progress on merit—through results and consistent high performance—rather than tenure.
      </p>
      
      <div className="my-6  "></div>
      
      <div className="relative   ml-25 mt-15 max-w-4xl ">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          {/* Image on the left - now 1/2 width */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[440px] h-[365px] rounded-2xl  overflow-hidden ">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Testimonial content on the right - now 1/2 width */}
          <div className="w-full ml-2 md:w-1/2">
            <div className="text-left">
              <h2 className="text-2xl text-center font-semibold mb-2">{testimonials[currentIndex].name}</h2>
              <p className="text-gray-600 text-center mb-4">{testimonials[currentIndex].position}</p>
              <blockquote className="text-md text-start leading-6 ">
                "{testimonials[currentIndex].quote}"
              </blockquote>
            </div>
             {/* Navigation arrows - now positioned where the dots were */}
             <div className="flex justify-center mt-10 space-x-4">
          <button 
            onClick={prevTestimonial}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
          </button>
        </div>
          </div>
        </div>
        
       
       
      </div>
    </div>

  );
};

export default TeamTestimonials;