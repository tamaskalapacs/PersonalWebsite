import React from 'react'

import './style.css'

const Project = ({title, description, link, date}) => {
    return (
        <div className="project">
            <h1>{title}</h1>
            <h5>{date}</h5>
            <p>{description}</p>
            <div className="icon" style = {{ display: link ? "" : "none"}}>
                <a href = {link} target = "_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt = "github"/>
                </a>
            </div>
        </div>
    )
}

export default Project
