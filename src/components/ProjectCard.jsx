import React from "react"
import RightArrow from "../assets/right-arrow.svg"
import './projectcard.css'
import './window.css'

export default function ProjectCard(props) {
    return (
        <a className="window-outline work-window" href="gear5">
            <div className="glare-top"></div>   
            <div className="window project">
                <div className="radial-bg-effect"></div>
                <div className="glare-top"></div>   
                <div className="projectcard-heading">
                    <div className="title">
                        <h1>{props.title}</h1>
                        {<img src={RightArrow} alt="right-arrow" className="right-arrow" />}
                    </div>
                    <div className="projectcard-description">
                        <span className="projectcard-company">{props.company}</span>
                        {" - " + props.subtitle}
                    </div>
                </div>
                <div className="projectcard-image">
                </div>
            </div>
        </a>
    )
}