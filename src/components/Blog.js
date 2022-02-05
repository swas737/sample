import React from 'react'

export default function Blog(props) {
  return (
    <div className='blog-container col-md-12 col-xs-12'>
      <div
        className='row-blog-main-content '
        style={{
          margin: '10px',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <img
          className=' blog-image'
          src={props.blogImage}
          alt='not found'
          style={{ marginRight: '10px' }}
        />
        <div className='blog-content'>
          <h5 className='mt-md-0 mt-3 blog-heading'>
            {props.blogHeading}
            Fractional Ownership – Achieve Financial Freedom With Minimal Risk
          </h5>
          <p className='blog-content'>{props.blogContent}</p>
        </div>
      </div>
    </div>
  )
}
