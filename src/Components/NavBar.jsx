import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import "./NavBar.css"

export default function NavBar() {
    const [ showNav, setShowNav ] = useState(false)
    return (
        <div className='section2'>
            <div className='p-[5px] z-40 mt-[10px] bg-white fixed w-[100%] navbar flex rounded-xl justify-between items-center  shadow-lg top-0'>
                <NavLink to="/home">
                    <div className="logo flex items-center">
                        <img src="/assets/logo.png" alt="" />
                        <h1 className='ml-[15px] font-semibold text-2xl text-[#411b11]'>CoffeEx</h1>
                    </div>
                </ NavLink>

                <div className="hidden md:block links">
                    <ul className='flex gap-[15px] mr-[50px] font-semibold'>
                        <NavLink to="/home">
                            <li>Home</li>
                        </ NavLink>
                        <NavLink to="/menu">
                            <li>Menus</li>
                        </ NavLink>
                        <NavLink to="/report">
                            <li>Report</li>
                        </ NavLink>
                        <NavLink to="/contact">
                            <li>Contact Us</li>
                        </ NavLink>

                        <NavLink to="/aboutus">
                            <li>About us</li>
                        </ NavLink>

                            {/* <li className='font-semibold text-orange-500'>Orders</li> */}
                    </ul>
                </div>
                
                {/* <div className="search">
                    <input className='border-solid outline-none border-2 border-[#FF902A] p-[5px] md:p-[10px] rounded-full ' type="text" placeholder='Search' />
                </div> */}
                { !showNav && <FontAwesomeIcon icon={faBars} onClick={ (e) => {setShowNav(prev => !prev)}} className='block md:hidden'/> }
                { showNav &&  <FontAwesomeIcon icon={faClose} onClick={ (e) => {setShowNav(prev => !prev)}}  className='block md:hidden'/>}
            </div>
            {showNav && (
                <div className="block md:hidden bg-white mt-[80px] p-[30px] h-[50%] rounded-md w-[100%] fixed z-10 links">
                    <ul className='gap-[15px] text-right'>
                        <NavLink to="/home">
                            <li>Home</li>
                        </ NavLink>
                        <NavLink to="/menu">
                            <li>Menus</li>
                        </ NavLink>
                            <li>Report</li>
                        <NavLink to="/contact">
                            <li>Contact Us</li>
                        </ NavLink>
                        <NavLink to="/aboutus">
                            <li>About us</li>
                        </ NavLink>
                    </ul>
                </div>
            )}
            
        </div>
    )
}
