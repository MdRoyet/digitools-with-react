import React, { useState } from "react";
import "./App.css"; // 👈 THIS BRINGS ALL YOUR STYLES BACK!
import NavBar from "./Component/NavBar/NavBar";
import Banner from "./Component/Banner/Banner";
import ProductHeader from "./Component/Product/ProductHeader";
import ProductList from "./Component/Product/ProductList";
import Cart from "./Component/Product/Cart";

// Import Toastify and its CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warning("Item is already in the cart!");
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setCart([]);
    setShowCart(false);
    toast.success("Order Processed Successfully! 🎉");
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* 👇 Fixed: passed as a prop, using self-closing tags */}
      <NavBar cartCount={cart.length} />

      <Banner />

      <ProductHeader
        cartCount={cart.length}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <main className="max-w-7xl mx-auto px-4 pb-20">
        {showCart ? (
          <Cart
            cartItems={cart}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        ) : (
          <ProductList onAddToCart={handleAddToCart} cart={cart} />
        )}
      </main>

      <ToastContainer />
    </div>
  );
}

export default App;
