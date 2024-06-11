import React from "react";
import "./info.css";

export default function Info({mouseOver, mouseOut}) {
    return (
        <div className="info" onMouseOver={() => {mouseOver(1.1)}} onMouseOut={mouseOut}>
        <div className="glare-top"></div>
            <div className="info-outline">
            <div className="glare-top"></div>
                <div className="pfp-outline">
                    <div className="pfp"></div>
                </div>
            </div>
        </div>
    )
}