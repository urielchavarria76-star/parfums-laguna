import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileMenu from './components/layout/MobileMenu';
import CartDrawer from './components/cart/CartDrawer';

// Section Components
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import ProductGrid from './components/sections/ProductGrid';
import DecantGrid from './components/sections/DecantGrid';
import WhatsAppButton from './components/sections/WhatsAppButton';

// Home Page Component
const Home = ({ cart, addToCart, updateQuantity, removeFromCart, cartOpen, setCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setCartOpen(true)}
        onMenuClick={() => setMenuOpen(true)}
      />
      
      <main>
        <Hero />
        <Features />
        <ProductGrid onAddToCart={addToCart} />
        <DecantGrid onAddToCart={addToCart} />
      </main>

      <Footer />

      {/* Overlays */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.bottlePrice || product.decant10ml,
        image: product.image,
        quantity: 1 
      }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/*" 
            element={
              <Home 
                cart={cart}
                addToCart={addToCart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                cartOpen={cartOpen}
                setCartOpen={setCartOpen}
              />
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;