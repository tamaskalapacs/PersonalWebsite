import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import {ReactComponent as SchoolIcon} from './school.svg'
import {ReactComponent as WorkIcon} from './work.svg'

import "react-vertical-timeline-component/style.min.css"

import timelineElements from "../../timelineElements"

import './style.css'

const Education = () => {
    let workIconStyles = {background: "#fbd24a"}
    let schoolIconStyles = {background: "#fb794a"}

    return (
        <div className = "education">
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isSchoolIcon = element.icon === "school"
                        return ( 
                            <VerticalTimelineElement
                            key = {element.id}
                            date = {element.date}
                            dateClassName="date"
                            iconStyle = {isSchoolIcon ? schoolIconStyles : workIconStyles}
                            icon = {isSchoolIcon ? <SchoolIcon/> : <WorkIcon/>}>
                                <h3 className = "vertical-timeline-element-title">{element.title}</h3>
                                <h5 className = "vertical-timeleine-elemnt-subtitle">{element.location}</h5>
                                <p id = "description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Education
