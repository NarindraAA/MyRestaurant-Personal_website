import React, {useState} from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navbar.css";

const Navbar = () =>{
    const [active, setActiv] = useState('navBar')
//function toogle activ
    const showNav = () => {
        setActiv('navBar activeNavbar')
    }
// function close navbar
    const removeNavbar = ()=>{
        setActiv('navBar')
    }

    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <MdRestaurantMenu />
                            Restaurants.
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Restaurants</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className='btn'>
                            <a href="#">Reserve Now</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar}
                    className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
                
                <div onClick={showNav} 
                className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar