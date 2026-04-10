import React from "react";
import { User, Package, Rocket } from "lucide-react";

const GettingStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      icon: <User size={40} className="text-[#7C3AED]" strokeWidth={2} />,
    },
    {
      id: "02",
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      icon: <Package size={40} className="text-[#7C3AED]" strokeWidth={2} />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <Rocket size={40} className="text-[#7C3AED]" strokeWidth={2} />,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-[2.5rem] p-10 md:p-12 relative shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              {/* Top Right Step Badge */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                {step.id}
              </div>

              {/* Icon Container with light purple background */}
              <div className="w-28 h-28 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8">
                {step.icon}
              </div>

              {/* Card Text Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
