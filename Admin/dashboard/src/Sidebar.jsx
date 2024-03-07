import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> MASK
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/" style={{ textDecoration: 'none', color:'black' }}>
                <a href="" className='side-link'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/products'  style={{ textDecoration: 'none' }}>
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                    <BsFillArchiveFill className='icon'/> Products
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/category'  style={{ textDecoration: 'none' }}>
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/customers'  style={{ textDecoration: 'none' }}>
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                    <BsPeopleFill className='icon'/> Customers
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/vendors'  style={{ textDecoration: 'none' }}>
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                    <BsPeopleFill className='icon'/> Vendors
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/orders' style={{ textDecoration: 'none' }}>
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                    <BsListCheck className='icon'/> Orders
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/customizes' style={{ textDecoration: 'none' }}>
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                <BsMenuButtonWideFill className='icon'/> Customize
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
               <Link to='/bookings' style={{ textDecoration: 'none' }}>   
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                    <BsListCheck className='icon'/> Bookings
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/messages" style={{ textDecoration: 'none', color:'black' }}>
                <a href="" style={{ textDecoration: 'none' , color:'black'}}>
                <BsMenuButtonWideFill className='icon'/> Contacts
                </a>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;