import React from 'react';
import image from '../assets/moon-4.png';


function Hero() {
  return (
    <div className='hero'>
        <div>
            <h1>Noah Weaver</h1>
            <h3>Software Developer</h3>
        </div>
        <img alt="moon" src={image} />
    </div>
  )
}

export default Hero