import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import whatsapp from '../Images/whatsapp.png'
import Group2 from '../Images/Group2.svg'

import { faBell, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg '>
        <img
          className='navbar-brand'
          src={Logo}
          style={{ height: '49.68px', width: '150px' }}
        />

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to='' className='nav-link'>
                Properties
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='' className='nav-link'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='' className='nav-link'>
                How It Works
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto' style={{ alignItems: ' center' }}>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <li className='nav-item'>
              <Link to='#' className='nav-link'>
                +91-636 644 8449
              </Link>
            </li>
            <li className='nav-item'>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <img
              src={Group2}
              alt='Property Banner Not Found'
              style={{
                width: '34px',
                height: '34px',
              }}
            />
            <li className='nav-item'>
              <Link to='#' className='nav-link'>
                Login
              </Link>
            </li>

            <li className='nav-item signup btn-outline-light btn'>
              <Link to='#' className='nav-link'>
                Sign Up
              </Link>
            </li>
            <img
              className='icon-image'
              src={whatsapp}
              alt='not found'
              style={{
                width: '28px',
                height: '28px',
              }}
            />
            <li className='nav-item'>
              <Link to='#' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
