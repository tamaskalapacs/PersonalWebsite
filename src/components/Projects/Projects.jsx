import React from 'react'

import Project from './Project/Project'

import projects from '../../projects'

const Projects = () => {
    return (
        <div>
            {
                projects.map((element) => {
                    return(
                        <Project key = {element.id} title = {element.title} description = {element.description} date = {element.date} link = {element.link}/>
                    )
                })
            }

        </div>
    )
}



export default Projects
