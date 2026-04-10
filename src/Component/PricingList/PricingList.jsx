import React from "react";
import { Check } from "lucide-react";

const PricingList = () => {
  // Array of data for the pricing cards
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      features: [
        { text: "Access to 10 free tools" },
        { text: "Basic templates" },
        { text: "Community support" },
        { text: "1 project per month" },
      ],
      buttonText: "Get Started Free",
      popular: false,
    },
    {
      id: 2,
      name: "Pro",
      tagline: "Best for professionals",
      price: "$29",
      period: "/Month",
      features: [
        { text: "Access to all premium tools" },
        { text: "Unlimited templates" },
        { text: "Priority support" },
        { text: "Unlimited projects" },
        { text: "Cloud sync" },
        { text: "Advanced analytics" },
      ],
      buttonText: "Start Pro Trial",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: "$99",
      period: "/Month",
      features: [
        { text: "Everything in Pro" },
        { text: "Team collaboration" },
        { text: "Custom integrations" },
        { text: "Dedicated support" },
        { text: "SLA guarantee" },
        { text: "Custom branding" },
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    // Section container with light background and padding
    <section className="bg-[#F8FAFC] py-24 px-4 font-manrope">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* 3-Column Grid for Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              // Base card styling
              className={`rounded-[2.5rem] p-10 md:p-12 relative flex flex-col h-full border border-gray-100 ${
                plan.popular
                  ? "bg-[#7C3AED] text-white shadow-xl shadow-purple-100 -mt-6" // Pro card styles (elevated slightly for badge)
                  : "bg-white text-slate-900 shadow-sm hover:shadow-md" // Starter/Enterprise card styles
              }`}
            >
              {/* Conditional rendering for the "Most Popular" Badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2">
                  <span className="bg-[#FEF3C7] text-[#D97706] px-5 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name & Tagline */}
              <h3
                className={`text-3xl font-extrabold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-[15px] mb-8 font-medium ${plan.popular ? "text-white/80" : "text-gray-500"}`}
              >
                {plan.tagline}
              </p>

              {/* Pricing Display */}
              <div className="flex items-baseline mb-10">
                <span
                  className={`text-6xl font-extrabold ${plan.popular ? "text-white" : "text-slate-900"}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-1.5 font-semibold ${plan.popular ? "text-white/70" : "text-gray-400"}`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Feature List (Flexible to fill space) */}
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3.5 text-[15px]"
                  >
                    <Check
                      size={20}
                      className="text-[#22C55E] mt-0.5 flex-shrink-0"
                    />
                    <span
                      className={plan.popular ? "text-white" : "text-gray-600"}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Functional Call-to-Action Buttons */}
              <button
                // Apply different button styling based on card type
                className={`w-full py-4.5 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95 ${
                  plan.popular
                    ? "bg-white text-[#7C3AED] shadow-purple-200" // Pro plan button
                    : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-purple-100" // Starter/Enterprise button
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingList;
