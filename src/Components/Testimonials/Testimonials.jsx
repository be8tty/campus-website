import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-btn.png';
import back_icon from '../../assets/back-btn.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next_btn'/>
      <img src={back_icon} alt='' className='back_btn'/>
    <div className='slider'>
      <ul>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_1} alt='user_1' className='user_1'/>
            <div>
              <h3>Helen Alemayehu</h3>
              <span>AASTU,Ethiopia</span>
            </div>
            </div>
          <p>hellllllooo...</p>  
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_2} alt='user_1' className='user_1'/>
            <div>
              <h3>Helen Alemayehu</h3>
              <span>AASTU,Ethiopia</span>
            </div>
            </div>
          <p>hellllllooo...</p>  
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_3} alt='user_1' className='user_1'/>
            <div>
              <h3>Helen Alemayehu</h3>
              <span>AASTU,Ethiopia</span>
            </div>
            </div>
          <p>hellllllooo...</p>  
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_4} alt='user_1' className='user_1'/>
            <div>
              <h3>Helen Alemayehu</h3>
              <span>AASTU,Ethiopia</span>
            </div>
            </div>
          <p>hellllllooo...</p>  
          </div>
        </li>
      </ul>

    </div>
    </div>
  )
}

export default Testimonials;
