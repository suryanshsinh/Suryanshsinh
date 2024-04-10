import React from "react";

export default function Hero({mouseOver, mouseOut}) {
    return (
        <div className="hero">
            <div className="heading heading1" onMouseOver={() => {mouseOver(7)}} onMouseOut={mouseOut}>Passionate about digital crafting,</div>
            <div className="word-carousel">
                <div className="heading" onMouseOver={() => {mouseOver(7)}} onMouseOut={mouseOut}>I am a </div>
                <div className="words" onMouseOver={() => {mouseOver(7)}} onMouseOut={mouseOut}>
                    <div className="word">Developer.</div>
                    <div className="word">Designer.</div>
                    <div className="word">Creator.</div>
                    <div className="word">Developer.</div>
                </div>
            </div>
        </div>
    )
}