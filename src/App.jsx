import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Reviews from "./components/Reviews";
import TaglineSection from "./components/TaglineSection";
import HistorySection from "./components/HistorySection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./Blog";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      {}
      <Navbar cartCount={cartItems.length} />

      {}
      <Routes>
        {}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main style={{ padding: "40px 20px" }}>
                <TaglineSection />
                <HistorySection />
                <Reviews />
              </main>
            </>
          }
        />

        {}
        <Route
          path="/menu"
          element={
            <main style={{ padding: "40px 20px" }}>
              <Menu onAddToCart={handleAddToCart} />
            </main>
          }
        />

        {}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />

        {}
        <Route
          path="/contact"
          element={
            <main style={{ padding: "40px 20px" }}>
              <Contact />
            </main>
          }
        />

        {}
        <Route
          path="/blog"
          element={
            <main style={{ padding: "40px 20px" }}>
              <Blog />
            </main>
          }
        />
      </Routes>

      {}
      <Footer />
    </>
  );
}
