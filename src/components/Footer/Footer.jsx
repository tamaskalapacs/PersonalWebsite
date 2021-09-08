import React from 'react'

import Icon from './Icon/Icon'

import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <Icon link = "https://www.linkedin.com/in/tamas-kalapacs-77791419b/" 
            imgSrc = {`${process.env.PUBLIC_URL}/linkedin.png`}
            imgAlt = "LinkedIn"
            />
            <Icon link = "https://github.com/tamaskalapacs" 
            imgSrc = {`${process.env.PUBLIC_URL}/github.png`}
            imgAlt = "GitHub"
            />
        </div>
    )
}

export default Footer
