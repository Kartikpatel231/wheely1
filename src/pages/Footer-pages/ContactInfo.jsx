import React from 'react';

const ContactInfo = () => {
  return (
    <div className="px-6 md:px-20 py-16 text-black font-sans">
      <h1 className="text-4xl font-semibold text-center mb-16">Contact Information</h1>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2">WHEELY HEADQUARTERS</h2>
        <p>The Monastery Barn, Syon Park, London Road, Brentford, TW8 8JF, United Kingdom</p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="font-medium">Customer Service</p>
            <a href="mailto:support@wheely.com" className="underline text-[#000429] ">support@wheely.com</a>
          </div>
          <div>
            <p className="font-medium">Corporate Customers</p>
            <a href="mailto:b2b@wheely.com" className="underline text-[#000429] ">b2b@wheely.com</a>
          </div>
          <div>
            <p className="font-medium">Marketing</p>
            <a href="mailto:marketing@wheely.com" className="underline text-[#000429] ">marketing@wheely.com</a>
          </div>
          <div>
            <p className="font-medium">PR/Press/Media</p>
            <a href="mailto:press@wheely.com" className="underline text-[#000429] ">press@wheely.com</a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold  mb-4">PARTNER/FLEET SUPPORT</h2>
        <p className='mb-3'><span className="font-medium ">United Kingdom:</span> <a href="mailto:londonpartners@wheely.com" className="underline text-[#000429] ">londonpartners@wheely.com</a></p>
        <p className='mb-3'><span className="font-medium mb-5">France:</span> <a href="mailto:parispartners@wheely.com" className="underline text-[#000429] ">parispartners@wheely.com</a></p>
        <p className='mb-3'><span className="font-medium mb-5">United Arab Emirates:</span> <a href="mailto:dubaipartners@wheely.com" className="underline text-[#000429] ">dubaipartners@wheely.com</a></p>
      </div>
    </div>
  );
};

export default ContactInfo;