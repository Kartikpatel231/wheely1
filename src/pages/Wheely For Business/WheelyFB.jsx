import React from "react";
import { Link } from "react-router-dom";
import BusinessFeaturesSection from "./BusinessFeaturesSection";
import ChauffeurGridSection from "./ChauffeurGridSection";
import BusinessAccount from "./BusinessAccount";

function WheelyFB() {
  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return ( <>
 
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight mb-8">
          Elevated Chauffeur Services <br className="hidden md:block" /> for Business Travel
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
          A reliable and high-quality chauffeur experience tailored to the needs of your
          executives, teams and guests. Perfect airport transfers, flexible hourly fares, and
          point-to-point services ensure excellence across the entire travel experience,
          both on demand and in advance.
        </p>
        
        <div className="flex flex-col items-center space-y-6">
          <Link 
            to="/business/Register" 
            onClick={scrollToTop}  // Added scroll to top on click
          >
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-sm text-base font-medium tracking-wide transition-colors duration-200">
              OPEN BUSINESS ACCOUNT
            </button>
          </Link>  
          <p className="text-black-600">
            Already have an account?{' '}
            <Link 
              to="/business/Register" 
              className="text-black font-medium underline underline-offset-4"
              onClick={scrollToTop}  // Also added to sign in link
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>

    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <img src="B2B_Product_EN.png" alt="Img" />
    </div>


    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <p className="text-xl md:text-2xl gap-1 text-black-700 font-[400] mb-12 max-w-4xl mx-auto leading-relaxed">
         Prescheduled and on-demand journeys for executives and employees. From airport transfers to city trips, to by-the-hour excursions, every experience has been designed to delight discerning passengers and busy admins.
        </p>
    </div>

    <BusinessFeaturesSection/>
    <ChauffeurGridSection/>
    <BusinessAccount/>
     </>
  );
}

export default WheelyFB;