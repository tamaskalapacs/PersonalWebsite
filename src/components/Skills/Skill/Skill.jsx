import React from 'react'

import ProgressBar from "@ramonak/react-progress-bar";

import './style.css'

export const Skill = ({name, progress}) => {
    return (
        <div className="skillContainer">
            <p>{name}:</p> 
            <ProgressBar className="progressBar" completed = {progress} width = "250px" labelSize = "0px" bgColor = {progress > 60 ? "#4d4afb" : "#fb794a"}/>
        </div>
    )
}
