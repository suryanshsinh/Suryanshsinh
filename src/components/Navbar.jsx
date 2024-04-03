import React from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter, Route, Link } from "react-router-dom"
import linkImage from "../assets/link.png";
import './navbar.css';

export default function Navbar({workPage, setWorkPage, setLoading}) {
    const [menuBgStyles, setMenuBgStyles] = React.useState( {transform: "translateX(0%) scaleX(100%)"})
    const [menuGlowStyles, setMenuGlowStyles] = React.useState( {transform: "translateX(35px)"} )
    
    const links = [
        {key: 1, link: 'https://linkedin/in/suryanshsinh', text: 'LinkedIn', external: true},
    ]

    const linkItems = links.map((link) => {
            return (
                <a href={link.link} className="link" key={link.key}>
                    <span className="glow"></span>
                    {link.text}
                    {link.external && <img src={linkImage} alt={link.text} />}
                </a>
            )
        }
    )

    React.useEffect(() => {
        setMenuBgStyles({})
        setMenuGlowStyles({})
    }, [workPage])

    React.useEffect(() => {
        setMenuBgStyles({transform: workPage ? "translateX(0%) scaleX(100%)" : "translateX(100%) scaleX(95%)"})
        setMenuGlowStyles({transform: workPage ? "translateX(35px)" : "translateX(127px)"})
    }, [])

    return (
        <nav>
            <div className="fade-in"></div>
            <div className="nav">
                <h1 className="logo">Suryanshsinh Sisodiya</h1>
                <div className="page-menu">
                <CSSTransition 
                    in={workPage}
                    timeout={500}
                    classNames="animate-nav-glow"
                >
                    <div className="nav-glow" style={menuGlowStyles}></div>
                </CSSTransition>
                    <div className="page-buttons">
                        <CSSTransition
                            in={workPage}
                            timeout={500}
                            classNames="animate-page-bg"
                        >
                            <div className="page-button-bg" style={menuBgStyles}></div>
                        </CSSTransition>
                        <Link to="/">
                            <div className="page-button" onClick={() => {setWorkPage(true); setLoading(true)}}>Work</div>
                        </Link>
                        <Link to="/info">
                        <div className="page-button" onClick={() => {setWorkPage(false); setLoading(true)}}>Info</div>
                        </Link>
                    </div>
                </div>
                <div className="links">
                    {linkItems}
                </div>
            </div>
        </nav>
    )
}