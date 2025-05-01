import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Elevate your style</h1>
        <p>Discover trendy apparel</p>
        <Link to="/shop" className="btn-green">View Products</Link>
      </div>
    </header>
  );
}

export default Home;
