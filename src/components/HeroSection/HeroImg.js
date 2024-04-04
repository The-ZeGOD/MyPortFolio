import "./HeroImg.css"

import React from 'react'
import IntroImg from "../../assets/3d-rendering-kid-playing-digital-game.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-image" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>Hi, I am Nirmal Gupta</p>
                <h1>I am a developer</h1>
                <div>
                    <Link to="/project" className="btn">PROJECTS</Link>
                    <Link to="/contact" className="btn btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg