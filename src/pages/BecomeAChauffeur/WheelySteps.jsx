import React from 'react';

const WheelySteps = () => {
  const steps = [
    {
      number: "1",
      text: "Register and upload your documents",
    },
    {
      number: "2",
      text: "Complete chauffeur skills e-learning module",
    },
    {
      number: "3",
      text: "Attend Accreditation at the Wheely Academy",
    },
  ];

  return (
    <div className="bg-white  ">
      <h2 className="text-2xl font-semibold  ml-40 mb-2">
        3 STEPS TO PARTNERING WITH WHEELY
      </h2>
      <p className=" text-gray-600 mb-10 ml-40 max-w-3xl ">
        We hire the best and respect their time. Newly-applying chauffeurs can be certified and driving within just 3 days.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-40 mr-75">
        {steps.map((step) => (
          <div key={step.number}>
            <p className="text-xl  ">{step.number}</p>
            <hr className="border-t border-gray-500  w-60  mx-auto mb-4" />
            <p className="text-black  font-[400]">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="ml-40 mt-10">
        <button className="text-blue-600font-medium text-lg     ">
          APPLY &gt;
        </button>
      </div>
      <div className='border-b border-gray-300 ml- mr- mt-20 mb-30'></div>
    </div>

    
    
  );
};

export default WheelySteps;