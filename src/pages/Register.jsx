// src/components/Register.js

import React, { useState } from 'react';

const countryCodes = [
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+61', country: 'Australia' },
  // Add more if needed
];

const Register = () => {
  const [selectedCode, setSelectedCode] = useState('+44');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted: ${selectedCode} ${phoneNumber}`);
    // You can integrate an API call here
  };

  return (
    <div className="min-h-auto flex flex-col items-center justify-center bg-white mt-10 mb-20 ">
      <div className="w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold ">WHEELY FOR BUSINESS</h2>
          <p className="text-sm text-gray-600 mt-2">
            Sign in or create an account to access Wheely tailored for your business needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="flex space-x-2">
            <select
              className="border border-gray-300 rounded px-3 py-2 w-1/3 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.country} {c.code}
                </option>
              ))}
            </select>
            <input
              maxLength={10}
              minLength={10}
              type="tel"
              inputMode="numeric"
              placeholder="1234 567890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-2/3 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-gray-500 transition"
          >
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;