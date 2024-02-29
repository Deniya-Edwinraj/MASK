import React, { Component } from 'react';
import './Vendor.css';
import { Link } from 'react-router-dom';

export default class Vendor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/vendor/') // Make sure to use the correct URL
      .then(response => response.json())
      .then(data => {
        this.setState({ vendors: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
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
            {this.state.vendors.length > 0 ? (
              this.state.vendors.map((vendor) => (
                <tr key={vendor._id}>
                  <td>{vendor.name}</td>
                  <td>{vendor.email}</td>
                  <td>{vendor.phoneNumber}</td>
                  <td>{vendor.address}</td>
                  <td>
                    <button onClick={() => this.props.editRow(vendor)} className="button muted-button">Edit</button>
                    <button onClick={() => this.props.deleteVendor(vendor._id)} className="button muted-button">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No vendors</td>
              </tr>
            )}
          </tbody>
        </table>
        <br />
        <Link to='/add-vendor'>
          <button>Add Vendor</button>
        </Link>
      </div>
    );
  }
}
