import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/generic/topbar.jsx';
import Footer from './components/generic/footer.jsx';
import Info from './components/home/info.jsx';
import Breaker from './components/home/breaker.jsx';

function App() {
  return (
    <div>
      <Topbar />
      <Info />
      <Breaker />
      <Footer />
    </div>
  );
}

export default App;