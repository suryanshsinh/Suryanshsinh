import React from "react";
import HeroText from "./HeroText";
import "./window.css";

export default function Window({mouseOver, mouseOut}) {
    return (<>
        <div className="window-outline">
            <div className="glare-top"></div>

            <div className="window">

                <div className="glare-top"></div>
                <div className="title-bar">
                    <div className="title-bar-buttons">
                        <div className="button red"></div>
                        <div className="button yellow"></div>
                        <div className="button green"></div>
                    </div>
                </div>
                <div className="window-content">
                    <HeroText mouseOver={mouseOver} mouseOut={mouseOut}/>
                    <div className="subtitles">
                        <h3 className="subtitle" onMouseOver={() => {mouseOver(3)}} onMouseOut={mouseOut}>First-year IT student at LJ University.</h3>
                        <h3 className="subtitle" onMouseOver={() => {mouseOver(3)}} onMouseOut={mouseOut}>Based in Ahmedabad, Gujarat.</h3>
                    </div>
                </div>

            </div>

        </div>
        
        <div className="mobile-window">
            <h3 className="hero-name"><div className="hero-name-dot"></div>Suryanshsinh Sisodiya</h3>
            <HeroText />
            <div className="subtitles">
                <h3 className="subtitle">First-year IT student at LJ University.</h3>
                <h3 className="subtitle">Based in Ahmedabad, Gujarat.</h3>
            </div>
        </div>
        </>
    )
}