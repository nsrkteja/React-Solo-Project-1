import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return (
        <div className="footer">
            <FontAwesomeIcon icon={ faSquareTwitter } className="icon"/>
            <FontAwesomeIcon icon={ faSquareFacebook } className="icon"/>
            <FontAwesomeIcon icon={ faSquareInstagram } className="icon"/>
            <FontAwesomeIcon icon={ faSquareGithub } className="icon"/>
        </div>
    )
}

export default Footer