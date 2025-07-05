import React from 'react'
import WheelySteps from './WheelySteps';


import StandardsSection from './StandardSection';
import TestimonialSection from './TestimonialSection';

function Becomeac() {
  return (
     <>
    <div>
      <div className='container mx-auto justify-center flex items-center w-screen mt-25'>

        <p className='text-6xl'>Become a Chauffeur</p>
      </div>
       <div className='container mx-auto justify-center flex flex-col items-center w-full mt-25 max-w-[800px] text-center mb-25'>

        <p className='text-2xl'>
          Wheely sets the global standard for chauffeuring, with industry-leading certification, generous terms, and in-person support teams. Join the chauffeuring elite.
        </p>
      </div>
      <div className='flex justify-center mt- bg-gray-100 py- w-full h-160 ml-42 mr- max-w-233 '>
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
            <img src="/BAC.png" className='max-h-  h-160 w-560' alt="BAC1" />
        </div>
      </div>
      <div className='ml-40 mr-40 mt-30 text-2xl'>
        <p>TOP RATES FOR TOP TALENT</p>
      </div>
      <div className='ml-40 mr-40 mt-6 text-lg'>
        <p>Wheely provides luxury services to discerning clients, and rewards those who meet the highest expectations. To ensure that our chauffeurs are always well-rested, well-attired, and never in a hurry, we offer a favourable Distance x Time earnings model. Our typical payouts, including incentives:</p>
      </div>
      <div className='border-b border-gray-300 ml-40 mr-40 mt-10'></div>
      <div>
        <div className='flex justify-between ml-40 mr-40 m-0'>
            <p className='text-2xl'>BUSINESS</p>
            <p>An average of £1,800 weekly</p>
        </div>
        <div className='ml-40 mr-40 mt- mb-5'>
            <p> Mercedes-Benz E-Class, EQE, EQS or BMW 5-Series</p>
        </div>
        <div className='border-b border-gray-300 ml-40 mr-40 mt-0'></div>
      </div>
      <div>
        <div className='flex justify-between ml-40 mr-40 m-0'>
            <p className='text-2xl'>FIRST</p>
            <p>An average of £2,500 weekly</p>
        </div>
    
        <div className='ml-40 mr-40 mt- mb-5'>
            <p> Mercedes-Benz S-Сlass W223</p>
        </div>
        <div className='border-b border-gray-300 ml-40 mr-75 mt-0'></div>
      </div>

      <div>
        <div className='flex justify-between ml-40 mr-40 m-0'>
            <p className='text-2xl'>XL</p>
            <p>An average of £2,200 weekly</p>
        </div>
        <div className='ml-40 mr-75 mt- mb-5'>
            <p> Mercedes-Benz V-Class and EQV</p>
        </div>
        <div className='border-b border-gray-300 ml-40 mr-40 mt-'></div>
      </div>
      <div className='flex justify-center mt-20 bg-gray-100 py-10 max-w-full h- ml-40 mr-40'>
        <p className='ml-5'> We are currently offering new London chauffeurs an additional bonus of up to £1,500 for First Class vehicles, £1,500 for XL Class vehicles or £1,000 for Business Class (subject to an applicable vehicle) vehicles upon completion of a minimum number of journeys in their first month.</p>
      </div>
      <div className='border-b border-gray-300 ml- mr- mt-20 mb-20'></div>
      <div className='flex justify-center mt-  py-10 max-w-full h- ml-40 mr-40'>
                  <div className='container ml- mx-auto  items-left text-left w-1/2 mt- max-w-[400px]   '>
                  <div>
                    <h2 className='text-2xl mb-6'>DISCERNING PASSENGERS</h2>
                    <p>Wheely passengers are a pleasure for any chauffeur. They value the fine touches and class of service offered, and behave in kind.</p>
                  </div>
                   <div>
                    <h2 className='text-2xl mb-6 mt-18'> MEANINGFUL SUPPORT</h2>
                    <p>Our support team isn’t bare minimum. They’re fast, helpful, and available 24/7 via the hotline and app, plus in person at the Academy.</p>
                  </div>

                  </div>

                  <div className='container mr- mb-  mx-auto justify-left  items-left w-screen mt-1 max-w-[400px] text-left '>
                     <div>
                    <h2 className='text-2xl mb-6'>PRE-BOOKED JOURNEYS</h2>
                    <p>Our chauffeurs appreciate reserving a significant number of pre-booked fares that they can schedule theirs days around.</p>
                  </div>
                   <div>
                    <h2 className='text-2xl mb-6 mt-18'>COMPLIMENTARY QUALIFICATIONS
</h2>
                    <p>All our chauffeurs receive a CPD-certified Premium Chauffeur Skills certificate and become First Aid certified upon graduation.</p>
                  </div>
                    
                      </div>
                  </div>
                       <div className='border-b border-gray-300 ml- mr- mt-0 mb-30'></div>
                    
    </div>
    <WheelySteps />
       <div className='ml-40 mr-40 mt-20'>
            <h2 className='mb-5 text-2xl'>THE WHEELY STANDARDS</h2>
            <p className='mb-15'>Our passengers expect exceptional and discreet service. Our standards reflect this, and apply for every passenger, every time. We accredit chauffeurs who share this desire for excellence.</p>
            <p><img src="/Academy5.png" alt="Academy" className='w- h- mt- ml-0 mr-0 ' /></p>
        </div>
        <StandardsSection />
        <TestimonialSection />
    </>
    
  )
}

export default Becomeac;