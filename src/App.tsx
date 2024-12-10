import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;