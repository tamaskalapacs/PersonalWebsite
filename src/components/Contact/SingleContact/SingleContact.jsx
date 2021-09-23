import React from 'react'

import './style.css'

const SingleContact = ({alt, src, info}) => {
    return (
        <div className = "contactWrapper">
            <img src = {src} alt = {alt} />
            <p>:</p>
            <p>{info}</p>
        </div>
    )
}

export default SingleContact
