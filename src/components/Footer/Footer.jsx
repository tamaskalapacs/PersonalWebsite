import React from 'react'

import Icon from './Icon/Icon'

import {AiFillLinkedin} from "react-icons/ai"

import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <Icon link = "https://www.linkedin.com/in/tamas-kalapacs-77791419b/" 
            imgSrc = {`${process.env.PUBLIC_URL}/images/linkedin.svg`}
            imgAlt = "LinkedIn"
            />
            <Icon link = "https://github.com/tamaskalapacs" 
            imgSrc = {`${process.env.PUBLIC_URL}/images/github.svg`}
            imgAlt = "GitHub"
            />
            
        </div>
    )
}




export default Footer
