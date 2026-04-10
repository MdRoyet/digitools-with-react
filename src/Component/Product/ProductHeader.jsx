import React from "react";

const ProductHeader = ({ cartCount, showCart, setShowCart }) => {
  return (
    <section className="pt-20 pb-12 text-center">
      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Premium Digital Tools
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-lg max-w-2xl mx-auto px-4 mb-10 leading-relaxed">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* Toggle Buttons Container */}
      <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-full shadow-sm">
        {/* Products Button */}
        <button
          onClick={() => setShowCart(false)}
          className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
            !showCart
              ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md"
              : "text-gray-600 hover:text-[#4f39f6]"
          }`}
        >
          Products
        </button>

        {/* Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
            showCart
              ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md"
              : "text-gray-600 hover:text-[#4f39f6]"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </section>
  );
};

export default ProductHeader;
