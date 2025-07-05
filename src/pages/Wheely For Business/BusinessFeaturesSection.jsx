import React from "react";

function BusinessFeaturesSection() {
  const features = [
    {
      title: "FLEXIBLE CENTRAL PAYMENT",
      description:
        "Set up automated monthly invoicing via credit card or direct debit. Alternatively, you can pay per journey using credit card.",
    },
    {
      title: "EASY EXPENSING",
      description:
        "Access monthly statements, VAT invoices and individual journey receipts easily in one place. Set up References for journeys, enabling quick auditing and exact cost centre allocation.",
    },
    {
      title: "WEB-BASED PORTAL",
      description:
        "Get full visibility of your account’s travel activities, request and track journeys, manage user access and billing, all in one web portal.",
    },
    {
      title: "THE WHEELY APP ",
      description:
        "Request unlimited on-demand or in-advance journeys in our refined app and charge directly to your business account. Receive real-time updates and track journeys at your fingertips.",
    },
    {
      title: "CUSTOMER SERVICE",
      description:
        "Our dedicated account managers and 24/7 Customer Service team provide white-glove support, handling all your day-to-day needs, complex itineraries, and on-site event requirements, ensuring your travel operations run smoothly.",
    },
    {
      title: "MULTIPLE ACCOUNTS",
      description:
        "Create and manage multiple accounts within a single portal to accommodate different payment centres for your specific needs.",
    },
    {
      title: "User Role And Travel Policy",
      description:
        " Invite users to your account and assign different role permissions. Customise travel restrictions for users, including monthly spending and vehicle class limits.",
    },
    {
      title: "Exclusive Access",
      description:
        "Access exclusive Wheely membership privileges, including new vehicle classes, early access to new cities, and premium services such as Chauffeur for a Day and Concierge.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 border-b-2 border-gray-200">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BusinessFeaturesSection;
