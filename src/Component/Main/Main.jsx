import React, {useEffect} from "react"
import "./main.css"
import {MdOutlineLocationOn} from "react-icons/md";
import {FaGlassCheers} from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css'

//import img
import img from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"

const Data =[
    {
        id:1,
        imgSrc:img,
        destTitle: 'Dahar lurd',
        location:'Surabaya',
        grade:'Traditional Feels',
        fees:'Rp200.000',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },

    {
        id:2,
        imgSrc:img2,
        destTitle: 'Porrlow',
        location:'Malang',
        grade:'Private Feels',
        fees:'Rp600.000',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },

    {
        id:3,
        imgSrc:img3,
        destTitle: 'Foodies',
        location:'Jakarta',
        grade:'Modern West',
        fees:'Rp850.000',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle: 'GrillFat',
        location:'Bandung',
        grade:'Grill & Eat',
        fees:'Rp350.000',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id:5,
        imgSrc:img5,
        destTitle: 'Glory Bar',
        location:'Jakarta',
        grade:'Luxury Feels',
        fees:'Rp1.000.000',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id:6,
        imgSrc:img6,
        destTitle: 'Food Diary',
        location:'Malang',
        grade:'Simple Modern',
        fees:'Rp600.000',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

const Main = () => {

    //code react hook animation scroll
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="main container section">
            
            <div className="secTitle">
            {/* h3 data-aos="fade-right" */}
                <h3 className="title">
                    Most Visited Restaurant
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, 
                    location, grade, fees, description})=>
                    {
                        {/* singleDestination data-aos="fade-up" */}
                        return(
                            
                            <div key={id} className="singleDestination">
                                <div className="cardInfo">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <MdOutlineLocationOn className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <div className="place_btn">
                                        <button className="btn flex">
                                            DETAILS <FaGlassCheers className="icon"/>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}

export default Main