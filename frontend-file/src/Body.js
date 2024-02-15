import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './body.css';

function Body () {
    return (
      <div className="Body">
{/* <!-- Home --> */}
      <section className="home">

        <div className="content">
            <h1 className="h1"> MASK</h1>
            <p className="description">We are Provide Best Decorative Ornaments <span> & </span> Function Decoration According To Your Preferance.</p>
        </div>

        <div className="image">
            <img src={require("./Assests/img/IMG_20240128_225317_911.jpg")} alt="heroimg" data-speed="-3" className="move img-fluid"/>
        </div>
      </section>
{/* <!-- End Home --> */}

{/* <!-- About --> */}
   <section className="about-section" id="about">
     <div className="main">
      <img src={require("./Assests/img/collage (1).jpg")} alt='aboutimg' style={{height:'75%', width:'70%'}}/>
     </div>
     <div className="all-text">
      <h2>We Provide The Best <br/>You Want</h2>
      <p><span>MASK</span> provide you with the finest paper-based decorative ornaments and functional decoration as you wish at an affordable price.</p>
      <h3>Join us for a unique experience !</h3>
     
     <div className="btn-button">
     <Link to="/product">
      <button className="btn2" id="decorativeOrnamentsBtn"><img src={require("./Assests/img/buynow.png")} alt='icon' style={{height:'30px', width:'30px'}}/> Start Purchase</button>
      </Link>
     </div>
    </div>

   </section>
{/* <!-- About End --> */}

{/* <!-- Contact Form --> */}
<div className="contact-section" id="contact">
  <form className="contactform" action="index.html">
    <div className="banner-map">
      <iframe allowfullscreen src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3933.394322960658!2d80.03600307598626!3d9.647307990440883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzgnNTAuMyJOIDgwwrAwMicxOC45IkU!5e0!3m2!1sen!2slk!4v1706866217815!5m2!1sen!2slk" title="map" style={{ width:'100%',height:'210px', border:'0',loading:'lazy',referrerpolicy:'no-referrer-when-downgrade'}}></iframe>
    </div>
    <div className="item">
      <p className="item-name">Name</p>
      <input type="text" name="name" required/>
    </div>
    <div className="item">
      <p className="item-name">Email</p>
      <input type="email" name="email" required/>
    </div>
    <div className="item">
      <p className="item-name">Phone Number</p>
      <input type="text" name="phone-no" required/>
    </div>
    <div className="item">
      <p className="item-name">Messages</p>
      <textarea rows="4" required></textarea>
    </div>
    <div className="btn-block">
      <button className="btn4" type="submit" href="/">SEND MESSAGE</button>
    </div>
    </form>

</div>
{/* <!-- Contact end -->   */}

      </div>
    );
  }
  
  export default Body;