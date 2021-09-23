import React from 'react'

import { Skill } from './Skill/Skill'

import './style.css'

const Skills = () => {
    return (
        <div className ="skills">
            <h1>Relevant IT skills</h1>
            <div className = "content">
                <Skill name ="C#" progress = {85}/>
                <Skill name ="SQL" progress = {80}/>
                <Skill name ="GIT" progress = {80}/>
                <Skill name ="html/css" progress = {75}/>
                <Skill name ="React" progress = {70}/>
                <Skill name ="Java" progress = {55}/>
                <Skill name ="Swift" progress = {45}/>
            </div>
            <h1>Other IT skills</h1>
            <div className = "content">
                <Skill name ="Microsft Office" progress = {95}/>
                <Skill name ="Photoshop" progress = {60}/>
                <Skill name ="After Effects" progress = {40}/>
                <Skill name ="Sony vegas pro" progress = {40}/>
            </div>
            <h1>Language Skills</h1>
            <div className = "content">
                <Skill name ="Hungarian" progress = {100}/>
                <Skill name ="English" progress = {90}/>
                <Skill name ="Danish" progress = {10}/>
            </div>
            
        </div>
    )
}

export default Skills
