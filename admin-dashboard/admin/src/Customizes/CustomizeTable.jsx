import './Customize.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CustomizeTable = (props) => {
    async function fetchVendors() {
        try {
          const response = await fetch('http://your-api-url/vendors');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching vendors:', error);
          return [];
        }
      }

  return (
    
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone-Number</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
        {props.vendors.length>0?(
            props.vendors.map((vendor)=>(
                <tr key={vendor.id}>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.Phoneno}</td>
                        <td>{vendor.address}</td>
                        <td>
                        <button onClick={()=>{
                            props.editRow(vendor)
                        }} className="button muted-button">Edit</button>
                        <button onClick={()=>props.deleteVendor(vendor.id)} className="button muted-button">Delete</button>
                        </td>
                    </tr>    
            ))
            
            ):( 
                <tr>
                    <td colSpan={3}>No vendors</td>
                </tr>
            )
        }
      
    </tbody>
    <Link to='/add-vendor'>
    <button>Add Vendor</button>
    </Link>
  </table>
  );
};

export default CustomizeTable;