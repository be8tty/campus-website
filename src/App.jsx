import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero';
import Programs from "./Components/Programs/programs.jsx";
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';

const App=()=>{
    return(
        <div>
       <Navbar/>
          <Hero/>
          <div className='container'>
            <Title subTitle='Our Program'title='What We Offer'/>
          <Programs/>
         <About/>
         <Title subTitle='Gallery' title='Campus Photos'/>
         <Campus/>
         <title subTitle='Testimonials' title='what our students says'></title>
         <Testimonials/>
            </div> 
        </div>
   )
}
export default App;