import React, { useState, useEffect } from 'react';
import "./cart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


function ShoppingCart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate the total amount when products change
    const newTotalAmount = products.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0);
    setTotalAmount(newTotalAmount);
  }, [products]);

  return (
    <div key="shopping-cart"
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>My Basket</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {(!products || products.length === 0) && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products &&
  products.map((product) => (
    <div className="cart-product" key={product.id}>
      {/* <img src={product.image} alt={product.name} /> */}
      <div className="product-info">
        <h3>{product.name}</h3>
        <span className="product-price">Rs. {product.price * product.count}</span>
      </div>
      <select
        className="count"
        value={product.count}
        onChange={(event) => {
          onQuantityChange(product.id, event.target.value);
        }}
      >
        {[...Array(10).keys()].map((number) => {
          const num = number + 1;
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <button className="btn-customize" >
        <Link to="/customizeform" style={{ textDecoration: 'none', color: "#000" }}>Cuctomize</Link>
        </button>
      <button
        className="btn remove-btn"
        onClick={() => onProductRemove(product)}
      >
        <RiDeleteBin6Line size={20} />
      </button>
    </div>
  ))}
  {products && products.length > 0 && (
            <div className="total-amount">
              <span>Total Amount: ${totalAmount}</span>
            </div>
          )}
          {products && products.length > 0 && (
            <button className="btn checkout-btn">Proceed to checkout</button>
          )}
        </div>
        
      </div>
    </div>
  );
}
export default ShoppingCart; 