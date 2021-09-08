import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am Tamás,</p>
                    <p>Sofware Developer</p>
                </h1>
                <Link to = "/about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="profilePicture">
                <img 
                src = {`${process.env.PUBLIC_URL}/cv_temp.jpg`}
                alt = "person"
                />
            </div>
        </div>
    )
}

export default Home
