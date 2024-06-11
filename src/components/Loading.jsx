import React from "react";

export default function Loading({mouseOver, mouseOut}) {
    return (
        <div className="loading">
            <div className="loading-text" onMouseOver={() => {mouseOver(3)}} onMouseOut={mouseOut}>Loading...</div>
            <div className="loading-line"></div>
        </div>
    )
}