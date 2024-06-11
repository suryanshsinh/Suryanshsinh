/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom"
import { links } from './links'
import linkImage from "../assets/link.png";
import { CSSTransition } from "react-transition-group";
import './navbar.css';

export default function Navbar({workPage, setWorkPage, setLoading, mouseOver, mouseOut}) {
    const [menuBgStyles, setMenuBgStyles] = React.useState( {transform: "translateX(0%) scaleX(100%)"})
    const [menuGlowStyles, setMenuGlowStyles] = React.useState( {transform: "translateX(35px)"} )
    const [mobilePopup, setMobilePopup] = React.useState(false)

    const linkItems = links.map((link) => {
            return (
                <a target={link.external && "_blank"} href={link.link} className="link" key={link.key} onMouseOver={() => {mouseOver(2)}} onMouseOut={mouseOut}>
                    <span className="link-glow"></span>
                    {link.text}
                    {link.external && <img className="external-link-arrow" src={linkImage} alt={link.text} />}
                </a>
            )
        }
    )    
    const mobileLinkItems = links.map((link) => {
            return (
                <a href={link.link} target={link.external && "_blank"} className="mobile-link" key={link.key}>
                    {link.text}
                    {link.external && <img className="external-link-arrow" src={linkImage}/>}
                </a>
            )
        }
    )

    React.useEffect(() => {
        setMenuBgStyles({})
        setMenuGlowStyles({})
    }, [workPage])

    React.useEffect(() => {
        setMenuBgStyles({transform: workPage ? "translateX(0%) scaleX(100%)" : "translateX(98%) scaleX(90%)"})
        setMenuGlowStyles({transform: workPage ? "translateX(35px)" : "translateX(128px)"})
    }, [])

    return (
        <nav>
            <div className="fade-in"></div>
            <div className="nav">
                <h1 className="logo"><span onMouseOver={() => {mouseOver(5)}} onMouseOut={mouseOut}>Suryanshsinh Sisodiya</span></h1>
                <h1 className="logo logo-2"><span onMouseOver={() => {mouseOver(2)}} onMouseOut={mouseOut}>S. Sisodiya</span></h1>
                <h1 className="logo logo-3"><span onMouseOver={() => {mouseOver(2)}} onMouseOut={mouseOut}>S.</span></h1>
                <div className="menu">
                    <div className="page-menu">
                        <CSSTransition 
                            in={workPage}
                            timeout={500}
                            classNames="animate-nav-glow"
                        >
                            <div className="nav-glow" style={menuGlowStyles}></div>
                        </CSSTransition>
                        <div className="page-buttons" onMouseOver={() => {mouseOver(3)}} onMouseOut={mouseOut}>
                            <CSSTransition
                                in={workPage}
                                timeout={500}
                                classNames="animate-page-bg"
                            >
                                <div className="page-button-bg" style={menuBgStyles}></div>
                            </CSSTransition>
                            <Link to="/">
                                <div className="page-button" onClick={() => {!workPage && setWorkPage(true); !workPage && setLoading(true)}}>Work</div>
                            </Link>
                            <Link to="/info">
                                <div className="page-button" onClick={() => {workPage && setWorkPage(false); workPage && setLoading(true);}}>Info</div>
                            </Link>
                        </div>
                    </div>
                    <div className="hamburger" onClick={() => setMobilePopup(prev => !prev)} onMouseOver={() => {mouseOver(3)}} onMouseOut={mouseOut}>
                        <CSSTransition
                            in={!mobilePopup}
                            timeout={500}
                            classNames="animate-hamburger-line-1"
                        >
                            <div className="line line-1"></div>
                        </CSSTransition>
                        <CSSTransition
                            in={!mobilePopup}
                            timeout={500}
                            classNames="animate-hamburger-line-2"
                        >
                            <div className="line line-2"></div>
                        </CSSTransition>
                        <CSSTransition
                            in={!mobilePopup}
                            timeout={500}
                            classNames="animate-hamburger-line-3"
                        >
                            <div className="line line-3"></div>
                        </CSSTransition>
                        <CSSTransition
                            in={mobilePopup}
                            timeout={500}
                            classNames="animate-popup"
                        >
                            <div className="popup" onClick={(e) => e.stopPropagation()}>
                                {mobileLinkItems}
                            </div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="links">
                    {linkItems}
                </div>
            </div>
        </nav>
    )
}