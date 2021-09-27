import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am 
                        <span style={{color: '#fbd24a'}}> Tamás</span>,
                    </p>
                    <p>Sofware Developer</p>
                </h1>
                <Link to = "/about">
                    <button>More Info</button>
                </Link>
            </div>
            {/* <div className="profilePicture"> */}
                <img 
                src = {`${process.env.PUBLIC_URL}/images/profilepic.jpg`}
                alt = "person"
                />
            {/* </div> */}
        </div>
    )
}

export default Home
