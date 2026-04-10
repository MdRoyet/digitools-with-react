import React from "react";

const FooterWorkflow = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#712BFD] to-[#A228FF] py-32 px-4 font-manrope">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-xl text-white/90 max-w-3xl mb-12 leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
          {/* Solid White Button with Purple Text */}
          <button className="px-10 py-4.5 rounded-full font-bold text-lg bg-white text-purple-700 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all active:scale-95 whitespace-nowrap">
            Explore Products
          </button>

          <button className="px-10 py-4.5 rounded-full font-bold text-lg border-2 border-white text-white bg-transparent hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">
            View Pricing
          </button>
        </div>

        <p className="text-base text-white/80">
          14-day free trial &nbsp;&bull;&nbsp; No credit card required
          &nbsp;&bull;&nbsp; Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default FooterWorkflow;
