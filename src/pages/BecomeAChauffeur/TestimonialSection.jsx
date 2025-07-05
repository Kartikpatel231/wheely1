import React from 'react';

const Testimonials = [
  {
    quote:
      "Top-end chauffeurs can earn £1,800 a week by putting in 25–30 journeys a week. But I’d like to be able to say ‘work less and earn more’, as we are more expensive and we do have higher quality standards.",
    logo: "/ProfessionalDriver.jpg", // replace with your actual image path
    alt: "Professional Driver",
  },
  {
    quote:
      "We cover chauffeur standards, the highest standards for the chauffeur industry. They learn about empathy, emotional intelligence and situational awareness.",
    logo: "/BBCNews.jpg", // replace with your actual image path
    alt: "BBC News",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-white ml-40 mr-40 text-center mt-30">
      {Testimonials.map((item, idx) => (
        <div key={idx} className="border-t border-gray-300 py-10">
          <p className=" text-m  font-[400] max-w-3xl mx-auto mb-6">
            {item.quote}
          </p>
          <img
            src={item.logo}
            alt={item.alt}
            className="mx-auto h-[93px] w-  "
          />
        </div>
      ))}
      <div className='flex justify-center mt- bg-gray-100 py- w-full h-160 ml- mr-77 max-w-233 '>
        <div className='   mt- max-w-1/2 min-h-160 w-1/2 ml-4 mr-4 '>
            <form className='mt-15'>
                <div className='mb-8'><label className='w-1/2 mt- max-w-1/2 text-center text-3xl pb-20'><h2>Drive with Wheely</h2></label>
                </div><div className='w-100'> <label className='w-1/2 mt- max-w-1/2 text-center pt-20'><p>If you have an existing fleet of premium vehicles and chauffeurs,<a href='#'> sign up as a fleet owner.</a></p></label>
               </div>
      
      <div className='mt-8 mb-2'>
        <label for="city" class="block text-xs font-medium tracking-wide mb-1">CITY</label></div><div class="mb-8 mt-2">
        <select id="city" name="city" class="w-full border border-gray-300 rounded-md px-3 py-2">
          <option value="London">London</option>
          <option value="Paris">Paris</option>
        </select>
      </div>

      
      <div class="mb-2">
        <label for="phone" class="block text-xs font-medium tracking-wide mb-1">PHONE</label></div><div>
        <div class="flex gap-2">
          <select id="country" name="country" class="w-1/3 border border-gray-300 rounded-md px-2 py-2 text-sm">
            <option value="+44">United Kingdom — +44</option>
            <option value="+33">France — +33</option>
            <option value="+971">United Arab Emirates — +971</option>
            <option value="other">Other country</option>
          </select>
          <input type="tel" id="phone" name="phone" placeholder="---- ------" required
            class="w-2/3 border border-gray-300 rounded-md px-3 py-2"/>
        </div>
      </div>

    <div className='mb- mt-10 w-100 h-20'> 
      <p class="text-xs text-gray-600 leading-5">
        By creating the account, you agree to the 
        <a href="#" class="underline"> Terms and Conditions</a> and 
        <a href="#" class="underline"> Privacy Policy</a>. 
        By proceeding, you consent to receive WhatsApp messages from Wheely.
      </p></div>

      <button type="submit" class="w-full bg-black text-white py-3 rounded-md text-sm font-semibold">
        APPLY
      </button>
      <div>
         <p class="text-center text-sm mt-6">
      Already have an account? 
      <a href="#" class="underline text-black">Sign in</a>
    </p>
      </div>
    
            </form>
        </div>
        <div className='    w-1/2 mt- max-w-1/2 text-center  '>
            <img src="/Test1.png" className='max-h- h-160 w-560' alt="BAC1" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;