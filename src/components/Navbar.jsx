import React from "react";
import { CSSTransition } from "react-transition-group";
import linkImage from "../assets/link.png";
import './navbar.css';

export default function Navbar({workPage, setWorkPage}) {
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
            <div className="nav">
                <h1 className="logo">Suryanshsinh Sisodiya</h1>
                <div className="page-menu">
                <CSSTransition 
                    in={workPage}
                    timeout={500}
                    classNames="animate-nav-glow"
                >
                    <div className="nav-glow"></div>
                </CSSTransition>
                    <div className="page-buttons">
                        <div className="page-button work" onClick={() => setWorkPage(true)} style={{background: workPage ? "rgba(242, 242, 242, 0.1)" : "none"}}>Work</div>
                        <div className="page-button info" onClick={() => setWorkPage(false)} style={{background: workPage ? "none" : "rgba(242, 242, 242, 0.1)"}}>Info</div>
                    </div>
                </div>
                <div className="links">
                    {linkItems}
                </div>
            </div>
        </nav>
    )
}