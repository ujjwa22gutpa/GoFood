import React, { useState } from 'react'

export default function Cards() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('half');
  const price = 299;

  return (
    <>
      <div 
        className="card mt-5" 
        style={{ 
          width: "250px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden"
        }}
      >
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/047/977/589/small/pizza-slices-flying-isolated-on-white-background-delicious-peperoni-pizza-slices-pepperonis-and-olives-floating-pizza-pieces-with-melting-cheese-with-basil-leaves-flying-italian-style-pizza-slices-photo.jpg" 
          className="card-img-top" 
          alt="Food Item"
          style={{
            height: "180px",
            objectFit: "cover",
            width: "100%"
          }}
        />

        <div className="card-body">
          <h5 className="card-title">Pizza</h5>
          <p className="card-text" style={{ fontSize: "13px", color: "#666" }}>
            Delicious pizza with fresh ingredients
          </p>

          <div style={{ marginBottom: "12px" }}>
            <div className="d-flex justify-content-between mb-2">
              <label style={{ fontSize: "13px" }}>Qty:</label>
              <select 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-select form-select-sm"
                style={{ width: "60px" }}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <label style={{ fontSize: "13px" }}>Size:</label>
              <select 
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="form-select form-select-sm"
                style={{ width: "80px" }}
              >
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <p style={{ margin: "0", fontSize: "12px", color: "#999" }}>Price</p>
            <h5 style={{ margin: "5px 0", color: "#27ae60" }}>
              ₹{(price * quantity).toFixed(0)}
            </h5>
          </div>

          <button 
            className="btn btn-success w-100"
            style={{ fontSize: "14px" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
