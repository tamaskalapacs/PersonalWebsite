import React from 'react'

import './style.css'

const Project = ({title, description, link}) => {
    return (
        <div className="project">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="icon" style = {{ display: link ? "" : "none"}}>
                <a href = {link} target = "_blank">
                    <img src={`${process.env.PUBLIC_URL}/github.png`} alt = "github"/>
                </a>
            </div>
        </div>
    )
}

export default Project
