import React from 'react'
import './Campus.css'
import g1 from '../../assets/g1.png';
import g2 from '../../assets/g2.png';
import g3 from '../../assets/g3.png';
// import g4 from '../../assets/g4.png';


const Campus = () => {
  return (
    <div className='campus'>
      <div className='Gallery'>
        <img src={g1}alt='g1'className='g1'/>
        <img src={g2}alt='g2'className='g2'/>
        <img src={g3}alt='g3'className='g3'/>
        {/* <img src={g4}alt='g4'className='g4'/> */}

      </div>
      <button className='btn'>See More Here</button>
    </div>
  )
}

export default Campus
