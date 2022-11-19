import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Info(){
    return (
        <div className="info">
            <img src="https://t4.ftcdn.net/jpg/03/12/00/33/360_F_312003378_ugkvfeH1D9hBKpKUh4x9wMk2Ohom5vDq.jpg" className="img"/>
            <h1>Alex</h1>
            <h3>FrontEnd Developer</h3>
            <p>alex.com</p>
            <div className="btns">
            <button className="btn"><FontAwesomeIcon icon={faEnvelope} className="icon"/>Email</button>
            <button className="btn"><FontAwesomeIcon icon={faLinkedin} className="icon"/>LinkedIn</button>
            </div>
        </div>
    )
}

export default Info