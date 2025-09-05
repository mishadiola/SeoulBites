import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart({ cartItems, setCartItems }) {
  const [success, setSuccess] = useState(false);

  const updateQuantity = (id, change) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setSuccess(true);
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 500 ? 0 : 50;
  const tax = subtotal * 0.12;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="continue-btn">
            Go to Menu
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.img || item.image}
                  alt={item.name}
                  className="cart-item-img"
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>
                    ₱
                    {item.price.toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                    })}
                  </p>

                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-actions">
                  <p className="item-total">
                    ₱
                    {(item.price * item.quantity).toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>
                ₱
                {subtotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="summary-row">
              <span>Tax (12%):</span>
              <span>
                ₱{tax.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>{deliveryFee === 0 ? "Free" : `₱${deliveryFee}`}</span>
            </div>
            <div className="summary-total">
              <strong>Total:</strong>
              <strong>
                ₱{total.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
              </strong>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <Link to="/menu" className="continue-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}

      {}
      {success && (
        <div className="success-popup">
          <div className="success-box">
            <h2>Success!</h2>
            <p>Your order has been placed successfully.</p>
            <button onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
