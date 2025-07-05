import React from "react";

const AccessWheelyBusiness = () => {
  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-40 py-10 text-[16px]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
        TWO WAYS TO ACCESS WHEELY FOR BUSINESS
      </h2>

      <div className="grid grid-cols-1 ml-20 md:grid-cols-2 w-2xl md:w-3xl ">
        {/* Self-Serve Registration */}
        <div className="border-r border-gray-300 pr-4 md:pr-10 ">
          <h3 className="text-md  mb-4">SELF-SERVE REGISTRATION</h3>
          <ul className="list-disc pl-6 text-base ">
            <li>Register and access your Wheely for Business account in minutes.</li>
            <li>Ideal for smaller organisations who would prefer to pay by credit card.</li>
          </ul>
          <button className="mt-26 cursor-pointer bg-gray-100  text-black py-3 px-6 w-20 md:w-full hover:bg-[#E8E5E3]">
            SIGN UP NOW
          </button>
        </div>

        {/* Get in Touch */}
        <div className="pl-4 md:pl-10">
          <h3 className="text-md  mb-4">GET IN TOUCH</h3>
          <ul className="list-disc pl-6 text-base">
            <li>
              We can tailor our business solutions to meet your specific needs. Please schedule a
              meeting with your account manager to discuss your requirements in more detail.
            </li>
            <li>
              Ideal for larger organisations or those preferring to pay by bank transfer or Direct
              Debit.
            </li>
          </ul>
          <button className="mt-8 cursor-pointer bg-gray-100 text-black  py-3 px-6 w-20 md:w-full hover:bg-[#E8E5E3]">
            SCHEDULE A MEETING
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessWheelyBusiness;
