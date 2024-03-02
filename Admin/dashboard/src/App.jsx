import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Vendors from './Vendor/vendors';
import AddVendorForm from './Vendor/AppVendorForm';
import Bookings from './Bookings/bookings';
import Orders from './Orders/orders';
import Customizes from './Customizes/cutomizes';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/vendors" element={<Vendors />} />
      <Route path="/add-vendor" element={<AddVendorForm />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customizes" element={<Customizes />} />
      </Routes>

    </div>
    </Router>
  )
}

export default App