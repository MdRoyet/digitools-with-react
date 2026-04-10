import React from "react";
import { ShoppingCart } from "lucide-react";

// 1. Add { cartCount } inside the parentheses here!
const NavBar = ({ cartCount }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent"
            >
              DigiTools
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-[#4f39f6] font-medium transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          {/* Right Side: Cart, Login, CTA */}
          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            <button className="text-gray-600 hover:text-[#4f39f6] transition-colors relative">
              <ShoppingCart size={24} />

              {/* 2. Replace the hardcoded 0 with {cartCount} */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login */}
            <a
              href="/login"
              className="text-gray-700 hover:text-[#4f39f6] font-semibold transition-colors"
            >
              Login
            </a>

            {/* Get Started Button */}
            <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-md active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
