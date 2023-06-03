import React, { useState } from 'react'
import './Hero.css'
import Customers from './Customers'
// import { BsArrowUpRight } from 'react-icons/bs'
import Underdevelopment from "../assets/UnderDevelopment.png"
 
const Hero = () => {

  // const [ isShown, setIsShown ] = useState(false)

  return (
    <div className='mainHero'>

      {/* left */}
      <div className='leftHero'>
        <h1 className='leftHero-text'>
        Transform Your Lab With High-Quality Chemicals
        </h1>
        <p className='leftHero-description'>
        A well determined positive approach and a steady growth rate have enabled us to expand our area of operation and gained us a wide client base.
        </p>
        <div className="input-group">
        <input type="email" className="input" id="Email" name="Email" placeholder="Your Email ID" autocomplete="off"/>
        {/* <input className="button--submit" value="Get In Touch" type="submit"/> */}
        <a className="buttonSubmit" href='mailto:team@originsci.com'>Get In Touch</a>
        </div>


        {/* Comapany Stats */}

        <Customers />


      </div>

      {/* Circle */}

      <div 
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
        className="circle-container"
      >
      {/* <div className="circle"
      >
        <BsArrowUpRight className="arrow-icon" style={{color: "white", fontSize: "40px"}} />
      </div> */}

      <img
      
      src={Underdevelopment}
      alt='UnderDevelopment'
      style={{height: "100px", width: "110"}}
       />

      {/* {
        isShown && (
          <span>
            Stay tuned for our new updates 🥳
          </span>
        )
      } */}
        </div>
      {/* <p className="circle-text">
        <span>
          Under 
        </span>
        <span>
        Development
        </span>
      </p> */}
    

      {/* right */}
      <div className='rightHero'>

        {/* implementing a map and setting the location of the company in it */}
        <div className='map'>
          {/* <h3>Map for time being</h3> */}
          
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2140180390156!2d72.92958807490635!3d19.142106849894503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c79477e6abe5%3A0x34c012a2c9e7aea4!2sEastern%20Business%20District!5e0!3m2!1sen!2sin!4v1681545872413!5m2!1sen!2sin" 
          width="600" 
          height="887px" 
          className='map-iframe'
          allowfullscreen="" 
          style={{border: "0"}}
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          
          </iframe>
        </div>

      </div>

    </div>
  )
}

export default Hero