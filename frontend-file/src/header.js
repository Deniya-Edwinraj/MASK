import './Assests/bootstrap/css/bootstrap.min.css';
import './Assests/bootstrap-icons/bootstrap-icons.min.css';
import { Link } from 'react-router-dom';

function Header () {
    return (
      <div className="Header">

<nav class="navbar navbar-expand-lg  navbar-dark" id="navbar">
        <div class="container-fluid">
        <img src={require("./Assests/img/logo.png")} alt="Logo" style={{ width: "5rem", height: "4rem" }} className="img-fluid" />
          <a class="navbar-brand" href="123">MASK</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto" style={{ gap: "1rem" }}>
              <li class="nav-item">
                <a class="nav-link " href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#contact">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="dec-orna.html">Services</a>
              </li>
              
              
            </ul>
            
             <button class="btn-login p-2 my-lg-0 my-2" id="getStartedBtn">
             <Link to="/login">
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

