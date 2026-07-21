import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ fontSize: "28px" }}>Cart</h1>
        <span
          style={{ color: "#A4A4A4", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </span>
      </div>

      {cart.length === 0 ? (
        <p style={{ color: "#8B8B8B", textAlign: "center", padding: "60px 0" }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  border: "1px solid #EAEAEA",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "70px", height: "70px", objectFit: "contain" }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 500 }}>{item.title}</p>
                  <p style={{ color: "#6C6C6C" }}>
                    ${item.price}
                    {item.quantity > 1 ? ` × ${item.quantity}` : ""}
                    {item.color ? ` · ${item.color}` : ""}
                    {item.memory ? ` · ${item.memory}` : ""}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#E53935",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "32px",
              paddingTop: "16px",
              borderTop: "1px solid #EAEAEA",
            }}
          >
            <h3>
              Total: <span>${total}</span>
            </h3>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={clearCart}
                style={{
                  border: "1px solid #D9D9D9",
                  background: "white",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Clear Cart
              </button>
              <button
                style={{
                  border: "none",
                  background: "black",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;