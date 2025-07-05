import React from 'react';

const faqData = [
  {
    category: 'PAYMENT',
    questions: [
      'Authorisations and Charges',
      'Pre-authorisation',
      'Can I leave a gratuity?',
      'How do I pay for a journey?',
      'How do you calculate fares for out-of-city pickups?',
      'Are parking fees and tolls included in my fare?',
      'How do I remove a payment card from my account?',
      'How can I receive a receipt for my journey?',
      'How do I change my payment method?',
      'How do I add a payment method?'
    ]
  },
  {
    category: 'PAYMENT ISSUES',
    questions: [
      'How to pay a debt',
      'Verification of journey with GPS issues',
      'What should I do if I think I have overpaid?',
      'Why is the balance on my account shown in red?',
      'Why can’t I link a credit card to my account?',
      'Why has my automatic payment failed?'
    ]
  },
  {
    category: 'BOOKING',
    questions: [
      'Can I request black cars only?',
      'How do I request a journey?',
      'If I cancel a booking, do I have to pay a fee?',
      'What is the Comments box for?',
      'Can I request a journey in a different city?',
      'Request a chauffeur for someone else',
      'How do I book in advance?',
      'Can I request several vehicles at once?',
      'How long will I have to wait?'
    ]
  },
  {
    category: 'SERVICES',
    questions: [
      'How does Membership work?',
      'How does Wheely Concierge work?',
      'Airport transfers and automatic flight tracking',
      'How do I contact Customer Service?',
      'What if I’m travelling with a large group?'
    ]
  },
  {
    category: 'YOUR JOURNEY',
    questions: [
      'How do your chauffeurs clean your vehicles?',
      'What should I do if there’s been a safety incident?',
      'What if I leave something in the car?',
      'What should I do if I am not satisfied with the service?',
      'How do I request a car with enough luggage space?',
      'Do your vehicles have child seats?',
      'What is not permitted in a Wheely vehicle?',
      'Am I insured?',
      'Are Wheely cars accessible for wheelchairs?',
      'How do I review my journey history?',
      'Can I bring my pet?',
      'Can I smoke in the car?',
      'What kind of amenities are Wheely vehicles equipped with?'
    ]
  },
  {
    category: 'PROMO CODES AND SPECIAL OFFERS',
    questions: [
      'How do I use Privilege Codes?'
    ]
  },
  {
    category: 'PROFILE',
    questions: [
      'How can I delete my account?',
      'Can I open a business account?',
      'Why has my account been suspended?',
      'How do I set up push and email notifications?',
      'How do I create my profile?',
      'How do I update my profile?',
      'Are my payment details secure?'
    ]
  }
];

const HelpCenter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">How can we help?</h1>

      {/* Top Search and Country */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1">COUNTRY</label>
          <select id="country" className="w-full border border-gray-300 px-3 py-2 rounded-md">
            <option>United Kingdom</option>
            <option>United States</option>
            <option>India</option>
            <option>Germany</option>
          </select>
        </div>
        <div>
          <label htmlFor="search" className="block text-sm font-medium mb-1">SEARCH FAQ</label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md pr-10"
            />
            <span className="absolute top-2.5 right-3 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2  ml-25 mr-25 gap-6 text-lg">
        {faqData.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold uppercase mb-6 border-b border-gray-200 pb-1">{section.category}</h3>
            <ul className="space-y-2">
              {section.questions.map((q, i) => (
                <li key={i} className=" mb-4 cursor-pointer text-black">{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
