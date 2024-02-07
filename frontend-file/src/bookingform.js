import React from 'react';
import './bookingform.css';

function Bookingform () {
    return (
      <div className="Booking">

<div class="container-booking">
      <h1 class="form-title">Order Now to Celebrate</h1>
      <form action="/dec-orn">
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="function">Function Type</label>
            <input type="text" id="function" name="function"/>
          </div>
          <div class="user-input-box">
            <label for="username">Customer Name</label>
            <input type="text" id="username" name="username"/>
          </div>
          <div class="user-input-box">
            <label for="theme">Theme</label>
            <input type="text" id="theme" name="theme"/>
          </div>
          <div class="user-input-box">
            <label for="location">Location</label>
            <input type="text" id="location" name="location"/>
          </div>
          <div class="user-input-box">
            <label for="date">Date Of Delivery</label>
            <input type="date" id="date" name="date"/>
          </div>
          <div class="user-input-box">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="user-input-box">
            <label for="phone-number">Phone Number</label>
            <input type="text" id="phone-number" name="phone-number"/>
          </div>
        </div>
        <div class="gender-details-box">
          <span class="gender-title">Further Description</span>
          <div class="gender-category">
            <textarea id="description" name="description" rows="4" cols="50"></textarea>
          </div>
        </div>
        <div class="form-submit-btn">
          <input type="submit" value="Booking Now"/>
        </div>
      </form>
    </div>

      </div>
    );
}

export default Bookingform;
