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
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/" && '#fbd24a'}} to="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/about" && '#fbd24a'}} to="/about">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/skills" && '#fbd24a'}} to="/skills">
                                Skills
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/education" && '#fbd24a'}} to="/education">
                                Education
                            </Link>
                        </li>

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/projects" && '#fbd24a'}} to="/projects">
                                Projects
                            </Link>
                        </li> 

                        <li>
                            <Link onClick = {handleClose} style = {{color: location.pathname === "/contact" && '#fbd24a'}} to="/contact">
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
