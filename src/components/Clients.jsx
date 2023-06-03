import React from 'react'
import './Clients.css'
import one from "../assets/image41.png"
import two from "../assets/image40.png"
import three from "../assets/image39.png"
import four from "../assets/image38.png"
import five from "../assets/image37.png"
import six from "../assets/image35.png"
import seven from "../assets/image34.png"
import eight from "../assets/image33.png"
import nine from "../assets/image32.png"
import Marquee from 'react-fast-marquee'

const Clients = () => {
  return (
    <section className='clientMain'>
       
        
            <div className="pic-container">
              <Marquee gradient={false} pauseOnHover={true} speed={40} direction='right' >
                <div className='image_wrapper'>
                    <img src={one} alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={two} alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={three} alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={four} alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={ five } alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={six} alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={seven} alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={eight} alt="img"/>
                </div>
                <div className='image_wrapper'>
                    <img src={nine} alt="img"/>
                </div>
              </Marquee>
            </div>
        
    </section>
  )
}

export default Clients