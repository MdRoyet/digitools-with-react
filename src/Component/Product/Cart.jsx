import React from "react";

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-[2.5rem] bg-gray-50/50 transition-all duration-500 hover:scale-[1.01]">
        {/* Animated Cart Emoji */}
        <div className="text-6xl mb-4 animate-bounce">🛒</div>

        {/* Pulsing Text */}
        <h3 className="text-2xl font-bold text-gray-400 py-2 animate-pulse">
          Your cart is empty
        </h3>

        <p className="text-gray-500 opacity-80">
          Add some tools to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto border border-[#2DD4BF]/30 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">Your Cart</h3>

      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-50/50 p-6 rounded-3xl border border-gray-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-sm">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{item.name}</h4>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="text-pink-500 font-semibold hover:text-pink-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-gray-100 mb-8">
        <span className="text-gray-500 font-medium">Total:</span>
        <span className="text-3xl font-extrabold text-slate-900">
          ${totalPrice}
        </span>
      </div>

      <button
        onClick={onCheckout}
        className="w-full py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl font-bold text-xl transition-all shadow-lg shadow-purple-100"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
