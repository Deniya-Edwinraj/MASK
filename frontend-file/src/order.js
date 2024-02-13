import React from 'react';
import './order.css';

function Order () {
    return (
      <div className="Order">
        <div class="popup-container">
  <div class="testbox">
    <form className="orderform" action="/">
      <div class="banner">
        <h1>Decorative Ornaments Ordering Form</h1>
      </div>
      
      <div class="item">
        <p>Order Items</p>
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

      </div>
   );
}
           
export default Order;