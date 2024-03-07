import './customers.css';
import React, { useEffect, useState } from 'react';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const token = 'abc123';

    fetch('http://localhost:5000/api/users/all-users', {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.length > 0 ? (
          customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>

              <td>
              <button onClick={() => this.props.editRow(vendor)} className="button muted-button">Disable</button>

              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No messages</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CustomerTable;
