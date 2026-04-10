import React from "react";
// Import the specific icons from react-icons
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f1422] text-white py-16 px-4 font-manrope">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-[320px]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              {["Features", "Pricing", "Templates", "Integrations"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-[15px]"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {["About", "Blog", "Careers", "Press"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {["Documentation", "Help Center", "Community", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-[15px]"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold mb-6">Social Links</h3>
            <div className="flex gap-3">
              {/* Instagram Icon */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0f1422] hover:bg-gray-200 transition-colors"
              >
                <FiInstagram size={18} strokeWidth={2.5} />
              </a>

              {/* Facebook Icon */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0f1422] hover:bg-gray-200 transition-colors"
              >
                <FiFacebook size={18} strokeWidth={2.5} />
              </a>

              {/* X (Twitter) Icon */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0f1422] hover:bg-gray-200 transition-colors"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[14px]">
            &copy; 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-white transition-colors text-[14px]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
