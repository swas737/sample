import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../components/Navbar'
import Logo from '../Images/Logo.png'
import Partner from '../components/Partner'
import Header from '../components/Header'
import Property from '../components/Property'
import Testimonial from '../components/Testimonial'
import Group4 from '../Images/Group4.png'
import link from '../Images/link.png'
import Home from '../Images/Home.png'
import media from '../Images/media.png'
import Layer from '../Images/Layer.png'
import Layer2 from '../Images/Layer2.png'
import selection from '../Images/selection.png'
import Mask from '../Images/Mask.png'
import Card from '../components/Card'
import WorkCycle from '../components/WorkCycle'
import Flip from '../components/Flip'
import Assets from '../Images/Assets.png'
import Investor from '../Images/Investor.png'
import Experience from '../Images/Experience.png'
import Deloitte from '../Images/Deloitte.png'
import CRE_Matrix from '../Images/CRE_Matrix.png'
import JLL from '../Images/JLL.png'
import Universal from '../Images/Universal.png'
import icibank from '../Images/icibank.png'
import Button from '../components/Button'
import lowticketsize from '../Images/lowticketsize.png'
import clicking from '../Images/clicking.png'
import sprout from '../Images/sprout.png'
import key from '../Images/key.png'
import Cup from '../Images/Cup.png'
import Eye from '../Images/Eye.png'
import ChooseProperty from '../Images/ChooseProperty.png'
import Earn from '../Images/Earn.png'
import Track from '../Images/Track.png'
import Sell from '../Images/Sell.png'
import vedio1 from '../Images/sonal_jain.mp4'
import Group16 from '../Images/Group16.png'
import ICICI from '../Images/ICICI.png'
import Faasos from '../Images/Faasos.png'
import CMA_CGM from '../Images/CMA_CGM.png'
import ingenico from '../Images/ingenico.png'
import CNBC from '../Images/CNBC.png'
import EcomomicTimes from '../Images/EcomomicTimes.png'
import FinancialExpress from '../Images/FinancialExpress.png'
import HindustanTimes from '../Images/HindustanTimes.png'
import Mint from '../Images/Mint.png'
import Vaante from '../Images/Vaante.png'
import IIFL_T from '../Images/IIFL_T.png'
import Sourcing from '../Images/Sourcing.svg'
import sourcing1 from '../Images/sourcing1.svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function HomeScreen() {
  return (
    <>
      {/* ******************************************NAVBAR-SECTION*************************************** */}
      <Navbar />
      {/* ******************************************HEADER-SECTION*************************************** */}
      <Header />
      <div className='container'>
        {/* ******************************************PROPERTY-SECTION*************************************** */}
        <Property />
        {/* ******************************************WHO-WE-ARE-SECTION*************************************** */}

        <div className='who-we-are'>
          <div className=' text col-lg-2 col-sm-12 col-xs-12'>
            <img
              src={Group4}
              alt='Not Found'
              style={{
                width: '163px',
                height: '103px',
              }}
            />
          </div>
          <div className=' text col-lg-4 '>
            <h2 className='text-main-who-we-are'>Who we are?</h2>
            <div>
              <b>hBits</b> is the most experienced fractional ownership platform
              run by veterans with 100+ years of cumulative experience in
              commercial real estate
            </div>
          </div>
          <div className='info-card-wrapper col-lg-4 '>
            <Card price='₹3,000+ Crore' name='Assets Managed' image={Assets} />
            <Card price='35+ Years' name='Experience' image={Experience} />
            <Card
              price='20,000+'
              name='Registered Investors'
              image={Investor}
            />
          </div>
        </div>
        <hr
          style={{ marginTop: '50px', marginBottom: '50px', color: '#FFB657' }}
        />
        {/* ******************************************OUR-TRUSTED-PARTNER-SECTION*************************************** */}
        <div className='our-trusted-partners'>
          <div className='col-lg-2'>
            <img
              src={link}
              alt='our-trusted-partners Not Found'
              style={{
                width: '126px',
                height: '120px',
              }}
            />
          </div>
          <div className='col-lg-3'>
            <h1 className='text-main-our-trusted-partners'>
              Our Trusted Partners
            </h1>
          </div>
          {/* our partner */}
          <div className='our-partner'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Partner
                width='180px'
                height='80px'
                name='Legal Partner'
                image={Mask}
              />
              <Partner
                width='180px'
                height='80px'
                name='Legal Partner'
                image={Deloitte}
              />
              <Partner
                width='180px'
                height='80px'
                name='Legal Partner'
                image={icibank}
              />
              <Partner
                width='180px'
                height='80px'
                name='Legal Partner'
                image={Universal}
              />
              <Partner
                width='180px'
                height='80px'
                name='Legal Partner'
                image={JLL}
              />
              <Partner
                width='180px'
                height='80px'
                name='Legal Partner'
                image={CRE_Matrix}
              />
            </div>
          </div>
        </div>
        {/* ******************************************WHY hBITS-SECTION*************************************** */}
        <div className='why-hbits-main'>
          <div className='why-hbits col-lg-12'>
            <div className='col-lg-2'>
              <h2 className='work-text'>
                Why{' '}
                <img
                  className='navbar-brand'
                  src={Logo}
                  style={{ height: '40px', width: '50px' }}
                />
                ?
              </h2>
            </div>
            <div className='v1'></div>
            <div className='why-us col-lg-7'>
              We make investing in commercial real estate easy with low ticket
              sizes and <br />
              personalized services online and offline.
            </div>
            <div className='col-lg-3'>
              <Button name='Know More' />
            </div>
          </div>
          <div className='wrapper col-lg-12 col-sm-12'>
            <Flip
              name=' Low Ticket Size '
              cardImage={lowticketsize}
              content='Access to high-quality assets with ticket size of ₹25 lakhs'
            />
            <Flip
              name='Convenience'
              cardImage={clicking}
              content='Distinctive data insights of every property, remotely accessible at any given point'
            />
            <Flip
              name=' Attractive Returns'
              cardImage={sprout}
              content='Rental yields of 8-10% and targeted IRR of 16-20% over 5 years'
            />
            <Flip
              name='Hassle Free Ownership'
              cardImage={key}
              content='Turn key management, rent collection, and property maintenance by our experienced team'
            />
            <Flip
              name='Improved Liquidity'
              cardImage={Cup}
              content='Enjoy seamless exits and continuous price discovery so you always know what your assets are worth'
            />
            <Flip
              name='Transparency'
              cardImage={Eye}
              content='Access to all data and information for easy and secure transactions'
            />
          </div>
        </div>
        {/* ******************************************SELECTION-CRITERIA-FOR-PROPERTY-SECTION*************************************** */}
        <div className='selection-criteria'>
          <div>
            <img
              src={selection}
              alt='Not Found'
              style={{
                width: '100%',
                height: '458px',
              }}
            />
          </div>

          <div>
            <h1
              style={{
                textAlign: 'center',
                marginTop: '-400px',
                color: 'white',
              }}
            >
              Selection Criteria For Property
            </h1>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: ' center',
            }}
          >
            <div>
              <img
                src={Sourcing}
                alt='Not Found'
                style={{
                  width: '83px',
                  height: '270px',
                  marginLeft: '100px',
                }}
              />
            </div>
            <div className=' col-md-3'>
              <h6 style={{ color: 'white', marginLeft: '20px' }}>Sourcing</h6>
              <h6
                style={{
                  color: '#BBCBFF',
                  marginTop: '40px',
                  marginLeft: '20px',
                }}
              >
                Evaluation
              </h6>
              <h6
                style={{
                  color: '#BBCBFF',
                  marginTop: '40px',
                  marginLeft: '20px',
                }}
              >
                Data-Driven & Institutional Grade Analysis
              </h6>
              <h6
                style={{
                  color: '#BBCBFF',
                  marginTop: '40px',
                  marginLeft: '20px',
                }}
              >
                Due-Diligence
              </h6>
              <h6
                style={{
                  color: '#BBCBFF',
                  marginTop: '40px',
                  marginLeft: '20px',
                }}
              >
                Property Listing
              </h6>
            </div>
            <div className=' col-md-3'>
              <img
                src={sourcing1}
                alt='Not Found'
                style={{
                  width: '50%',
                  height: '50%',
                }}
              />
            </div>
            <div className=' col-md-3'>
              <h6 style={{ color: 'white' }}>Sourcing</h6>
              <p style={{ color: 'white' }}>
                Strong sourcing across top 6 cities given long standing
                relationships with developers, IPCs and local brokers.
              </p>
            </div>
          </div>
        </div>
        {/* ******************************************HOW-IT-WORKS-SECTION*************************************** */}
        <div className='how-it-works mb-5' style={{ marginTop: '100px' }}>
          <div className='align-items-center'>
            <div
              className='col-12 col-md-4'
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: ' center',
                margin: '10px',
              }}
            >
              <div>
                <img
                  src={Layer}
                  alt='Not Found'
                  style={{
                    width: '70px',
                    height: '70px',
                    marginRight: '120px',
                  }}
                />
              </div>
              <div className='col-md-7'>
                <h2 className=' text-main'>How it works?</h2>
              </div>
              <div style={{ marginLeft: '-80px', marginRight: '120px' }}>|</div>
              <div
                className='col-md-3'
                style={{
                  marginLeft: '20px',
                }}
              >
                <a href='#' className='text-main'>
                  Know More
                </a>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <WorkCycle image={ChooseProperty} name='Choose Property' />
              <WorkCycle image={Earn} name='Earn' />
              <WorkCycle image={Track} name='Track' />
              <WorkCycle image={Sell} name='Sell' />
            </div>
          </div>
        </div>

        <div className='vedio'>
          <div className='row align-items-center '>
            <div className='col-12 col-md-4 '>
              <ReactPlayer
                url='https://www.youtube.com/embed/h-mN7vxW8AE'
                className='player-wrapper'
              />
            </div>
            <div className='col-12 col-md-8 d-md-block'>
              <div className='vedio-desc'>
                Our CEO explains, how the real-estate sector will change forever
                with Fractional Investment.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
          }}
        >
          <Button name='Know More' />
        </div>

        {/* ******************************************IN-MEDIA-SECTION*************************************** */}
        <div className='who-we-are'>
          <div>
            <img
              src={Layer2}
              alt='Not Found'
              style={{
                width: '70px',
                height: '70px',
                marginRight: '10px',
              }}
            />
          </div>
          <div className='text'>
            <h2> Here From Our Customers</h2>
          </div>
          <div style={{ marginLeft: '20px', marginRight: '140px' }}>|</div>
          <div
            style={{
              marginLeft: '20px',
            }}
          >
            <a href='#' className='text-main'>
              View all Testimonial
            </a>
          </div>
        </div>

        <div className='my-carosel'>
          <Carousel
            transitionTime={1000}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
            swipeable={false}
          >
            <div
              className='col-lg-3'
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <Testimonial
                image={Group16}
                name='Jalpesh Patel'
                designation='Ex-Professor & Yoga Teacher'
                vedio={vedio1}
              />
              <Testimonial
                image={Group16}
                name='Jalpesh Patel'
                designation='Ex-Professor & Yoga Teacher'
                vedio={vedio1}
              />
              <Testimonial
                image={Group16}
                name='Jalpesh Patel'
                designation='Ex-Professor & Yoga Teacher'
                vedio={vedio1}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Testimonial
                image={Group16}
                name='Jalpesh Patel'
                designation='Ex-Professor & Yoga Teacher'
                vedio={vedio1}
              />
              <Testimonial
                image={Group16}
                name='Jalpesh Patel'
                designation='Ex-Professor & Yoga Teacher'
                vedio={vedio1}
              />
              <Testimonial
                image={Group16}
                name='Jalpesh Patel'
                designation='Ex-Professor & Yoga Teacher'
                vedio={vedio1}
              />
            </div>
          </Carousel>
        </div>
        {/* ******************************************MEDIA-SECTION*************************************** */}
        <div className='media'>
          <div>
            <img
              src={media}
              alt='Not Found'
              style={{
                width: '70px',
                height: '70px',
                marginRight: '10px',
              }}
            />
          </div>
          <div className='text'>
            <h2> In Media</h2>
          </div>
          <div style={{ marginLeft: '20px', marginRight: '120px' }}>|</div>
          <div
            style={{
              marginLeft: '20px',
            }}
          >
            <a href='#' className='text-main'>
              View all articles
            </a>
          </div>
        </div>
        <div className='my-carosel'>
          <Carousel
            transitionTime={1000}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
            swipeable={false}
            // style={{ position }}
          >
            <div>
              <img
                src={CNBC}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={EcomomicTimes}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={FinancialExpress}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={HindustanTimes}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={Mint}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
            </div>
            <div>
              <img
                src={CNBC}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={EcomomicTimes}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={FinancialExpress}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={HindustanTimes}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={Mint}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
            </div>
            <div>
              <img
                src={CNBC}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={EcomomicTimes}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={FinancialExpress}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={HindustanTimes}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
              <img
                src={Mint}
                style={{ height: '130px', width: '190px', margin: '15px' }}
              />
            </div>
          </Carousel>
        </div>
        {/* ******************************************OUR-TENANTS-SECTION*************************************** */}
        <div className='our-tenants'>
          <div>
            <img
              src={Home}
              alt='Not Found'
              style={{
                width: '70px',
                height: '70px',
                marginRight: '10px',
              }}
            />
          </div>
          <div className='text'>
            <h2>Our Tenants</h2>
          </div>
          <div style={{ marginLeft: '20px', marginRight: '20px' }}>|</div>
          <div>
            We have served many prominent international tenants including the
            largest cloud kitchen company in the world, second largest container
            shipping company and fourth largest e-payments company listed on a
            global stock exchange.
          </div>
        </div>
        <div className='my-carosel'>
          <Carousel
            interval={1000}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
          >
            <div>
              <img
                src={ICICI}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
              <img
                src={Faasos}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
              <img
                src={Vaante}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
              <img
                src={IIFL_T}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
              <img
                src={CMA_CGM}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
            </div>
            <div>
              <img
                src={CMA_CGM}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
              <img
                src={ingenico}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />

              <img
                src={ingenico}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
              <img
                src={ICICI}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
              <img
                src={Faasos}
                style={{ height: '200px', width: '200px', margin: '5px' }}
              />
            </div>
            <div>
              <img
                src={Vaante}
                style={{ height: '200px', width: '200px', margin: '10px' }}
              />
              <img
                src={IIFL_T}
                style={{ height: '200px', width: '200px', margin: '10px' }}
              />
              <img
                src={ICICI}
                style={{ height: '200px', width: '200px', margin: '10px' }}
              />
              <img
                src={Faasos}
                style={{ height: '200px', width: '200px', margin: '10px' }}
              />
              <img
                src={CMA_CGM}
                style={{ height: '200px', width: '200px', margin: '10px' }}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
