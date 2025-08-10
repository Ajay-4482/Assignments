import React, { useState } from 'react';
import products from './data/products';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const incrementQty = (id) => {
    setCart(prev =>
    prev.map(item => item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decrementQty = (id) => {
    setCart(prev =>
        prev.map(item =>
        item.product.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };


  return (
    <>
      <Navbar openCart={() => setShowCart(true)} cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <h1 className='featured'>Featured Products</h1>
       <main className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </main>
      {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} incrementQty={incrementQty} decrementQty={decrementQty} removeItem={removeItem} />}
    </>
  );
}
