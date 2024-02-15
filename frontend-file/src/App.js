import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Assests/bootstrap/css/bootstrap.min.css';
import './App.css';
import Header from './header';
import Body from './Body';
import Footer from './footer';
import Login from './login';
import Booking from './booking';
import Product from './dec-orn';
import Order from './order';
import Payment from './payment';
import Register from './register';
// import Admin from './Admin/main';
import Customize from './customize';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/register' element={<Register/>} />
          {/* <Route path="/dashboard" component={Admin} /> */}
          <Route path='/customizeform' element={<Customize/>} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

