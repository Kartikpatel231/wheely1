import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/XLClass/image1.webp';
import image2 from '../../assets/XLClass/image2.webp';
import image3 from '../../assets/XLClass/image3.webp';
import image4 from '../../assets/XLClass/image4.webp';

import chauffeurimage from "../../assets/chauffeur-image.png"
import chauffeurimage1 from "../../assets/chauffeur-image1.webp"
import seatmap from '../../assets/seatmap_uk_2.webp';

const XlClass = () => {
   const [activeTab, setActiveTab] = useState('Seating');
    const [activeSubTab, setActiveSubTab] = useState('Two Passengers');
    const [activeSlide, setActiveSlide] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isGalleryActive, setIsGalleryActive] = useState(false);
    const [showDropdownNav, setShowDropdownNav] = useState(false);
    const galleryRef = useRef(null);
    const classDetailsRef = useRef(null);
    const capacityRef = useRef(null);
    const chauffeursRef = useRef(null);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset subtab when switching main tabs
    if (tab === 'Seating') {
      setActiveSubTab('Two Passengers');
    } else if (tab === 'Boot Space') {
      setActiveSubTab('1 × Extra Large, 1 × Small');
    }
  };

  const handleSubTabChange = (subTab) => setActiveSubTab(subTab);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsDropdownOpen(false);
  };

  const galleryItems = [
    { src: image1, alt: 'Latest Models', title: 'Latest models, impeccably maintained', description: 'A carefully selected Mercedes-Benz EQE, Mercedes-Benz E-Class or BMW 5 Series driven by an expert chauffeur.' },
    { src: image2, alt: 'Finely Crafted Interiors', title: 'Finely crafted interiors', description: 'Designed for reliable, comfortable travel, Business Class offers seating for four passengers.' },
    { src: image3, alt: 'Thoughtful Amenities', title: 'Thoughtful amenities', description: 'Amenities curated for your convenience, including water, tissues and sanitizing towelettes.' },
    { src: image4, alt: 'Certified Chargers', title: 'Certified chargers', description: 'Every vehicle is equipped with certified Lightning and USB-C chargers.' },
   // { src: image5, alt: 'Sunroof', title: 'Sunroof', description: 'In vehicles with a panoramic sunroof, enjoy extensive views.' },
    //{ src: image6, alt: 'Sunroof', title: 'Sunroof', description: 'In vehicles with a panoramic sunroof, enjoy extensive views.' },
  ];

  useEffect(() => {
      const handleScroll = () => {
        if (!galleryRef.current) return;
        
        //const galleryRect = galleryRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const galleryStart = galleryRef.current.offsetTop;
        const galleryHeight = galleryRef.current.offsetHeight;
        const galleryEnd = galleryStart + galleryHeight;
        
        // Check if gallery is in viewport
        const isInViewport = scrollY >= galleryStart - windowHeight && scrollY <= galleryEnd;
        setIsGalleryActive(isInViewport);
        
        // Show dropdown nav when gallery starts (when it reaches the top of viewport)
        const shouldShowDropdown = scrollY >= galleryStart - 100; // 100px buffer before gallery starts
        setShowDropdownNav(shouldShowDropdown);
        
        if (isInViewport) {
          // Calculate progress through gallery
          const progress = Math.max(0, Math.min((scrollY - galleryStart + windowHeight) / (galleryHeight + windowHeight), 1));
          const slideIndex = Math.floor(progress * galleryItems.length);
          setActiveSlide(Math.min(slideIndex, galleryItems.length - 1));
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      return () => window.removeEventListener('scroll', handleScroll);
    }, [galleryItems.length]);
  

  const seatingOptions = [
    {
      title: 'Two Passengers',
      description: 'Regular seat and a seat with extra legroom',
      selected: activeSubTab === 'Two Passengers'
    },
    {
      title: 'Three Passengers',
      description: 'Two seats in the back and one seat in the front',
      selected: activeSubTab === 'Three Passengers'
    },
    {
      title: 'Four Passengers',
      description: 'Three seats in the back and one seat in the front',
      selected: activeSubTab === 'Four Passengers'
    }
  ];

  const bootSpaceOptions = [
    {
      title: '1 × Extra Large, 1 × Small',
      description: '',
      selected: activeSubTab === '1 × Extra Large, 1 × Small'
    },
    {
      title: '1 × Large, 1 × Medium',
      description: '',
      selected: activeSubTab === '1 × Large, 1 × Medium'
    },
    {
      title: '2 × Medium, 1 × Small',
      description: '',
      selected: activeSubTab === '2 × Medium, 1 × Small'
    },
    {
      title: '2 × Large',
      description: 'Most Business Class vehicles fit two large suitcases in the boot. In vehicles with less boot space, if there are two or fewer passengers, we can place one suitcase in the cabin.',
      selected: activeSubTab === '2 × Large'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Fixed Navigation - Only show when gallery is reached */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDropdownNav 
          ? `opacity-100 translate-y-0 ${isGalleryActive ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md'}` 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex justify-center py-3">
          <button
            type="button"
            className="flex gap-1 justify-center items-center h-8 px-3 pr-2.5 pt-0.5 pb-0 rounded-full shadow-lg backdrop-blur-sm bg-white/90 border-0 cursor-pointer text-xs uppercase tracking-wide font-light"
            onClick={toggleDropdown}
          >
            <span className="whitespace-nowrap">XL:</span>
            <span className="w-16 overflow-hidden whitespace-nowrap transition-all duration-200">
              <span className="whitespace-nowrap">Overview</span>
            </span>
            <svg width={10} height={17} viewBox="0 0 10 17" className="flex-shrink-0 pb-1">
              <path fillRule="evenodd" clipRule="evenodd" d="M5 6L7.75 10H2.25L5 6Z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-12 min-w-40 bg-white rounded shadow-lg overflow-hidden">
              <button className="w-full h-12 px-3 text-center hover:bg-gray-100 transition-colors" onClick={() => scrollToSection(galleryRef)}>Overview</button>
              <button className="w-full h-12 px-3 text-center hover:bg-gray-100 transition-colors" onClick={() => scrollToSection(classDetailsRef)}>Class Details</button>
              <button className="w-full h-12 px-3 text-center hover:bg-gray-100 transition-colors" onClick={() => scrollToSection(capacityRef)}>Capacity</button>
              <button className="w-full h-12 px-3 text-center hover:bg-gray-100 transition-colors" onClick={() => scrollToSection(chauffeursRef)}>Chauffeurs</button>
              <div className="h-px bg-gray-200" />
              <button className="w-full h-12 px-3 text-center hover:bg-gray-100 transition-colors">View Fares</button>
            </div>
          )}
        </div>
      </div>

      <main className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center pt-32 pb-16">
          <h1 className="text-6xl font-semibold tracking-tight mb-6 ">XL Class</h1>
          <section className="text-2xl font-light leading-relaxed tracking-tight px-6 py-6">
            Journey in grandeur with XL, our most spacious offering, perfect for families, group adventures and trips with ample luggage. The Mercedes-Benz V-Class can seat up to six passengers and ensures a voyage of comfort and convenience.
          </section>
        </div>

        {/* Sticky Gallery Section */}
        <div className="relative" ref={galleryRef} style={{ height: `${galleryItems.length * 100}vh` }}>
          <div className={`sticky top-0 w-full transition-all duration-500 ${isGalleryActive ? 'h-screen' : 'h-96'}`}>
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
                  activeSlide === index
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-95 z-0'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-light text-center mb-2">{item.title}</h3>
                  <p className="text-sm text-center opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
            
            {/* Dot Indicator */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-20">
              {galleryItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Class Details Section */}
        <section className="mb-20 pt-20" ref={classDetailsRef}>
          <div className="grid grid-cols-[285px_1fr] gap-8 max-w-6xl">
            <div />
            <div>
              <h3 className="text-2xl uppercase font-light tracking-wide mb-6 pt-12">Class Details</h3>
              <div className="text-lg font-light leading-relaxed space-y-4 mb-12">
                <p>Each meticulously maintained vehicle, driven by a Wheely chauffeur under NDA, transforms into your private office, allowing confidential calls and uninterrupted work on the go.</p>
                <p>Your chauffeur will adjust the climate and music to your preference. Enjoy thoughtful amenities like Lightning and USB-C chargers, tissues and sanitizing towelettes. A complimentary bottle of water ensures you remain refreshed and focused.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="min-w-[30%] font-light">Available For</span>
                  <span>All Users</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="min-w-[30%] font-light">Cities</span>
                  <span className="text-right">
                    <a href="/en/cities/london" className="hover:underline">London</a>, <a href="/en/cities/paris" className="hover:underline">Paris</a>
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="min-w-[30%] font-light">Vehicle</span>
                  <span className="text-right">Mercedes-Benz E-Class, EQE, EQS or BMW 5-Series</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="min-w-[30%] font-light">Passengers</span>
                  <span className="text-right">Up to 4 people</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="min-w-[30%] font-light">Luggage Capacity</span>
                  <span className="text-right">1–3 suitcases</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="min-w-[30%] font-light">Service Fare</span>
                  <button className="text-right underline">From £15</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capacity Section - Enhanced with original design */}
        <section className="mb-20" ref={capacityRef}>
          <div className="grid grid-cols-[285px_1fr] gap-8 max-w-6xl">
            <div className="flex flex-col">
              {/* Seating/Boot Space Tabs */}
              <div className="flex flex-col">
                <button
                  onClick={() => handleTabChange('Seating')}
                  className="flex flex-col items-stretch text-left justify-center cursor-pointer px-3 py-0 border-none bg-transparent"
                >
                  <div className="font-light text-lg leading-6 flex justify-between gap-2 items-center pt-2 pb-6 px-0">
                    <span>Seating</span>
                    <svg width={12} height={22} viewBox="0 0 12 22" className="flex-shrink-0 pb-0.5">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d={activeTab === 'Seating' ? "M6 14L2.5 9H9.5L6 14Z" : "M3 11L8 7.5V14.5L3 11Z"} 
                      />
                    </svg>
                  </div>
                </button>
                
                {/* Seating Options */}
                <div className={`flex flex-col items-stretch transition-all duration-300 ease-in-out overflow-hidden ${activeTab === 'Seating' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col items-stretch gap-1 pb-8">
                    {seatingOptions.map((option) => (
                      <button
                        key={option.title}
                        onClick={() => handleSubTabChange(option.title)}
                        className="flex text-left items-start gap-3 justify-between cursor-pointer p-3 rounded border-none bg-transparent hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col">
                          <div className="flex justify-between">{option.title}</div>
                          {option.description && (
                            <div className="font-light text-sm leading-5 tracking-wide text-gray-600">
                              {option.description}
                            </div>
                          )}
                        </div>
                        <svg width={12} height={22} viewBox="0 0 12 22" fill="none" className={`flex-shrink-0 pb-0.5 ${option.selected ? 'opacity-100' : 'opacity-0'}`}>
                          <path fillRule="evenodd" clipRule="evenodd" d="M6 8C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14C7.65685 14 9 12.6569 9 11C9 9.34315 7.65685 8 6 8Z" fill="black" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleTabChange('Boot Space')}
                  className="flex flex-col items-stretch text-left justify-center cursor-pointer px-3 py-0 border-none bg-transparent"
                >
                  <div className="font-light text-lg leading-6 flex justify-between gap-2 items-center pt-2 pb-6 px-0">
                    <span>Boot Space</span>
                    <svg width={12} height={22} viewBox="0 0 12 22" className="flex-shrink-0 pb-0.5">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d={activeTab === 'Boot Space' ? "M6 14L2.5 9H9.5L6 14Z" : "M3 11L8 7.5V14.5L3 11Z"} 
                      />
                    </svg>
                  </div>
                </button>

                {/* Boot Space Options */}
                <div className={`flex flex-col items-stretch transition-all duration-300 ease-in-out overflow-hidden ${activeTab === 'Boot Space' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col items-stretch gap-1 pb-8">
                    {bootSpaceOptions.map((option) => (
                      <button
                        key={option.title}
                        onClick={() => handleSubTabChange(option.title)}
                        className="flex text-left items-start gap-3 justify-between cursor-pointer p-3 rounded border-none bg-transparent hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col">
                          <div className="flex justify-between">{option.title}</div>
                          {option.description && (
                            <div className="font-light text-sm leading-5 tracking-wide text-gray-600">
                              {option.description}
                            </div>
                          )}
                        </div>
                        <svg width={12} height={22} viewBox="0 0 12 22" fill="none" className={`flex-shrink-0 pb-0.5 ${option.selected ? 'opacity-100' : 'opacity-0'}`}>
                          <path fillRule="evenodd" clipRule="evenodd" d="M6 8C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14C7.65685 14 9 12.6569 9 11C9 9.34315 7.65685 8 6 8Z" fill="black" />
                        </svg>
                      </button>
                    ))}
                    
                    {/* Size Guide Button */}
                    <button className="flex flex-col items-start transition-colors duration-200 ease-in-out justify-center cursor-pointer px-3 py-4 border-none bg-transparent hover:bg-gray-50">
                      <div className="font-light text-sm leading-5 tracking-wider uppercase flex items-center text-gray-600">
                        Size Guide
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="currentColor" className="ml-1 pb-1">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.38868 10.389L8.38868 6.38897L8.77759 6.00006L8.38868 5.61115L4.38868 1.61115L3.61087 2.38897L7.22196 6.00006L3.61087 9.61115L4.38868 10.389Z" />
                        </svg>
                      </div>
                      <div className="font-light text-sm leading-5 tracking-wide text-gray-600">
                        Based on Away, Globe-Trotter and Rimowa
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-2xl uppercase font-light tracking-wide mb-6 pt-12">Capacity</h3>
              <div className="text-lg font-light leading-relaxed mb-6">
                <p>Business Class vehicles can comfortably seat three passengers, with a maximum of four when the armrest is raised. The boot has ample space for travel essentials, accommodating up to one large and one medium suitcase.</p>
              </div>
              
              {/* Seatmap Image */}
              <div className="flex flex-col">
                <div className="items-center flex flex-col justify-center overflow-hidden aspect-[4/3] w-full">
                  <img 
                    loading="eager" 
                    src={seatmap}
                    alt="Seatmap UK" 
                    className="flex-auto h-full object-cover w-full rounded-lg" 
                  />
                </div>
                
                {/* Info Section */}
                <section className="font-light text-sm leading-5 tracking-wide py-3">
                  <div className="flex">
                    <svg width={12} height={12} viewBox="0 0 12 12" className="fill-gray-400 flex-shrink-0 mr-3 mt-px">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.3333 6.00008C11.3333 8.9456 8.94548 11.3334 5.99996 11.3334C3.05444 11.3334 0.666626 8.9456 0.666626 6.00008C0.666626 3.05456 3.05444 0.666748 5.99996 0.666748C8.94548 0.666748 11.3333 3.05456 11.3333 6.00008ZM6.7607 3.2213C6.7607 3.63386 6.4447 3.95864 5.99704 3.95864C5.56692 3.95864 5.24215 3.63386 5.24215 3.2213C5.24215 2.80875 5.56692 2.49275 5.99704 2.49275C6.4447 2.49275 6.7607 2.80875 6.7607 3.2213ZM6.63781 4.7223V9.11119H5.36504V4.7223H6.63781Z" />
                    </svg>
                    <div>
                      <p className="text-sm m-0 text-gray-600">
                        We quote the guaranteed capacity for all vehicles. If you need more space, please consider requesting{' '}
                        <a rel="noreferrer" target="_blank" href="https://wheely.com/en/classes/xl" className="cursor-pointer underline">
                          XL class
                        </a>.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Chauffeurs Section */}
        <section className="mb-20" ref={chauffeursRef}>
          <div className="text-black bg-white grid w-full grid-rows-[auto] grid-cols-[285px_643px] justify-between self-end text-[100%] align-baseline border-0">
  <div className="flex flex-col text-[100%] align-baseline border-0" />
  <div className="flex flex-col text-[100%] align-baseline border-0">
    <div className="flex flex-col text-[100%] align-baseline px-0 py-[48px] border-0">
      <h3 className="tracking-[0px] uppercase font-[350] text-[25px] leading-[30px] align-baseline m-0 pt-[48px] pb-0 px-0 border-0">
        <div className="text-[100%] align-baseline border-0">
          <p className="text-[25px] align-baseline m-0 border-0">
            <span className="text-[100%] align-baseline border-0">
              The Chauffeurs
            </span>
          </p>
        </div>
      </h3>
      <section data-block-type="text" className="tracking-[0px] font-[350] text-[17px] leading-[24px] align-baseline block px-0 py-[24px] border-0">
        <div className="text-[100%] align-baseline border-0">
          <p className="text-[17px] align-baseline m-0 border-0">
            <span className="text-[100%] align-baseline border-0">
              Wheely is&nbsp;the first on-demand luxury chauffeur service
              of&nbsp;its kind, akin to&nbsp;having a&nbsp;private driver.
              Wheely chauffeurs go&nbsp;beyond transportation to&nbsp;deliver
              an&nbsp;exceptional experience and handle personal tasks for their
              guests, such as&nbsp;transporting them to&nbsp;and from the
              office, picking up&nbsp;relatives from the airport, safely taking
              kids to&nbsp;school, or&nbsp;running errands on&nbsp;their behalf.
            </span>
          </p>
        </div>
      </section>
    </div>
  </div>
</div>
        </section>

        {/* Call to Action */}
        <div className="text-black bg-white grid w-full grid-rows-[auto] grid-cols-[285px_643px] justify-between self-end text-[100%] align-baseline border-0">
  <div className="flex flex-col text-[100%] align-baseline border-0">
    <a href="/en/essentials/the-academy" className="no-underline flex flex-col text-[100%] align-baseline pt-[32px] pb-[12px] px-[24px] border-0 hover:underline">
      <div className="aspect-[4_/_3] overflow-hidden shadow-[rgba(122,115,113,0.15)_0px_2px_2px_1px,rgba(122,115,113,0.15)_0px_2px_1px_-3px,rgba(122,115,113,0.15)_0px_2px_4px_-1px] max-w-[120px] text-[100%] align-baseline rounded-[2px] border-0">
        <picture className="items-center flex flex-col justify-center overflow-hidden w-full h-full transition-transform duration-[0.6s] ease-[ease-out] font-[350] text-[17px] leading-[24px] tracking-[0px]">
         <source
    media="(max-width: 639px)"
    type="image/webp"
    srcSet={chauffeurimage1}
    sizes="100vw"
  />
  <source
    media="(min-width: 640px)"
    type="image/webp"
    srcSet={chauffeurimage1}
    sizes="120px"
  />
  <img
    src={chauffeurimage1}
    alt="Chauffeur"
    className="font-[350] text-[17px] leading-[24px] tracking-[0px]"
  />
          <img loading="lazy" src={chauffeurimage1}alt="the academy" decoding="async" className="flex-auto h-full object-cover object-[initial] w-full text-transparent text-[100%] align-baseline border-0" />
        </picture>
      </div>
      <div className="font-[350] text-[17px] leading-[24px] tracking-[0.01em] uppercase flex gap-[4px] items-center align-baseline border-0">
        The Academy
        <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="font-[350] text-[17px] leading-[24px] tracking-[0px] pb-[4px]">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.9896 13.9948L11.4896 8.49482L11.9846 7.99984L11.4896 7.50487L5.9896 2.00487L4.99965 2.99482L10.0047 7.99984L4.99965 13.0049L5.9896 13.9948Z" className="font-[350] text-[17px] leading-[24px] tracking-[0px]" />
        </svg>
      </div>
      <span className="font-[350] text-[13px] leading-[18px] tracking-[0.01em] align-baseline px-0 py-[12px] border-0">
        Our Chauffeur Academy reinforces the highest standards for service,
        safety, etiquette, and discretion.
      </span>
    </a>
  </div>
  <div className="overflow-hidden flex flex-col text-[100%] align-baseline border-0">
    <div className="flex flex-col gap-[48px] text-[100%] align-baseline border-0">
      <div className="flex flex-col no-underline text-[100%] align-baseline border-0">
        <picture className="items-center flex flex-col justify-center overflow-hidden w-full aspect-[4_/_3] font-[350] text-[17px] leading-[24px] tracking-[0px]">
          <source type="image/webp" sizes="(max-width: 968px) calc(100vw - 48px), (max-width: 1919px) 920px, (min-width: 1920px) 1240px" srcSet="
        https://cd.wheely.com/1x_webp_Artwork_4_3_84d1a80c7d.webp 1x,
        https://cd.wheely.com/2x_webp_Artwork_4_3_84d1a80c7d.webp 2x
      " className="font-[350] text-[17px] leading-[24px] tracking-[0px]" />
          <img loading="lazy" src="https://cd.wheely.com/Artwork_4_3_84d1a80c7d.png" alt="Artwork 4 3" decoding="async" className="flex-auto h-full object-cover object-[initial] w-full text-transparent text-[100%] align-baseline border-0" />
        </picture>
        <div className="text-[13px] font-[350] leading-[18px] tracking-[0.13px] align-baseline px-0 py-[12px] border-0">
          Wheely chauffeurs are never inconvenienced. If&nbsp;you need
          to&nbsp;add an&nbsp;unscheduled stop, they’ll quickly find the best
          route. If&nbsp;you request a&nbsp;fresh cortado after a&nbsp;long
          flight, they’ll shop for the highest quality.
        </div>
      </div>
      <div className="flex flex-col no-underline text-[100%] align-baseline border-0">
        <picture className="items-center flex flex-col justify-center overflow-hidden w-full aspect-[4_/_3] font-[350] text-[17px] leading-[24px] tracking-[0px]">
          <source type="image/webp" sizes="(max-width: 968px) calc(100vw - 48px), (max-width: 1919px) 920px, (min-width: 1920px) 1240px" srcSet="
        https://cd.wheely.com/1x_webp_Artwork_4_3_1_f658d25402.webp 1x,
        https://cd.wheely.com/2x_webp_Artwork_4_3_1_f658d25402.webp 2x
      " className="font-[350] text-[17px] leading-[24px] tracking-[0px]" />
          <img loading="lazy" src="https://cd.wheely.com/Artwork_4_3_1_f658d25402.png" alt="Artwork 4 3 1" decoding="async" className="flex-auto h-full object-cover object-[initial] w-full text-transparent text-[100%] align-baseline border-0" />
        </picture>
        <div className="text-[13px] font-[350] leading-[18px] tracking-[0.13px] align-baseline px-0 py-[12px] border-0">
          If&nbsp;a&nbsp;work call delays you 15 minutes at&nbsp;pickup, your
          chauffeur will wait without interrupting you. True chauffeurs don’t
          just drive—they assist, happily.
        </div>
      </div>
      <a href="/en/essentials/the-academy" className="flex flex-col no-underline text-[100%] align-baseline border-0 hover:underline lg:hidden">
        <picture className="items-center flex flex-col justify-center overflow-hidden w-full aspect-[4_/_3] font-[350] text-[17px] leading-[24px] tracking-[0px]">
          <source media="(max-width: 639px)" type="image/webp" sizes="calc(100vw - 24px)" srcSet="
        https://cd.wheely.com/3200w_webp_the_academy_3_4_8548a97a87.webp 3200w,
        https://cd.wheely.com/2480w_webp_the_academy_3_4_8548a97a87.webp 2480w,
        https://cd.wheely.com/2048w_webp_the_academy_3_4_8548a97a87.webp 2048w,
        https://cd.wheely.com/1600w_webp_the_academy_3_4_8548a97a87.webp 1600w,
        https://cd.wheely.com/1240w_webp_the_academy_3_4_8548a97a87.webp 1240w,
        https://cd.wheely.com/1024w_webp_the_academy_3_4_8548a97a87.webp 1024w,
        https://cd.wheely.com/640w_webp_the_academy_3_4_8548a97a87.webp   640w
      " className="font-[350] text-[17px] leading-[24px] tracking-[0px]" />
          <source media="(min-width: 640px)" type="image/webp" sizes="(max-width: 968px) calc(100vw - 48px), (max-width: 1919px) 920px, (min-width: 1920px) 1240px" srcSet="
        https://cd.wheely.com/3200w_webp_the_academy_4_3_91d4b445c0.webp 3200w,
        https://cd.wheely.com/2480w_webp_the_academy_4_3_91d4b445c0.webp 2480w,
        https://cd.wheely.com/2048w_webp_the_academy_4_3_91d4b445c0.webp 2048w,
        https://cd.wheely.com/1600w_webp_the_academy_4_3_91d4b445c0.webp 1600w,
        https://cd.wheely.com/1240w_webp_the_academy_4_3_91d4b445c0.webp 1240w,
        https://cd.wheely.com/1024w_webp_the_academy_4_3_91d4b445c0.webp 1024w,
        https://cd.wheely.com/640w_webp_the_academy_4_3_91d4b445c0.webp   640w
      " className="font-[350] text-[17px] leading-[24px] tracking-[0px]" />
          <img loading="lazy" src={chauffeurimage} alt="the academy" decoding="async" className="flex-auto h-full object-cover object-[initial] w-full text-transparent text-[100%] align-baseline border-0" />
        </picture>
        <div className="text-[13px] font-[350] leading-[18px] tracking-[0.13px] align-baseline px-0 py-[12px] border-0">
          Our Chauffeur Academy reinforces the highest standards for service,
          safety, etiquette, and discretion.
          <span className="inline-flex items-center underline text-[100%] align-baseline border-0">
            Learn More
          </span>
          ›
        </div>
      </a>
    </div>
  </div>
</div>
      </main>
    </div>
  );
};

export default XlClass;