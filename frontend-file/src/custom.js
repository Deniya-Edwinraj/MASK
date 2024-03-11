
import React, { Component } from 'react';
import './dec-orn.css';
import { Link } from 'react-router-dom';

class Custom extends Component {
    render(){
return(

<section className="about-product" id="about">
  <div className="main-product">
    <img src={require("./Assests/img/dec hero.jpg")} alt='hero'/>
  </div>
  <div className="all-text-product">
    <h2>Are You Looking For The <br/>Meticulous Decorations</h2>
   <p><span>MASK</span> provide you with the paper flower decorations for celebrations like
    <ul>
      <li>Birthday Party</li>
      <li>Wedding</li>
      <li>Family get-together</li>
      <li>Reuions</li>
    </ul>
  </p>
   <h3>Join us for a unique experience !</h3>
  
  <div className="btn-button">
  <Link to="/booking">
   <button className="btn2"><i class="bi bi-bookmark-check-fill"></i> Book Now</button>
   </Link>
  </div>
 </div>

</section>
)
    }
}
export default Custom;









