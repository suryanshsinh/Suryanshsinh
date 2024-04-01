import React from "react";
import HeroText from "./HeroText";
import "./window.css";

export default function Window() {
    return (
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
                    <HeroText />
                    <div className="subtitles">
                        <h3 className="subtitle">First-year IT student at LJ Univeersity.</h3>
                        <h3 className="subtitle">Based in Ahmedabad, Gujarat.</h3>
                    </div>
                    {/* <div className="scroll-indicator">
                        <div className="scroll-wheel">
                            <div className="scroll-handle"></div>
                        </div>
                    </div> */}
                </div>

            </div>

        </div>
    )
}