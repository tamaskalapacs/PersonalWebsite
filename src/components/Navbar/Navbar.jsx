import React from 'react'
import { useState, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import './style.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0)
    const location = useLocation();

    const trackSrceenWidth = () => {
        const width = window.innerWidth
        setScreenWidth(width)
        if(width > 800) 
            setOpen(true)
        
    }

    const handleClose = () => {
        if(screenWidth < 800)
            setOpen(false)
    }

    useEffect(()=> {
        trackSrceenWidth();
        window.addEventListener("resize", trackSrceenWidth)
        return () => window.removeEventListener("resize", trackSrceenWidth)
    }, [])

    return (
        <div className = "navbar">
            <div className="nav-wrapper">
                <div className = "list-wrapper">

                    <img src = "https://static.thenounproject.com/png/3527105-200.png" alt = "Menu bar" 
                    style={{ opacity: !open ? 1 : 0 }}
                    onClick = {() => {
                        setOpen(!open)
                    }} />
                    <img src = "https://cdn-icons-png.flaticon.com/512/75/75519.png" alt = "Menu close" 
                    style={{ opacity: open ? 1 : 0 }}
                    onClick = {() =>{
                        setOpen(!open)
                    }} />

                   <ul style = {{ left: open ? "0" : "100vw"}}>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/" && '#4d4afb'/*'#779ecb' 'orangered' '#ff822e'*/}} to="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/about" && '#4d4afb'/*'#779ecb' 'orangered' '#ff822e'*/}} to="/about">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/skills" && '#4d4afb'/*'#779ecb' 'orangered' '#ff822e'*/}} to="/skills">
                                Skills
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/education" && '#4d4afb'/*'#779ecb' 'orangered' '#ff822e'*/}} to="/education">
                                Education
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/projects" && '#4d4afb'/*'#779ecb' 'orangered' '#ff822e'*/}} to="/projects">
                                Projects
                            </Link>
                        </li> 

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/contact" && '#4d4afb'/*'#779ecb'*/}} to="/contact">
                                Contact
                            </Link>
                        </li>

                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Navbar
