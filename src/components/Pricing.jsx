import React, { useState } from "react";

const Pricing = () => {
  const [billingYearly, setBillingYearly] = useState(true);

  const plans = [
    {
      name: "Agency",
      yearlyPrice: 139,
      monthlyPrice: 15,
      users: "per user, per yearly",
      features: [
        "100 Social Profiles",
        "100 Scheduled Posts Per Profile",
        "800+ Templated",
        "Calendar View",
        "24/7 VIP Support",
      ],
    },
    {
      name: "Startup",
      yearlyPrice: 41,
      monthlyPrice: 7,
      users: "per user, per yearly",
      features: [
        "5 Social Profiles",
        "5 Scheduled Posts Per Profile",
        "400+ Templated",
        "Calendar View",
        "24/7 Support",
      ],
    },
    {
      name: "Business",
      yearlyPrice: 29,
      monthlyPrice: 6,
      users: "per user, per yearly",
      features: [
        "10 Social Profiles",
        "5 Scheduled Posts Per Profile",
        "600+ Templated",
        "Calendar View",
        "24/7 VIP Support",
      ],
    },
  ];

  return (
    <div id="services" className="max-w-7xl mx-auto my-20 px-4">
      <h2 className="text-center text-4xl font-bold mb-2">
        Manage All Your Social Media
      </h2>
      <h2 className="text-center text-4xl font-bold mb-12">
        Profiles From One Place.
      </h2>

      {/* Billing toggle */}
      <div className="flex justify-center items-center mb-10 relative">
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm italic text-gray-600">
          get 3 months free
        </span>
        <label className="flex items-center gap-4 text-sm font-medium">
          <span>Billed Yearly</span>
          <button
            onClick={() => setBillingYearly(!billingYearly)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              billingYearly ? "bg-gray-800" : "bg-gray-400"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                billingYearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span>Billed Monthly</span>
        </label>
      </div>

      {/* Pricing cards */}
      <div className="flex flex-col md:flex-row justify-center gap-7">
        {plans.map((plan, idx) => {
          const isActive = idx === 1; // center card highlighted
          const price = billingYearly ? plan.yearlyPrice : plan.monthlyPrice;
          return (
            <div
              key={plan.name}
              className={`flex flex-col items-center rounded-xl shadow-lg border p-8 md:w-1/3
                ${isActive ? "bg-[#002851] text-white" : "bg-white  text-black"}
              `}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isActive ? "text-white" : "text-black"}`}>
                {plan.name}
              </h3>
              <p
                className={`text-5xl font-extrabold mb-2 ${
                  isActive ? "text-white" : "text-black"
                }`}
              >
                ${price}
              </p>
              <p className={`text-sm mb-6 ${isActive ? "text-white/80" : "text-gray-600"}`}>
                {plan.users}
              </p>

              <button
                className={`mb-6 px-6 py-2 rounded-full border transition-colors
                  ${
                    isActive
                      ? "border-white text-white hover:bg-white hover:text-[#002851]"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }
                `}
              >
                Start My 15-day Trial
              </button>

              <hr className={`w-16 border ${isActive ? "border-white/40" : "border-gray-300"} mb-6`} />

              <ul className="space-y-2 text-center text-sm">
                {plan.features.map((feat) => (
                  <li key={feat} className={isActive ? "text-white/80" : "text-gray-600"}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
