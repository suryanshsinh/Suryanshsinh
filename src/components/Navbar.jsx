import React from "react";
import linkImage from "../assets/link.png";
import './navbar.css';

export default function Navbar() {
    const links = [
        {link: 'https://linkedin/in/suryanshsinh', text: 'LinkedIn', external: true},
    ]

    const linkItems = links.map((link) => {
            return (
                <a href={link.link} className="link">
                    <span className="glow"></span>
                    {link.text}
                    {link.external && <img src={linkImage} alt={link.text} />}
                </a>
            )
        }
    )

    return (
        <nav>
            <h1 className="logo">Suryanshsinh <span>Sisodiya</span></h1>
            <div className="links">
                {linkItems}
            </div>
        </nav>
    )
}