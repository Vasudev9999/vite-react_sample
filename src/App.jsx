// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to My Stunning App</h1>
        <p>This is a beautifully styled React app created with Vite.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Fast</h2>
          <p>Experience blazing-fast performance with Vite.</p>
        </div>
        <div className="feature-card">
          <h2>Lightweight</h2>
          <p>Only the essentials, served to you in milliseconds.</p>
        </div>
        <div className="feature-card">
          <h2>Scalable</h2>
          <p>Build apps that scale effortlessly as your project grows.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
