import React from "react"
import RightArrow from "../assets/right-arrow.svg"
import './projectcard.css'
import './window.css'

export default function ProjectCard(props) {
    return (
        <div className="window-outline work-window">
            <div className="glare-top"></div>   
            <div className="window project">
                <div className="glare-top"></div>   
                <div className="title">
                    <h1>{props.title}</h1>
                    {<img src={RightArrow} alt="right-arrow" className="right-arrow" />}
                </div>
            </div>
        </div>
    )
}