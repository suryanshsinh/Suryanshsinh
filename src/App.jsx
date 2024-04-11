import React, {useRef} from "react"
import {isMobile} from "react-device-detect"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Window from "./components/Window"
import HeroText from "./components/HeroText"
import Loading from "./components/Loading"
import Info from "./components/Info"
import ProjectCard from "./components/ProjectCard"


export default function App() {
    const [workPage, setWorkPage] = React.useState(window.location.pathname === '/');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [loading]);

    const cursor = useRef(null);
    const cursorLarge = useRef(false);

    const mouseOver = (scale) => {
        cursorLarge.current = true;
        cursor.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    const mouseOut = () => {
        cursorLarge.current = false;
        cursor.current.style.transform = `translate(-50%, -50%) scale(1)`;
    };

    return (
        <div className="app">
            {!isMobile && <Cursor cursor={cursor} mouseOver={mouseOver} mouseOut={mouseOut} />}
            <div className="glare-top"></div>       
            <Navbar workPage={workPage} setWorkPage={setWorkPage} setLoading={setLoading} mouseOver={mouseOver} mouseOut={mouseOut}/>
            {
                (loading) 
                ?   (<Loading /> )
                :   
                (
                    (workPage) ? <AppWork mouseOver={mouseOver} mouseOut={mouseOut} /> : <AppInfo />
                )
            }
        </div>
    )
}

function AppWork({mouseOver, mouseOut}) {
    return (
        <>
            <main>
                <Window mouseOver={mouseOver} mouseOut={mouseOut} />
                <div className="fade-out"></div>
            </main>
            <section>
                <ProjectCard mouseOver={mouseOver} mouseOut={mouseOut} title="GEAR5.info" company="December 23'" subtitle="Reviving classic games for the digital age."/>
            </section>
        </>
    )
}

function AppInfo({mouseOver, mouseOut}) {
    return (
        <main>
            <Info />
            <div className="fade-out"></div>
        </main>
    )
}