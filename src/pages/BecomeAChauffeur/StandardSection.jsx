import React from 'react';

const HyphenList = ({ items }) => (
  <div className="space-y-3">
    {items.map((text, index) => (
      <div key={index} className="flex items-start gap-2">
        <span className="text-lg">–</span>
        <span className="">{text}</span>
      </div>
    ))}
  </div>
);

const StandardsSection = () => {
  return (
    <div className=" ml-40 mr-40 mt-10">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Chauffeur Standards */}
        <div>
          <h2 className="text-xl  mb-4">CHAUFFEUR STANDARDS</h2>
          <p className="mb-4 font-medium">All Wheely chauffeurs must:</p>
          <HyphenList
            items={[
              "Be fully licensed by TfL (Private Hire License), Royal Windsor or Maidenhead Borough, Castlepoint, Hertsmere or have a Private Hire Operator licence from any licensing authority in England.",
              "Be a UK resident with a National Insurance number.",
              "Know the local geography and language.",
              "Pass through our Chauffeur Academy to demonstrate the elite chauffeuring standards our passengers expect.",
            ]}
          />
        </div>

        {/* Vehicle Standards */}
        <div>
          <h2 className="text-xl  mb-4">VEHICLE STANDARDS</h2>
          <p className="mb-4 font-medium">Our passengers expect pristine, discreet, luxury vehicles.</p>
          <p className="mb-2">All vehicles must be:</p>
          <HyphenList
            items={[
              "Fully Licensed by TfL, Castlepoint, Royal Borough of Windsor and Maidenhead or Hertsmere Borough. Alternatively, be licensed by any licensing authority in England and have a Private Operator Hire licence.",
              "Covered by hire and reward insurance.",
            ]}
          />

          <p className="mt-6 mb-2 font-medium">The models we accept for accreditation are:</p>
          <HyphenList
            items={[
              "BMW 5 Series (G60) or BMW i5 (G60), not older than 3 years.",
              "Mercedes-Benz E-Class, EQS or EQE, not older than 3 years.",
              "Mercedes-Benz S-Class (W223 LWB), not older than 3 years.",
              "Mercedes-Benz V-Class or EQV (LWB or XLWB), not older than 4 years.",
              "Range Rover Autobiography or SV (LWB and 5-Seater), 2024 model.",
            ]}
          />

          <p className="mt-6">
            Vehicles can be used for 4 years in Business, First, SUV and XL, after their date of first registration.
          </p>

          <p className="mt-4">
            See our full list of vehicle standards{' '}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              here
            </a>. Note that not all vehicle colours are accepted.
          </p>
        </div>
      </div>
     
    </div>
    
  );
};

export default StandardsSection;