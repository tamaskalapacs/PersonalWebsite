import React from 'react'

import SingleContact from './SingleContact/SingleContact'

import './style.css'

const Contact = () => {
    return (
        <div className = "contact">
            <iframe
            title = "map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2171.477014154045!2d9.896092016125273!3d57.02625900052408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464933aacd1a5231%3A0x86c3f4dcb8f9c99f!2sRevlingbakken%2C%209000%20Aalborg!5e0!3m2!1shu!2sdk!4v1632397164308!5m2!1shu!2sdk" 
            frameBorder= "0"
            allowFullScreen = ""
            aria-hidden = "false"
            tabIndex = "0"/>
            
            <div className = "infoContainer">
                <SingleContact src = {`${process.env.PUBLIC_URL}/images/phone.svg`} alt ="Phone:" info = "+45 91 81 24 21"/>
                <SingleContact src = {`${process.env.PUBLIC_URL}/images/mail.svg`} alt ="Email:" info = "kalapacs.tamas@gmail.com"/>
                <SingleContact src = {`${process.env.PUBLIC_URL}/images/home.svg`} alt ="Address:" info = "9000 Aalborg"/>

            </div>
        </div>
    )
}

export default Contact
