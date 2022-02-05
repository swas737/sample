import React from 'react'

function Partner(props) {
  return (
    <div
      className='col-lg-4'
      style={{
        alignContent: 'center',
        textAlignLast: 'center',
      }}
    >
      <img
        src={props.image}
        alt='Property Banner Not Found'
        style={{
          width: props.width,
          height: props.height,
          alignSelf: 'center',
        }}
      />
      <div className='legal-title'>{props.name}</div>
    </div>
  )
}

export default Partner
