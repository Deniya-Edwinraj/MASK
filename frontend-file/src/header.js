import './Assests/bootstrap/css/bootstrap.min.css';
import './Assests/bootstrap-icons/bootstrap-icons.min.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Header ({userRole,size, setShow}) {
  const [ setFormData] = useState({
    product: '',
    quantity: 1,
  });

  const [dashboardVisible, setDashboardVisible] = useState(false);

  useEffect(() => {
    setDashboardVisible(userRole === 'admin');
  }, [userRole]);

    return (
      <div className="Header">

<nav className="navbar navbar-expand-lg  navbar-dark" id="navbar">
        <div className="container-fluid">
        <img src={require("./Assests/img/logo.png")} alt="Logo" style={{ width: "5rem", height: "4rem" }} className="img-fluid" />
          <a className="navbar-brand" href="123">MASK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto" style={{ gap: "1rem" }}>
              <li className="nav-item">
                <a className="nav-link " href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <Link to="/services" style={{ textDecoration: 'none' }}>
                <a className="nav-link " href='services'>Services</a>
                </Link>
              </li>

             {/* {userRole && userRole === 'admin' && (
              <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/">Dashboard</a>
              </li>
             )} */}
             {dashboardVisible && (
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:5173/">Dashboard</a>
              </li>
             )}
          </ul>
          <div className='addcart-icon'>
          <button id="cart"  onClick={()=>setShow(false)}><i className="bi bi-bag-check-fill"></i>          
           <span>{size}</span>
          </button>
          </div>

          <button className="btn-login p-2 my-lg-0 my-2" id="getStartedBtn" >
             <Link to="/login" style={{ textDecoration: 'none', color:'#000' }}>
              <img src={require("./Assests/img/login.png")} alt="Login" style={{ height: '17px', width: '17px' }} /> Get Started
             </Link>
          </button>
             

          </div>
        </div>
      </nav>

      </div>
    );
  }
  
  export default Header;

