/* eslint-disable react/prop-types */
import React, {useRef} from "react"
import {isMobile} from "react-device-detect"
import { Analytics } from "@vercel/analytics/react"
import Lenis from 'lenis'

import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Window from "./components/Window"
import Loading from "./components/Loading"
import Info from "./components/Info"
import ProjectCard from "./components/ProjectCard"
import Gear5 from "./assets/gear5.png"
import weather from "./assets/weather.png"
import Footer from "./components/Footer"

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

export default function App() {
    const [workPage, setWorkPage] = React.useState(window.location.pathname === '/');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
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
                ?   (<Loading mouseOver={mouseOver} mouseOut={mouseOut} /> )
                :   
                (
                    (workPage) ? <AppWork mouseOver={mouseOver} mouseOut={mouseOut} workPage={workPage} setWorkPage={{setWorkPage}} setLoading={setLoading} /> 
                    : <AppInfo mouseOver={mouseOver} mouseOut={mouseOut} workPage={workPage} setWorkPage={{setWorkPage}} setLoading={setLoading}/>
                )
            }
        </div>
    )
}

function AppWork({mouseOver, mouseOut, workPage, setWorkPage, setLoading}) {
    const projects = [
        {
            title: "GEAR5.info",
            company: "December 23'",
            subtitle: "Reviving classic games for the digital age.",
            classname: "gear5",
            image: Gear5
        },
        {
            title: "Flappy Bird",
            company: "January 24'",
            subtitle: "A Java-powered Flappy Bird adventure.",
            classname: "flappy",
            image: Gear5
        },
        {
            title: "Weather Station",
            company: "January 24'",
            subtitle: "Forecasting with ESP and cloud connectivity.",
            classname: "weather",
            image: weather
        }, 
    ]

    const projectCards = projects.map((project, index) => {
        return (
            <ProjectCard key={index} mouseOver={mouseOver} mouseOut={mouseOut} title={project.title} company={project.company} subtitle={project.subtitle} classname={project.classname} image={project.image}/>
        )
    })

    return (
        <>
            <main>
                <Window mouseOver={mouseOver} mouseOut={mouseOut} />
                <div className="fade-out"></div>
            </main>
            <div className="mobile-hero-hr">
                <div className="glare-top"></div>
            </div>
            <section>
                {projectCards}
            </section>
            <Footer workPage={workPage} setWorkPage={setWorkPage} setLoading={setLoading} />
            <Analytics/>
        </>
    )
}

function AppInfo({mouseOver, mouseOut, workPage, setWorkPage, setLoading}) {
    return (
        <>
            <main>
                <Info mouseOver={mouseOver} mouseOut={mouseOut} />
                <div className="fade-out"></div>
            </main>
            <Footer workPage={workPage} setWorkPage={setWorkPage} setLoading={setLoading} />
        </>
    )
}