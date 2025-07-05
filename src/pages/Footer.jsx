import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed container: removed ml-25 and max-w-screen */}
      <div className='border-t border-gray-200 bg-white text-black flex flex-wrap justify-between px-4 md:px-10 py-8 mt-10 w-full'>
        {/* Download App Section */}
        <div className='w-full md:w-1/4 p-4  '>
          <div className="flex items-center">
            <div className="text-sm pt-4 pb-4 leading-8 uppercase">
              <Link 
                to='/download' 
                onClick={scrollToTop}
                className="hover:text-gray-600 transition-colors"
              >
                Download the app
              </Link>
            </div>
            <div className="pl-2">
              <Link to='/' onClick={scrollToTop}>
                <img 
                  src="/logo.svg" 
                  alt="App Logo" 
                  className="w-10 h-10 mt-3 object-contain"
                />
              </Link>
            </div>
          </div>
          <p className='text-xs mt-2'>
            Exquisite chauffeured journeys.<br />
            Available for iOS and Android.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='w-full md:w-1/4 p-4'>
          {[
            ['/Footer/Newsroom', 'Newspaper'],
            ['/Footer/jobRoles', 'Open roles'],
            ['/Footer/WorkAtWheely', 'Work at wheely'],
            ['/Chauffers/Becomeac', 'Become a chauffeur'],
            ['/Footer/ContactUs', 'Contact info'],
            ['/Footer/HelpCenter', 'Help & FAQ']
          ].map(([to, text]) => (
            <div className='mb-2' key={to}>
              <Link 
                to={to} 
                onClick={scrollToTop}
                className="uppercase text-sm hover:text-gray-600 transition-colors block"
              >
                {text} &gt;
              </Link>
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className='w-full md:w-1/4 p-4'>
          {[
            ['/Footer/Corporate/Privacy_Policy_Cor', 'Privacy policy'],
            ['/Footer/LegalPage', 'Legal terms'],
            ['/Footer/Passenger/CookiePolicy', 'Cookies']
          ].map(([to, text]) => (
            <div className='mb-2' key={to}>
              <Link 
                to={to} 
                onClick={scrollToTop}
                className="uppercase text-sm hover:text-gray-600 transition-colors block"
              >
                {text} &gt;
              </Link>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className='w-full md:w-1/4 p-4'>
          {[
            ['https://facebook.com', 'Facebook'],
            ['https://instagram.com', 'Instagram'],
            ['https://twitter.com', 'X']
          ].map(([href, text]) => (
            <div className='mb-2' key={href}>
              <a 
                href={href} 
                target='_blank' 
                rel='noopener noreferrer'
                className="uppercase text-sm hover:text-gray-600 transition-colors block"
              >
                {text} &gt;
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Language Selector */}
      <div className='container mx-auto flex justify-center items-center mt-6 mb-10'>
        <p className="text-sm">
          Language(<Link to='/language' onClick={scrollToTop} className="hover:underline">EN</Link>)
        </p>
      </div>

      {/* Locations and Copyright */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 py-4">
        <p className="text-gray-500 text-sm">© 2023 Wheely.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {['London', 'Paris', 'Dubai'].map(city => (
            <Link 
              key={city}
              to={`/cities/${city.toLowerCase()}`} 
              onClick={scrollToTop}
              className="text-sm hover:underline"
            >
              {city}
            </Link>
          ))}
        </div>
        <Link 
          to='/timeredefined' 
          onClick={scrollToTop}
          className="text-sm hover:underline"
        >
          Time Redefined &gt;
        </Link>
      </div>

      {/* Company Info */}
      <div className="container mx-auto text-center text-xs text-gray-600 py-4">
        <p>Wheely Ltd. Registered in England & Wales with company number 11473477.</p>
        <p>Registered office: The Monastery Barn, Syon Park, London Road, Brentford, TW8 8JF, United Kingdom.</p>
      </div>
    </>
  ) 
}

export default Footer;