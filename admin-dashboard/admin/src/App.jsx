// import { useState } from 'react'
// import './App.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import Home from './Home'

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <Header OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <Home />
//     </div>
//   )
// }

// export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Vendors from './Vendor/vendors';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [data, setData] = useState([]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      {/* <Home data={data} /> */}
      <Routes>
      <Route path="/vendors" element={<Vendors />} />
      <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;


