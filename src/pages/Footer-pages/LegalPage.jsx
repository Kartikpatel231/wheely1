import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Scroll to top hook
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
};

const sections = [
  {
    title: 'FOR PASSENGERS',
    items: [
      { title: 'Terms & Conditions', date: '4 Nov 2024', path: '/Footer/LegalPage/Pasenger/TermCondition' },
      { title: 'Service Provider Terms', date: '4 Nov 2024', path: '/Footer/LegalPage/Pasenger/Service' },
      { title: 'Privacy Policy', date: '5 Mar 2025', path: '/Footer/LegalPage/Passenger/PrivacyPolicy' },
      { title: 'Cookie Policy', date: '19 Jun 2023', path: '/Footer/Passenger/CookiePolicy' },
    ],
  },
  {
    title: 'FOR PARTNERS',
    items: [
      { title: 'Terms & Conditions', date: '4 Nov 2024', path: '/Footer/Partner/TermsCondition' },
      { title: 'Service Provider Terms', date: '4 Nov 2024', path: '/Footer/Partner/ServiceProviderTerm' },
      { title: 'Sub-Partner Agreement', date: '4 Nov 2024', path: '/Footer/Partner/SubPartnerAgreement' },
      { title: 'Privacy Policy', date: '5 Mar 2025', path: '/Footer/Partner/ServiceProviderTerms' },
    ],
  },
  {
    title: 'FOR CORPORATE CLIENTS',
    items: [
      { title: 'Terms & Conditions', date: '4 Nov 2024', path: '/Footer/Corporate/TermsCondition' },
      { title: 'Service Provider Terms', date: '4 Nov 2024', path: '/Footer/Corporate/Service_Provider' },
      { title: 'Privacy Policy', date: '5 Mar 2025', path: '/Footer/Corporate/Privacy_Policy_Cor' },
    ],
  },
];

const LegalPage = () => {
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useScrollToTop();
  
  // Navigation handler with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen px-6 md:px-20 py-10 text-black">
      <h1 className="text-5xl mt-10 font-[500] text-center mb-30">Legal</h1>

      <div className="mb-10 max-w-5xl ml-25">
        <label className="block text-xs text-gray-800 mb-2 uppercase tracking-wider">
          Country
        </label>
        <select 
          className="w-full border-1 border-gray-200 px-4 py-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <option>United Kingdom</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mr-25 ml-25">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="font-[400] text-2xl mb-4">{section.title}</h2>
            <ul className="space-y-4">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                    className="flex-1 cursor-pointer transition-colors hover:text-gray-600"
                  >
                    <p className="text-MD font-[400]">{item.title}</p>
                    <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                  </a>
                  <span className="text-lg text-gray-400">›</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalPage;