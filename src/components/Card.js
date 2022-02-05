import React from 'react'

function Card(props) {
  return (
    <>
      <div className='card'>
        <div className='info-card'>
          <img className='card-image' src={props.image} alt='not found' />
          <div className='card-title'>{props.price}</div>
          <span className=' card-text'>{props.name}</span>
        </div>
        {/* <div>
          <p>&gt;</p>
        </div> */}
      </div>
    </>
  )
}

export default Card

// import React from 'react'
// import Group24 from '../Images/Group24.png'
// import Iconfeathercalendar from '../Images/Iconfeathercalendar.png'
// import worksuitcase from '../Images/worksuitcase.png'

// export default function WhoWeAre() {
//   return (
//     <div className='col-md-12 col-lg-6'>
//       <div className='info-card-wrapper'>
//         <div className='card'>
//           <div className='info-card'>
//             <div>
//               <img className='card-image' src={Group24} alt='not found' />
//             </div>
//             <div className='card-title'>₹3,000+ Crore</div>
//             <span className=' card-text'>Assets Managed</span>
//           </div>
//         </div>
//         <div className='card'>
//           <div className='info-card'>
//             <div>
//               <img
//                 className='card-image'
//                 src={Iconfeathercalendar}
//                 alt='not found'
//               />
//             </div>
//             <div className='card-title'>₹3,000+ Crore</div>
//             <span className=' card-text'>Assets Managed</span>
//           </div>
//         </div>
//         <div className='card'>
//           <div className='info-card'>
//             <div>
//               <img className='card-image' src={worksuitcase} alt='not found' />
//             </div>
//             <div className='card-title'>₹3,000+ Crore</div>
//             <span className=' card-text'>Assets Managed</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
