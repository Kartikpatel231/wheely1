import React, { useState } from 'react';

function QuestionsAndAnswers() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "How can I access membership?",
      answer: "To become a member, you can either apply an invitation received from an existing member or by completing at least 15 journeys within 6 months."
    },
    {
      question: "How can I share my membership privileges?",
      answer: "New members receive three invitations to share with trusted contacts. Every invitation sent to someone who has never experienced Wheely before comes with a complimentary journey. Once each recipient completes their first journey, we will also credit the first member's account with a complimentary journey of their own (up to a total of three journeys)."
    },
    {
      question: "How can I apply a membership invitation?",
      answer: "To redeem your invitation, follow the link shared by your contact or enter the invitation code manually in the membership section of the app (Membership → Become a Member). The invitation can only be applied if you are not an active or expired member."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">QUESTIONS & ANSWERS</h1>
      
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200">
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200
                ${activeIndex === index ? 'bg-blue-50 text-blue-700' : 'bg-white hover:bg-gray-50 text-gray-700'}`}
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-medium pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 shrink-0
                  ${activeIndex === index ? 'transform rotate-180 text-blue-600' : 'text-gray-500'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                ${activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
            >
              <div className="pt-2 text-gray-600">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;