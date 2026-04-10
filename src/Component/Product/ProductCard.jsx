import React from "react";
import { Check } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  // Logic to match the exact badge colors from your reference image
  const getTagStyles = (type) => {
    switch (type) {
      case "best-seller":
        return "bg-[#FEF3C7] text-[#D97706]"; // Amber/Yellow
      case "popular":
        return "bg-[#EDE9FE] text-[#7C3AED]"; // Purple
      case "new":
        return "bg-[#DCFCE7] text-[#16A34A]"; // Green
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 relative shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* 1. Dynamic Tag (Top Right) */}
      <div className="absolute top-6 right-8">
        <span
          className={`px-4 py-1 rounded-full text-[13px] font-bold ${getTagStyles(product.tagType)}`}
        >
          {product.tag}
        </span>
      </div>

      {/* 2. Product Icon (Fetched from public/products) */}
      <div className="w-16 h-16 mb-8 flex items-center justify-center bg-gray-50 rounded-2xl p-3">
        <img
          src={product.icon}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3. Title */}
      <h3 className="text-[26px] font-bold text-slate-900 mb-3">
        {product.name}
      </h3>

      {/* 4. Description */}
      <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow">
        {product.description}
      </p>

      {/* 5. Pricing Section */}
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-3xl font-bold text-slate-900">
          ${product.price}
        </span>
        <span className="text-gray-400 text-sm font-medium">
          /{product.period === "one-time" ? "One-Time" : "Mo"}
        </span>
      </div>

      {/* 6. Features List */}
      <ul className="space-y-4 mb-10">
        {product.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-600 text-[15px]"
          >
            <Check size={20} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 7. Functional Buy Now Button */}
      <button
        onClick={() => onAddToCart(product)} // This triggers the state increase in App.jsx
        className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl font-bold text-lg transition-all active:scale-[0.98] shadow-lg shadow-purple-100"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
