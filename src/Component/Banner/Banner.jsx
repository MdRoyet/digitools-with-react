import React from "react";
// Assuming banner.png is the image of the person with the tech overlay
import bannerImg from "../../assets/banner.png";
import { Play } from "lucide-react"; // npm install lucide-react

const Banner = () => {
  return (
    <section className="pt-20">
      {/* Hero Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* New Feature Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#4f39f6] animate-pulse"></span>
              <span className="text-1xl font-semibold text-[#4f39f6]">
                New: AI-Powered Tools Available
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Supercharge Your <br />
              <span className="text-slate-800">Digital Workflow</span>
            </h1>

            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-[#7c3aed] text-white rounded-full font-bold shadow-lg hover:bg-[#6d28d9] transition-all">
                Explore Products
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-purple-200 text-[#4f39f6] rounded-full font-bold hover:bg-purple-50 transition-all">
                <div className="p-1 border border-purple-300 rounded-md">
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative">
              <img
                src={bannerImg}
                alt="Digital Workflow Visualization"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center text-white gap-8 md:gap-0">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-1">50K+</h2>
            <p className="text-purple-100 opacity-90">Active Users</p>
          </div>

          <div className="hidden md:block h-12 w-px bg-white/30"></div>

          <div className="text-center">
            <h2 className="text-4xl font-bold mb-1">200+</h2>
            <p className="text-purple-100 opacity-90">Premium Tools</p>
          </div>

          <div className="hidden md:block h-12 w-px bg-white/30"></div>

          <div className="text-center">
            <h2 className="text-4xl font-bold mb-1">4.9</h2>
            <p className="text-purple-100 opacity-90">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
