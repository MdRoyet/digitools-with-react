import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ onAddToCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching your JSON data
    fetch("/src/data/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            cart={cart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
