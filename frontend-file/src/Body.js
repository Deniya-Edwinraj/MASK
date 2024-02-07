import React from 'react';
import { Link } from 'react-router-dom';

function Body () {
    return (
      <div classNameNameName="Body">
{/* <!-- Home --> */}
      <section className="home">

        <div className="content">
            <h1 className="h1"> MASK</h1>
            <p className="description">We are Provide Best Decorative Ornaments <span> & </span> Function Decoration According To Your Preferance.</p>
        </div>

        <div className="image">
            <img src={require("./Assests/img/IMG_20240128_225317_911.jpg")} alt="home-img" data-speed="-3" className="move img-fluid"/>
        </div>
      </section>
{/* <!-- End Home --> */}

{/* <!-- About --> */}
   <section className="about" id="about">
     <div className="main">
      <img src={require("./Assests/img/collage (1).jpg")} alt="about-img" style={{height:'75%', width:'75%'}}/>
     </div>
     <div className="all-text">
      <h2>We Provide The Best <br/>You Want</h2>
      <p><span>MASK</span> provide you with the finest paper-based decorative ornaments and functional decoration as you wish at an affordable price.</p>
      <h3>Join us for a unique experience !</h3>
     
     <div className="btn-button">
     <Link to="/product">
      <button className="btn3"><img src={require("./Assests/img/buynow.png")} alt="icon" style={{height:'30px', width:'30px'}}/> Start Purchase</button>
      </Link>
     </div>
    </div>

   </section>
{/* <!-- About End --> */}

{/* <!-- Contact Form --> */}
<section id="contact">
<div className="contact">
  <div className="container-contact">
    <div className="footer-inner">
      <div className="row">
        <div className="col-md-8">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3933.394322960658!2d80.03600307598626!3d9.647307990440883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzgnNTAuMyJOIDgwwrAwMicxOC45IkU!5e0!3m2!1sen!2slk!4v1706866217815!5m2!1sen!2slk" title="map" style={{width:'600', height:'450', border:'0', allowfullscreen: '', loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}></iframe>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-text">
          <h1>Let's Get In Touch</h1>
            <h2><img src={require("./Assests/img/loc.png")} alt="icon" style={{height: '30px', width: '30px'}}/> &nbsp; Address</h2>
            <p>&nbsp;Valampuram, Jaffna.</p>
            <h2><img src={require("./Assests/img/viber.png")} alt="icon" style={{height: '30px', width: '30px'}}/>  &nbsp; Contact Us</h2>
            <p>&nbsp;+91 0987654321</p>
            <h2><img src={require("./Assests/img/mail.png")} alt="icon" style={{height: '30px', width: '30px'}}/>  &nbsp; E-Mail</h2>
            <p> &nbsp; deniyaedwinraj@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <form action="index.html" autocomplete="off">
    <h3 className="title">Contact us</h3>
    <div className="input-container">
      <input type="text" name="name" class="input" />
      <label for="">Username</label>
      <span>Username</span>
    </div>
    <div className="input-container">
      <input type="email" name="email" class="input" />
      <label for="">Email</label>
      <span>Email</span>
    </div>
    <div className="input-container">
      <input type="tel" name="phone" class="input" />
      <label for="">Phone</label>
      <span>Phone</span>
    </div>
    <div className="input-container textarea">
      <textarea name="message" class="input"></textarea>
      <label for="">Message</label>
      <span>Message</span>
    </div>
    <input type="submit" value="Send" className="btn3" />
  </form>
</div>
</section>

{/* <!-- Contact end --> */}

      </div>
    );
  }
  
  export default Body;