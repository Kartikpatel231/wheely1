import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import MobileMenu from './MobileMenu';
import Dropdown from './Dropdown';

function Header() {
  const [isEssentialsOpen, setIsEssentialsOpen] = useState(false);
  const [isChauffeursOpen, setIsChauffeursOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const closeAllDropdowns = () => {
    
    setIsEssentialsOpen(false);
    setIsChauffeursOpen(false); 
    
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'essentials') {
      setIsEssentialsOpen(!isEssentialsOpen);
      setIsChauffeursOpen(false);
    } else if (dropdown === 'chauffeurs') {
      setIsChauffeursOpen(!isChauffeursOpen );
      setIsEssentialsOpen(false);
    }
    setIsMenuOpen(false);
  };

  const essentialsItems = [
    { label: 'OFFICIAL CHAUFFEUR OF ASCOT', to: '/essentials/ascot-racecourse', image: 'ascot-chauffeur.webp', caption: 'Travelling to Ascot Racecourse with the Official Chauffeur of Ascot.' },
    { label: 'BUSINESS CLASS', to: '/classes/business' },
    { label: 'NEW BUSINESS CLASS', to: '/classes/new-business' },
    { label: 'FIRST CLASS', to: '/classes/first' },
    { label: 'XL CLASS', to: '/classes/xl' },
    { label: 'SUV', to: '/classes/suv' },
    { label: 'PERFECT AIRPORT TRANSFERS', to: '/essentials/perfect-airport-transfers' },
    { label: 'CONCIERGE', to: '/essentials/concierge' },
    { label: 'CHAUFFEUR FOR A DAY', to: '/essentials/chauffeur-for-a-day', image: 'errands-chauffeur.webp', caption: 'Have a trusted chauffeur handle your errands.' },
  ];

  const chauffeursItems = [
    { label: 'THE CHAUFFERS', to: '/essentials/the-chauffeurs', image: 'chauffeurs-image1.webp', caption: 'Our Chauffeur Academy reinforces the highest standards for service, safety, etiquette, and discretion.' },
    { label: 'THE ACADEMY', to: '/essentials/the-academy', image: 'chauffeurs-image2.webp', caption: 'When you book a chauffeur, you expect more than just a driver. With the title comes a set of expectations.' },
    { label: 'BECOME A CHAUFFEUR', to: '/chauffeurs' },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 py-4 relative z-40" ref={headerRef}>
        <div className="container mx-auto flex flex-col items-center relative">
          {(isEssentialsOpen || isChauffeursOpen) && (
            <button
              onClick={closeAllDropdowns}
              className="absolute top-4 left-4 z-50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.96928 3.03092L6.93916 8.00058L1.96928 12.9702L3.02991 14.0309L7.99984 9.06122L12.9698 14.0309L14.0304 12.9702L9.06052 8.00058L14.0304 3.03092L12.9698 1.97024L7.99984 6.93995L3.02991 1.97024L1.96928 3.03092Z"></path>
              </svg>
            </button>
          )}

          <Link to="/" className="text-2xl font-bold tracking-widest mb-4 font-bebas">
            <svg width="202" height="24" viewBox="0 0 202 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M62.0382 0V3.22206H67.3045V10.3914H51.5008V3.22206H56.7719V0H32.0954V3.22206H37.1621L31.2144 19.7169L24.9942 3.22206H29.4574V0H17.1678V3.22206H21.85L15.6298 19.7169L9.68209 3.22206H14.5249V0H0.478271V3.22206H5.80295L13.7072 24H17.3138L23.4221 7.86049L29.5304 24H33.137L41.0364 3.22206H47.9916V20.7779H42.7253V24H56.7719V20.7779H51.5008V13.6086H67.3045V20.7779H62.0382V24H76.0848V20.7779H70.8186V3.22206H76.0848V0H62.0382Z"></path>
              <path d="M78.7325 0V3.22206H84.0037V20.7779H78.7325V24H106.831V13.7546H103.317V20.7779H87.5129V13.6086H94.5362V17.2687H98.0503V6.7313H94.5362V10.3914H87.5129V3.22206H103.317V10.2454H106.831V0H78.7325Z"></path>
              <path d="M110.34 0V3.22206H115.611V20.7779H110.34V24H138.438V13.7546H134.924V20.7779H119.12V13.6086H126.144V17.2687H129.658V6.7313H126.144V10.3914H119.12V3.22206H134.924V10.2454H138.438V0H110.34Z"></path>
              <path d="M166.531 20.7779H150.728V3.22206H159.508V0H141.947V3.22206H147.219V20.7779H141.947V24H170.046V13.7546H166.531V20.7779Z"></path>
              <path d="M184.092 0V3.22206H190.906L182.335 12.4502L173.764 3.22206H180.578V0H163.017V3.22206H169.165L180.578 15.5117V20.7779H173.555V24H191.115V20.7779H184.092V15.5117L195.506 3.22206H201.648V0H184.092Z"></path>
            </svg>
          </Link>

          <div className="flex space-x-6 text-base font-medium relative">
            <div className="flex space-x-6">
              <NavItem
                label="ESSENTIALS"
                isOpen={isEssentialsOpen}
                toggle={() => toggleDropdown('essentials')}
                type="dropdown"
              />
              <NavItem label="MEMBERSHIP" to="/membership" type="link" />
              <NavItem
                label="CHAUFFEURS"
                isOpen={isChauffeursOpen}
                toggle={() => toggleDropdown('chauffeurs')}
                type="dropdown"
              />
              <NavItem label="CITIES & CLASSES" to="/cities" type="link" />
              <NavItem label="WHEELY FOR BUSINESS" to="/business" type="link" />
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                closeAllDropdowns();
              }}
              className="md:hidden ml-4 text-base"
            >
              {isMenuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.96928 3.03092L6.93916 8.00058L1.96928 12.9702L3.02991 14.0309L7.99984 9.06122L12.9698 14.0309L14.0304 12.9702L9.06052 8.00058L14.0304 3.03092L12.9698 1.97024L7.99984 6.93995L3.02991 1.97024L1.96928 3.03092Z"></path>
                </svg>
              ) : (
                'Menu'
              )}
            </button>
          </div>
        </div>
      </nav>

      {isEssentialsOpen && (
        <Dropdown
          items={essentialsItems}
          onClose={closeAllDropdowns}
          headerHeight={headerHeight}
        />
      )}
      
      {isChauffeursOpen && (
        <Dropdown
          items={chauffeursItems}
          onClose={closeAllDropdowns}
          headerHeight={headerHeight}
        />
      )}

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={[
          { label: 'ESSENTIALS', to: '/essentials' },
          { label: 'Membership', to: '/membership' },
          { label: 'Chauffeurs', to: '/chauffeurs' },
          { label: 'Cities & Classes', to: '/cities-and-classes' },
          { label: 'Wheely For Business', to: '/business' },
        ]}
      />
    </>
  );
}

export default Header;