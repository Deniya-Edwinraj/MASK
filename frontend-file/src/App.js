import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Assests/bootstrap/css/bootstrap.min.css';
import './App.css';
import Header from './header';
import Body from './Body';
import Footer from './footer';
import Login from './login';
import Product from './dec-orn'; 
import Bookingform from './bookingform';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/booking" element={<Bookingform />} />
        </Routes>
        {/* <Body /> */}
        <Footer />
      </div>
    </Router>

  );
}

export default App;

