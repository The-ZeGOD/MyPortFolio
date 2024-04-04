import { Link } from "react-router-dom"
import "./AboutContent.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="left">
            <h1>Who am I?</h1>
            <p>I am a Full Stack Developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact me</button>
            </Link>
                
            </div>
        

        <div className="right">
            <h1 className="technologies">I know technologies</h1>
            <div className="icons">
                <div className="icon" data-technology="C">
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/c-language-7520719-7197293.png?f=webp&w=256" alt="C Icon" />
                </div>

                <div className="icon" data-technology="C++">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-c-4-226082.png?f=webp&w=256" alt="C++ Icon" />
                </div>

                <div className="icon" data-technology="Linux">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-linux-21-1174928.png?f=webp&w=256" alt="Linux Icon" />
                </div>

                <div className="icon" data-technology="HTML">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp" alt="HTML Icon" />
                </div>
            
                <div className="icon" data-technology="CSS">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256" alt="CSS Icon" />
                </div>

                <div className="icon" data-technology="JavaScript">
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/js-9305882-7694081.png?f=webp&w=256" alt="Js Icon" />
                </div>

                <div className="icon" data-technology="React">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=256" alt="React Icon" />
                </div>

                <div className="icon" data-technology="Node Js">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-1-226034.png?f=webp&w=256" alt="NodeJS Icon" />
                </div>

                <div className="icon" data-technology="MySQL">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-mysql-3521596-2945040.png?f=webp&w=256" alt="MySQL Icon" />
                </div>

                <div className="icon" data-technology="PostgreSQL">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-226047.png?f=webp&w=256" alt="PostgreSql Icon" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutContent