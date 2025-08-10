import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function CartModal({ cart, onClose, incrementQty, decrementQty, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

  return (
    <div className="modal">
      <div className="modal-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Your Shopping Cart</h2>
          <button onClick={onClose} style={{ fontSize: '1.2rem', border: 'none', background: 'none' }}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr />
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.product.image} alt={item.product.title} />
              <div className="cart-item-details">
                <h4>{item.product.title}</h4>
                <div className="qty">
                  <button onClick={() => decrementQty(item.product.id)}><FontAwesomeIcon icon={faMinus} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQty(item.product.id)}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
              </div>
              <span className="cart-price">₹{(item.product.price * item.quantity).toFixed(2)}</span>
              <button className="trash-btn" onClick={() => removeItem(item.product.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))
        )}
        <hr />
        <div className="cart-footer">
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
