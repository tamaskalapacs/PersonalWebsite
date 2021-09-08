import React from 'react'

import './style.css'

const Icon = ({link, imgSrc, imgAlt}) => {
    return (
        <div className="icon">
            <a href = {link} target = "_blank">
                <img src={imgSrc} alt = {imgAlt}/>
            </a>
        </div>
    )
}

export default Icon
