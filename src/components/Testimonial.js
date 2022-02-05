import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function Testimonial(props) {
  return (
    <div style={{ margin: '10px' }}>
      <div
        style={{ display: 'flex', flexDirection: 'row', marginRight: '10px' }}
      >
        <div className='Customer-Data'>
          <img className='Customers-image' src={props.image} alt='not found' />
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>

        <div className='Customer-Name' className='text-main'>
          {props.name}
          <p className='Customer-Designation' className='text-main'>
            {props.designation}
          </p>
        </div>
      </div>

      <div className='in-media'>
        <video src={props.vedio} width='380' height='200' controls='controls' />
      </div>
      {/* <div>></div> */}
    </div>
  )
}
