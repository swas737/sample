import React from 'react'
import Banner from '../Images/Banner.png'
import property_icon from '../Images/property_icon.png'
import icibank from '../Images/icibank.png'
import IIFL from '../Images/IIFL.png'
import Button from './Button'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

function Property() {
  const percentage = 66
  return (
    <div className='container '>
      <div className='card-body property'>
        <div className='property-section'>
          <img
            src={property_icon}
            alt='Not Found'
            style={{
              width: '56px',
              height: '50px',
            }}
          />
          <div>
            <h1 className='prop-heading'>Properties</h1>
          </div>
        </div>

        <img
          src={Banner}
          alt='Not Found'
          style={{
            width: '100%',
            height: '80%',
            background: 'transparent',
            opacity: '1',
          }}
        />

        <div className='property-main'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div className='property-name'>
              <a
                style={{
                  border: '2px solid white',
                  borderRadius: '10px',
                  padding: '5px',
                  fontSize: '12px',
                }}
              >
                View Property in Maps
              </a>
              <p> ACKRUTI CENTRE POINT </p>

              <p>
                <FontAwesomeIcon icon={faMapMarker} />
                Andheri East, Mumbai
              </p>
            </div>
            <div className='property-button'>
              <Button name='VIEW PROPERTY' />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div style={{ margin: '10px' }}>
              <p>Tenant</p>
              <img
                src={icibank}
                className='card-img'
                alt='Not Found'
                style={{
                  width: '164.9px',
                  height: '40px',
                }}
              />
            </div>
            <div>
              <img src={IIFL} className='card-img-iifl' alt='Not Found' />
            </div>
            <div
              className='col-lg-5 funded'
              style={{ height: '60px', width: '60px' }}
            >
              <p>Funded</p>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                background='true'
                styles={{
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: '#1A295B',
                  },
                  trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: '#fff',
                    // Text size
                    fontSize: '16px',
                  },
                }}
              />
            </div>
            <div
              className='col-2 col-md-4 '
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <div className='col'>
                <p>Asset Value</p>
                <hr
                  style={{
                    color: '#FFB657',
                  }}
                />
                <p>₹44.54 Crore</p>
              </div>
              <div className='col'>
                <p>Rent Yield</p>
                <hr
                  style={{
                    color: '#FFB657',
                  }}
                />
                <p>9.20%</p>
              </div>

              <div className='col'>
                <p>Target IRR</p>
                <hr
                  style={{
                    color: '#FFB657',
                  }}
                />
                <p>15.38%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
