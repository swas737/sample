import React from 'react'
import carousel from '../Images/carousel.png'
import { Carousel } from 'react-bootstrap'

function Header() {
  return (
    <div className='my-carosel'>
      <Carousel variant='light' interval={1000}>
        <Carousel.Item>
          <img className='d-block w-100' src={carousel} alt='First slide' />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={carousel} alt='Second slide' />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={carousel} alt='Third slide' />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img className='d-block w-100' src={carousel} alt='First slide' />
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={carousel} alt='Second slide' />
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={carousel} alt='Third slide' />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Header
