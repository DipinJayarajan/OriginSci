import React from 'react'
import './Customers.css'
import CountUp from 'react-countup'

const Customers = () => {
  return (
    <div className='customers'>

      <div className='statsCategory'>
        <h3 className='customerNumber'>
          <span >
            <CountUp start={100} end={1000} duration={3} />
            <span style={{marginLeft: "2px"}}>+</span>
          </span>
        </h3>
        <p className='customerTitle'>Customers</p>
      </div>

      <div className='statsCategory'>
        <h3 className='customerNumber'>
        <span>
            <CountUp start={10} end={50} duration={3} />
            <span style={{marginLeft: "2px"}} >+</span>
          </span>
        </h3>
        <p className='customerTitle'>Delivery</p>
      </div>

      <div className='statsCategory'>
        <h3 className='customerNumber'>
        <span>
            <CountUp start={0} end={10} duration={3} />
            <span style={{marginLeft: "2px"}}>+</span>
          </span>
        </h3>
        <p className='customerTitle'>Our  Presence</p>
      </div>

    </div>
  )
}

export default Customers