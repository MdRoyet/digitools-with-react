import "./App.css";
import React, { Suspense, useState } from "react";
import NavBar from "./Component/NavBar/NavBar";
import Banner from "./Component/Banner/Banner";
import ProductHeader from "./Component/Product/ProductHeader";
import ProductList from "./Component/Product/ProductList";

function App() {
  // Start with 0
  const [cartCount, setCartCount] = useState(0);
  // Function to increase the count
  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      {/* Navbar */}
      <NavBar cartCount={cartCount}></NavBar>

      {/* Banner */}
      <Banner></Banner>

      {/* Pass count to Header to show Cart(X) */}
      <ProductHeader cartCount={cartCount}></ProductHeader>

      {/* Pass the function to ProductList so buttons can trigger it */}
      <ProductList onAddToCart={handleAddToCart}></ProductList>
    </>
  );
}

export default App;
