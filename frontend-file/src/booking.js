import React from 'react';
import './booking.css';

function Booking () {
    return (
        <div className="Booking">
        <div class="testbox">
    <form className="bookingform" action="dec-orna.html">
      <div class="banner">
        <h1>Function Decorations Booking Form</h1>
      </div>
      <div class="item">
        <p>Function Type</p>
        <select>
          <option value=""></option>
          <option value="1">*Please select*</option>
          <option value="2">Wedding</option>
          <option value="3">Birthday Party</option>
          <option value="4">Reunion</option>
          <option value="5">Family Get Together</option>
          <option value="6">Other</option>
        </select>
      </div>
      <div class="item">
        <p>Theme</p>
        <input type="text" name="theme" required/>
      </div>
      <div class="item">
        <p>Date of Delivery</p>
        <input type="date" name="bdate" required/>
        <i class="fas fa-calendar-alt"></i>
      </div>
      
      <div class="item">
        <p>Description of Event</p>
        <textarea rows="4" required></textarea>
      </div>
      <div class="item">
        <p>Name</p>
        <input type="text" name="name" required/>
      </div>
      <div class="item">
        <p>Email</p>
        <input type="email" name="email" required/>
      </div>
      <div class="item">
        <p>Phone Number</p>
        <input type="text" name="phone-no" required/>
      </div>
      <div class="item">
        <p>Address</p>
        <input type="text" name="address" required/>
      </div>
      <div class="item">
        <p>District</p>
        <input type="text" name="district" required/>
      </div>
      <div class="btn-block">
        <button type="submit" href="/">SEND</button>
      </div>
    </form>
  </div>

  </div>
    );
}

export default Booking;