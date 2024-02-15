import React from 'react';
import './order.css';
import { Link } from 'react-router-dom';

function Order () {
    return (
      <div className="Order">
        <div className="popup-container">
  <div className="testbox">
    <form className="orderform" action="/">
      <div className="banner">
        <h1>Decorative Ornaments Ordering Form</h1>
      </div>
      
      <div className="item">
        <p>Order Items</p>
        <textarea className='textarea' rows="4" required></textarea>
      </div>
      <div className="item">
        <p>Name</p>
        <input className='inputorder' type="text" name="name" required/>
      </div>
      <div className="item">
        <p>Email</p>
        <input className='inputorder' type="email" name="email" required/>
      </div>
      <div className="item">
        <p>Phone Number</p>
        <input className='inputorder' type="text" name="phone-no" required/>
      </div>
      <div className="item">
        <p>Address</p>
        <input className='inputorder' type="text" name="address" required/>
      </div>
      <div className="item">
        <p>District</p>
        <input className='inputorder' type="text" name="district" required/>
      </div>
      <div className="btn-block">
        <Link to="/payment">
        <button type="submit" href="/">SEND</button>
        </Link>
      </div>
    </form>
  </div>
  </div>

      </div>
   );
}
           
export default Order;