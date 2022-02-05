import React from 'react'

function Button(props) {
  return (
    <>
      <div>
        <a className='know-more'>{props.name}</a>
      </div>
    </>
  )
}

export default Button
