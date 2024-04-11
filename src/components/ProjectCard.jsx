import React from "react"
import RightArrow from "../assets/right-arrow.svg"
import './projectcard.css'
import './window.css'

export default function ProjectCard({title, classname, subtitle, company, image, mouseOver, mouseOut}) {
    return (
        <a className="window-outline project-window" href="gear5">
            <div className="glare-top"></div>
            <div className="window project" onMouseOver={() => {mouseOver(4)}} onMouseOut={mouseOut}>
                <div className={"radial-bg-effect "+classname}></div>
                <div className="glare-top"></div>
                <div className="projectcard-heading">
                    <div className="title">
                        <h1>{title}</h1>
                        {<img src={RightArrow} alt="right-arrow" className="right-arrow" />}
                    </div>
                    <div className="projectcard-description">
                        <span className="projectcard-company">{company}</span>
                        {" - " + subtitle}
                    </div>
                </div>
                <img className="projectcard-image" src={image}/>
            </div>
        </a>
    )
}