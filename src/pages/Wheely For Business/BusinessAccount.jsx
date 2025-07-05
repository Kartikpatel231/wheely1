import React from "react";
import { Link } from "react-router-dom";

function BusinessAccount() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
          OPEN A WHEELY FOR BUSINESS ACCOUNT
        </h2>
        
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Create a Wheely for Business account by scheduling a meeting with our manager. 
          We will discuss your business needs and help you set up your account.
        </p>
        
        <Link 
                   to="/business/Register" 
                   onClick={scrollToTop}  // Added scroll to top on click
                 >
                   <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-sm text-base font-medium tracking-wide transition-colors duration-200">
                     OPEN BUSINESS ACCOUNT
                   </button>
                 </Link> 
        
        <p className="text-gray-600">
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
    </section>
  );
}

export default BusinessAccount;