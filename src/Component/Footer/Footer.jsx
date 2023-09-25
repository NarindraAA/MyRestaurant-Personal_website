import React, {useEffect} from "react";
import "./footer.css"
import video2 from "../../Assets/vid1.mp4";
import {FaPaperPlane} from "react-icons/fa";
import {MdOutlineFoodBank} from "react-icons/md";
import {FaInstagram, FaFacebook} from "react-icons/fa";


import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    //code react hook animation scroll
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted 
                type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Reserve a place with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter 
                        Email Address'/>
                        <button data-aos="fade-up" className="btn flex" type="submit">
                           SEND <FaPaperPlane className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineFoodBank className="icon"/> Eat & Drink.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                            <FaInstagram className="icon"/>
                            <FaFacebook className="icon"/>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST WAYS RESERVE RESTAURANTS</small>
                        <small>COPYRIGHTS RESERVED - NARINDRA 2023</small>
                    </div>
                </div>

                
            </div>

        </section>
    )
}

export default Footer