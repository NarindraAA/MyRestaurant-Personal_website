import React, {useEffect} from "react";
import "./home.css"
import video from "../../Assets/vid2.mp4";
import { FaSearchLocation ,FaFilter, 
FaFacebook, FaInstagram, FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {

    //code react hook animation scroll
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Heaven on earth
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Restaurants
                    </h1>
                </div>


                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your restaurant:
                        </label>
                        <div className="input flex">
                            <input type="text" 
                            placeholder='Enter name here.....'/>
                            <FaSearchLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Search your date:
                        </label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price: 
                            </label>
                            <h3 className="total"> Rp.1.000.000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="1000000" min="50000"/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <FaFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>

                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaInstagram className="icon"/>
                        <FaFacebook className="icon"/>
                    </div>
                    <div className="leftIcons">
                        <FaListUl className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Home