import { useState, useEffect } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/7ffa030f-8608-4b3a-9a9c-74531fc677fb")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error("Error loading menu:", err));
  }, []);

  return (
    <div>
      <h1>Seoul Bites </h1>
      {menu.map((item, idx) => (
        <div key={idx} className="menu-item">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "200px", borderRadius: "8px" }}
          />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <strong>₱{item.price}</strong>
        </div>
      ))}
    </div>
  );
}
