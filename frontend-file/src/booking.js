// // import React from 'react';
// import './booking.css';
// import React, { useState } from 'react';

// function Booking() {
//   const [formData, setFormData] = useState({
//     deliveryInfo: {
//       address: '',
//       district: '',
//       phoneNo: '',
//     },
//     user: {
//       name: '',
//       email: '',
//       phoneNo: '',
//     },
//     bookings: [
//       {
//         function_type: '',
//         theme: '',
//         date_of_delivery: '',
//         description: '',
//       },
//     ],
//     bookingStatus: 'Processing',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5000/api/booking/new', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('Booking created successfully');
//     } else {
//       alert('Failed to create booking');
//     }
//   };

//   const handleAddBooking = () => {
//     setFormData({
//       ...formData,
//       bookings: [...formData.bookings, { function_type: '', theme: '', date_of_delivery: '', description: '' }],
//     });
//   };

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       bookings: formData.bookings.map((booking, i) => (i === index ? { ...booking, [name]: value } : booking)),
//     });
//   };

//   const handleChangeDeliveryInfo = (e, type) => {
//     setFormData({
//       ...formData,
//       deliveryInfo: { ...formData.deliveryInfo, [type]: e.target.value },
//     });
//   };

//   const handleChangeUser = (e, type) => {
//     setFormData({
//       ...formData,
//       user: { ...formData.user, [type]: e.target.value },
//     });
//   };

//     return (
//         <div className="Booking">
//         <div className="testbox">
//     <form className="bookingform" onSubmit={handleSubmit}>
//       <div className="banner">
//         <h1>Function Decorations Booking Form</h1>
//       </div>
//       <div className="item">
//         <p>Function Type</p>
//         <select onChange={(e) => handleChange(e, index)}>
//           <option value=""></option>
//           <option value="1">*Please select*</option>
//           <option value="2">Wedding</option>
//           <option value="3">Birthday Party</option>
//           <option value="4">Reunion</option>
//           <option value="5">Family Get Together</option>
//           <option value="6">Other</option>
//         </select>
//       </div>
//       <div className="item">
//         <p>Theme</p>
//         <input className='inputbooking' type="text" name="theme" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Date of Delivery</p>
//         <input className='inputbooking' type="date" name="bdate" onChange={(e) => handleChange(e, index)} required/>
//         <i className="fas fa-calendar-alt"></i>
//       </div>
      
//       <div className="item">
//         <p>Description of Event</p>
//         <textarea rows="4" onChange={(e) => handleChange(e, index)} required></textarea>
//       </div>
//       <div className="item">
//         <p>Name</p>
//         <input className='inputbooking' type="text" name="name" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Email</p>
//         <input className='inputbooking' type="email" name="email" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Phone Number</p>
//         <input className='inputbooking' type="text" name="phone-no" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Address</p>
//         <input className='inputbooking' type="text" name="address" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>District</p>
//         <input className='inputbooking' type="text" name="district" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="btn-block">
//         <button type="submit" href="/">SEND</button>
//       </div>
//     </form>
//   </div>

//   </div>
//     );
// }

// export default Booking;




import React from 'react';
import './booking.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Booking () {

  const {  handleSubmit } = useForm();

  const onSubmit = (data) => {
    const authToken = 'YOUR_AUTH_TOKEN_HERE'; // replace with your actual token
  
    axios.post('http://localhost:5000/api/booking/new', data, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        console.error('Authentication failed. Please check your authentication credentials.');
      } else {
        console.error(error);
      }
    });
  };
    return (
        <div className="Booking">
        <div className="testbox">
    <form className="bookingform" onSubmit={handleSubmit(onSubmit)}>
      <div className="banner">
        <h1>Function Decorations Booking Form</h1>
      </div>
      <div className="item">
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
      <div className="item">
        <p>Theme</p>
        <input className='inputbooking' type="text" name="theme" required/>
      </div>
      <div className="item">
        <p>Date of Delivery</p>
        <input className='inputbooking' type="date" name="bdate" required/>
        <i className="fas fa-calendar-alt"></i>
      </div>
      
      <div className="item">
        <p>Description of Event</p>
        <textarea rows="4" required></textarea>
      </div>
      <div className="item">
        <p>Name</p>
        <input className='inputbooking' type="text" name="name" required/>
      </div>
      <div className="item">
        <p>Email</p>
        <input className='inputbooking' type="email" name="email" required/>
      </div>
      <div className="item">
        <p>Phone Number</p>
        <input className='inputbooking' type="text" name="phone-no" required/>
      </div>
      <div className="item">
        <p>Address</p>
        <input className='inputbooking' type="text" name="address" required/>
      </div>
      <div className="item">
        <p>District</p>
        <input className='inputbooking' type="text" name="district" required/>
      </div>
      <div className="btn-block">
        <button type="submit" href="/">SEND</button>
      </div>
    </form>
  </div>

  </div>
    );
}

export default Booking;