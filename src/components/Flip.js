import React from 'react'
// import lowticketsize from '../Images/lowticketsize.png'
export default function Flip(props) {
  return (
    <div className='flip-main'>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              className='card-images'
              src={props.cardImage}
              alt='not found'
            />
            <h6 className='mt-2 card-titles'> {props.name}</h6>
          </div>
          <div className='flip-card-back'>
            <div>
              <img
                className='card-images'
                src={props.cardImage}
                alt='not found'
              />
              <h6 className='mt-2 card-title-back'> {props.name}</h6>
              <h2 className='card-title-back'>{props.content}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
