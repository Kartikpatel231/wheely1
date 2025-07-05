import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ascotImage from '../assets/ascot-chauffeur.webp';
import errandsImage from '../assets/errands-chauffeur.webp';
import chauffeursImage1 from '../assets/chauffeur-image1.webp';
import chauffeursImage2 from '../assets/chauffeur-image2.webp';

function Dropdown({ items, onClose, headerHeight }) {
  const [isVisible, setIsVisible] = useState(false);

  const images = {
    'ascot-chauffeur.webp': ascotImage,
    'errands-chauffeur.webp': errandsImage,
    'chauffeurs-image1.webp': chauffeursImage1,
    'chauffeurs-image2.webp': chauffeursImage2,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
   
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      onClose();
    }, 900);
  };

  const handleLinkClick = () => {
    handleClose();
  };

  
  const itemsWithImages = items.filter(item => item.image && item.caption);
  
  const allItems = items;

  return (
    <div
      className={`fixed inset-0 bg-white z-50 transition-all duration-900 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
      style={{ top: `${headerHeight - 1}px` }}
    >
      <div className="h-full overflow-y-auto bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Left column - navigation items */}
            <div className="lg:w-1/3">
              <div className="grid grid-cols-1 gap-1">
                {allItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={handleLinkClick}
                    className="block py-2 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right column - image cards */}
            {itemsWithImages.length > 0 && (
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {itemsWithImages.map((item, index) => (
                    <div key={index} className="group">
                      <Link
                        to={item.to}
                        onClick={handleLinkClick}
                        className="block"
                      >
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={images[item.image]}
                            alt={item.label}
                            className={`object-cover w-full transition-transform duration-300 group-hover:scale-105 ${
                              index % 2 === 0 ? 'h-[150px]  ' : 'h-[280px]'
                            }`}
                          />
                        </div>
                        <div className="mt-4">
                         
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {item.caption}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 bg-white">
          <div className="container mx-auto px-6 py-4">
            <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center">
              LANGUAGE (ENGLISH)
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;