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
                <Link to="/">
                <a href="" className='side-link'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/vendors'  style={{ textDecoration: 'none' }}>
                <a href="">
                    <BsPeopleFill className='icon'/> Vendors
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/orders' style={{ textDecoration: 'none' }}>
                <a href="">
                    <BsListCheck className='icon'/> Orders
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/customizes' style={{ textDecoration: 'none' }}>
                <a href="">
                <BsMenuButtonWideFill className='icon'/> Customize
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
               <Link to='/bookings' style={{ textDecoration: 'none' }}>   
                <a href="">
                    <BsListCheck className='icon'/> Bookings
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;