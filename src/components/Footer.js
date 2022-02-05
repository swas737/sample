import React from 'react'
import Logo from '../Images/Logo.png'
import Union from '../Images/Union.png'
import Facebook from '../Images/Facebook.png'
import Linkedin from '../Images/Linkedin.png'
import Twitter from '../Images/Twitter.png'
import whatsapp from '../Images/whatsapp.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-main'>
      <div className='footer'>
        <div className='footer-inner'>
          <img className='footer-logo' src={Logo} alt='not found' />
          <div className='col-lg-12 col-xs-6 col-sm-6 '>
            <h5 className=' company'>COMPANY</h5>

            <div className='row'>
              <div className='col-lg-2 Link-main '>
                <p>
                  <Link to='/' className='Link'>
                    Properties
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    How it works
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    Media
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    Testimonials
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    FAQs
                  </Link>
                </p>
              </div>
              <div className='col-lg-2'>
                <p>
                  <Link to='/' className='Link'>
                    Blog
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    Careers
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    Sitemap
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    CP Login
                  </Link>
                </p>
                <p>
                  <Link to='/' className='Link'>
                    CP Registration
                  </Link>
                </p>
              </div>
              <div className='col-lg-2 '>
                <h5 className='mt-4'>LEGAL</h5>
                <div className='row'>
                  <div className='col-lg-2 '>
                    <p>
                      <Link to='/' className='Link'>
                        Terms & Conditions
                      </Link>
                    </p>
                    <p>
                      <Link to='/' className='Link'>
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h5 className='mt-4'>CONTACT</h5>
                <div className='Address'>
                  <span>hBits, G-4, Court Chambers, </span>
                  <span>35 New Marine Lines</span>
                  <span>Mumbai 400020, Maharashtra,</span>
                  <span>India</span>
                  <span>info@hbits.co</span>
                </div>
              </div>
              <div className='col-lg-3 '>
                <h5 className='mt-4'>SOCIAL</h5>
                <img className='social' src={Twitter} />
                <img className='social' src={Facebook} />
                <img className='social' src={Linkedin} />
                <img className='social' src={Union} />
                <img className='social' src={whatsapp} />
                <div className='copyright'>
                  <span>COPYRIGHT © 2010-2025 </span>
                  <span>HBITS PROPTECH PRIVATE LIMITED</span>
                  <span>ALL RIGHTS RESERVED.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
