import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import  play_img from '../../assets/play.png'
 
function About() {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='about' className='about-img'/>
        <img src={play_img} alt='play' className='play-img'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>we are dedicated to empowering students to reach their fullest potential. </h2>
      <p> was founded in 2009 with the vision of becoming a premier institution of higher education. Over the decades, we have grown to become a [size of university] with a diverse student body, renowned faculty, and state-of-the-art facilities. Our rich history is marked by countless achievements in research, teaching, and community engagement.</p>
      <p>At our campus, we offer a wide range of undergraduate and graduate programs across [number] schools and colleges. Our curriculum is designed to challenge students, encourage interdisciplinary exploration, and prepare them for success in their chosen fields. Our faculty are renowned experts in their disciplines, dedicated to fostering intellectual growth and providing personalized mentorship.</p>
       <p></p>
      </div>

    </div>
  )
}

export default About
