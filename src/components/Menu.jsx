import React, { useState } from "react";
import "./Menu.css";

const Menu = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = {
    "Rice Meals": [
      {
        id: 1,
        name: "Bibimbap",
        price: 220,
        desc: "Mixed rice with vegetables, beef, egg, and gochujang sauce.",
        img: "/menu-images/Bibimbap.png",
      },
      {
        id: 2,
        name: "Kimchi Fried Rice",
        price: 180,
        desc: "Fried rice stir-fried with kimchi, pork, and a sunny-side egg.",
        img: "/menu-images/Kimchi-Fried-Rice.png",
      },
      {
        id: 3,
        name: "Korean Curry Rice",
        price: 200,
        desc: "Mild curry sauce with chicken, carrots, and potatoes over rice.",
        img: "/menu-images/Korean-Curry-Rice.png",
      },
    ],
    Noodles: [
      {
        id: 4,
        name: "Ramyun",
        price: 120,
        desc: "Spicy Korean instant noodles with egg and vegetables.",
        img: "/menu-images/Ramyun.png",
      },
      {
        id: 5,
        name: "Japchae",
        price: 200,
        desc: "Stir-fried glass noodles with beef and veggies in soy-sesame sauce.",
        img: "/menu-images/Japchae.png",
      },
      {
        id: 6,
        name: "Jjajangmyeon",
        price: 210,
        desc: "Black bean sauce noodles with pork and vegetables.",
        img: "/menu-images/Jjajangmyeon.png",
      },
    ],
    "Street Snacks": [
      {
        id: 7,
        name: "Tteokbokki",
        price: 150,
        desc: "Spicy-sweet chewy rice cakes with fish cakes.",
        img: "/menu-images/Tteokbokki.png",
      },
      {
        id: 8,
        name: "Hotteok",
        price: 100,
        desc: "Sweet Korean pancakes filled with brown sugar and nuts.",
        img: "/menu-images/Hotteok.png",
      },
      {
        id: 9,
        name: "Kimbap",
        price: 160,
        desc: "Korean-style sushi rolls with vegetables and meat.",
        img: "/menu-images/Kimbap.png",
      },
    ],
    Drinks: [
      {
        id: 10,
        name: "Banana Milk",
        price: 70,
        desc: "Creamy banana-flavored Korean milk drink.",
        img: "/menu-images/Banana-Milk.png",
      },
      {
        id: 11,
        name: "Iced Coffee",
        price: 90,
        desc: "Strong coffee with sweet cream.",
        img: "/menu-images/Iced-Coffee.png",
      },
      {
        id: 12,
        name: "Strawberry Milk",
        price: 75,
        desc: "Sweet strawberry-flavored milk.",
        img: "/menu-images/Strawberry-Milk.png",
      },
    ],
    Chicken: [
      {
        id: 13,
        name: "Yangnyeom Chicken",
        price: 250,
        desc: "Sweet & spicy Korean fried chicken.",
        img: "/menu-images/Yangnyeom-Chicken.png",
      },
      {
        id: 14,
        name: "Snow Cheese Chicken",
        price: 270,
        desc: "Crispy chicken topped with snow cheese powder.",
        img: "/menu-images/Snow-Cheese Chicken.png",
      },
    ],
  };

  const allItems = Object.entries(categories).flatMap(([cat, items]) =>
    items.map((item) => ({ ...item, category: cat }))
  );

  const menuToShow =
    activeTab === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeTab);

  return (
    <div className="menu-container">
      <h1 className="menu-title">MENU</h1>

      {}
      <div className="menu-tabs">
        {["All", ...Object.keys(categories)].map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeTab === cat ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {}
      <div className="menu-grid">
        {menuToShow.map((item) => (
          <div key={item.id} className="menu-card">
            <div className="img-box">
              <img src={item.img} alt={item.name} />
              <span className="category-badge">{item.category}</span>
            </div>
            <div className="menu-info">
              <h3 className="menu-item">{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
              <div className="menu-footer">
                <span className="menu-price">₱{item.price}</span>
                <button className="order-btn" onClick={() => onAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  a;
};

export default Menu;
