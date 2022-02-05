import React, { Component } from 'react'

export default function WorkCycle(props) {
  return (
    <div className='image-wrapper d-md-block d-none'>
      <div className='work-cycle-wrapper col-lg-10 col-xs-8'>
        <div className=' work-life col-lg-12 col-xs-8'>
          <img className='work-cycle ' src={props.image}></img>
          <p className='work-title'>{props.name}</p>
        </div>
      </div>
    </div>
  )
}
