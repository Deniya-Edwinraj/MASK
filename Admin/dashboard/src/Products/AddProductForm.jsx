import React, { useState } from "react";
import './Products.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function AddProductForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      price: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:5000/api/product', formData, {withCredentials:true});
          console.log('Message send successfully:', response.data);
          toast.success('Product created succssfully');
          navigate('/products');
          setFormData({
            name: '',
            price: '',
          });
        } catch (error) {
          console.error('Error submitting request:', error.message);
          toast.error('Invalid process');
        }
      };
      const handleClear = () => {
        setFormData({
            name: '',
            price: '',
        });
      }

   return (
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <label>Product Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Price</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} /><br/>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add new product'}
        </button> 
        <button className="button muted-button" style={{ marginLeft:'280px' }}>
        <Link to='/products' style={{ textDecoration: 'none', color: '#818181' }}>Cancel</Link>
        </button>
      </form>
   );
}

export default AddProductForm;