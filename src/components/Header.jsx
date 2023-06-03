import React, { useState } from 'react'
import "./Header.css"
// import logo from "../assets/OriginSci.png"
import Logo from "../assets/Logo.svg"
import call from "../assets/Call.png"
import message from "../assets/Message.png"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"
import {BiCopy} from "react-icons/bi"

const Header = () => {

    const [show, setShow] = useState(false);

  return (
    <div className='main-nav'>

        {/* left */}
        <div className='logo'>
            <img 
            src={Logo}
            alt='logo'
            className='logo-img'
            />
        </div>

        {/* right */}

        <div className='contactUs'>
        <button onClick={() => setShow(!show)}
        >
            
            
            {
                show ? 
                <div
                style={{display: "flex" , flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "5px"}}>
                    <AiOutlineCloseCircle size={22} />
                    <p style={{fontSize: "16px"}}>Close</p>
                </div> 

                 : 
                
                 'Contact Us'
            }
            
        </button>

        <AnimatePresence>

        {
            show && (
                <motion.div 
                initial={{opacity: 0, y: "-50%"}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: "-50", transition: {duration: 1}}}
                transition={{type:"spring",stiffness:"70", duration: 1}}

                className='contactUs-form'>

                    {/* top */}
                    <div className='contactFormEmail'>
                    <img 
                    src={message}
                    alt='message'
                    />
                    <span className='topTwo'>
                    <p className='contact-title'>Chat to Sales</p>
                    <p className='contact-details'>Speak to our friendly team</p>
                    </span>
                    <span className='emailDisplay'>
                    <p className='contacts' style={{textDecoration: "underline", textDecorationThickness: "1px", paddingBottom: "5px"}}>prasad@originsci.com</p>
                    </span>
                    </div>

                    {/* bottom */}

                    <div className='contactFormPhone'>
                    <img 
                    src={call}
                    alt='message'
                    />
                    <span className='topTwo'>
                    <p className='contact-title'>Call Us</p>
                    <p className='contact-details' >Mon-Fri from 8am to 5pm</p>
                    </span>
                    <span className='emailDisplay'>
                    <p className='contacts'>+91-7666912020</p>
                    <p className='contacts'>022-40120871</p>
                    </span>
                    </div>

                </motion.div>
            )
        }
        </AnimatePresence>


        </div>
        
    </div>
  )
}

export default Header