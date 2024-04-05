import React from "react"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Window from "./components/Window"
import HeroText from "./components/HeroText"
import Loading from "./components/Loading"
import Info from "./components/Info"
import ProjectCard from "./components/ProjectCard"


function AppWork() {
    return (
        <>
            <main>
                <Window />
                <div className="fade-out"></div>
                <div className="mobile-window">
                    <HeroText />
                    <div className="subtitles">
                        <h3 className="subtitle">First-year IT student at LJ Univeersity.</h3>
                        <h3 className="subtitle">Based in Ahmedabad, Gujarat.</h3>
                    </div>
                </div>
            </main>
            <section>
                <ProjectCard title="GEAR5.info" company="December 23'" subtitle="Reviving classic games for the digital age."/>
            </section>
        </>
    )
}

function AppInfo() {
    return (
        <main>
            <Info />
            <div className="fade-out"></div>
        </main>
    )
}


export default function App() {
    const [workPage, setWorkPage] = React.useState(window.location.pathname === '/');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [loading]);

    return (
        <div className="app">
            <div className="glare-top"></div>       
            <Navbar workPage={workPage} setWorkPage={setWorkPage} setLoading={setLoading}/>
            {
                (loading) 
                ?   (<Loading /> )
                :   
                (
                    (workPage) ? <AppWork /> : <AppInfo />
                )
            }
        </div>
    )
}